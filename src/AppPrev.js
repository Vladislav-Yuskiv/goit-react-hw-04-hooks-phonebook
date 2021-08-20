import React, { Component } from "react";
import Filter from "./Components/Filter";
import shortid from 'shortid';
import FormContacts from "./Components/FormContacts";
import ContactList from "./Components/ContactList";
import ContactItem from "./Components/ContactItem";

class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
     ],
    filter: '',
  }
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts })
    }
  }
  componentDidUpdate(prevProps , prevState) {
    if (this.state.contacts !== prevState.contacts) {
       localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
     }
   }

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
     if (contacts.find( contact => contact.name === name)) {
        return alert(`${name} is already in contacts`)
     }
    const contact = {
       id: shortid.generate(),
       name,
       number
    }
  
   
    this.setState(({contacts}) => ({
          contacts: [...contacts , contact]
        }))
   
  }
 
    
  deleteContact = (contactId) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter((item) => {
        return item.id !== contactId;
      }),
    }));
  };
  
  changeFilter = ({currentTarget}) => {
    this.setState({ filter : currentTarget.value})
  }
  
   render() {
     const { contacts,  filter } = this.state;
     const normalizedFilter = filter.toLocaleLowerCase();
     const visibleContacts =contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
     
    return (
      <>
        <h1>PHONEBOOK</h1>
        <FormContacts submit={this.addContact} />
        <Filter title={"Contacts"} value={filter} handleChange={this.changeFilter}/>
        <ContactList >
           {contacts.length === 0 && <h2>Список ваших контактів пустий</h2>}
          <ContactItem  handleBtnDelete={this.deleteContact} visibleContacts={visibleContacts}/>
        </ContactList>
       
      </>
    )
  }
}

export default App;
