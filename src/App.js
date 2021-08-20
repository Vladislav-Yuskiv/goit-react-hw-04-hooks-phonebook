import React, { useState ,useEffect } from "react";
import Filter from "./Components/Filter";
import shortid from 'shortid';
import FormContacts from "./Components/FormContacts";
import ContactList from "./Components/ContactList";
import ContactItem from "./Components/ContactItem";

function App (){
 
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

    useEffect(() => {
    if (localStorage.getItem("contacts")?.length > 0) {
      setContacts(JSON.parse(localStorage.getItem("contacts")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);


 const addContact = ({ name, number }) => {
     if (contacts.find( contact => contact.name === name)) {
        return alert(`${name} is already in contacts`)
     }
    const contact = {
       id: shortid.generate(),
       name,
       number
    }
    
    setContacts( (prev) => [...prev , contact])
   
  }

  const deleteContact = (contactId) => {
    setContacts( contacts.filter((item) => {
        return item.id !== contactId;
       }) )
  };
  
   const changeFilter = ({currentTarget}) => {
    setFilter( currentTarget.value);
  }
  
     const normalizedFilter = filter.toLocaleLowerCase();
     const visibleContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(normalizedFilter));
     
    return (
      <>
        <h1>PHONEBOOK</h1>
        <FormContacts submit={addContact} />
        <Filter title={"Contacts"} value={filter} handleChange={changeFilter}/>
        <ContactList >
           {contacts.length === 0 && <h2>Список ваших контактів пустий</h2>}
          <ContactItem  handleBtnDelete={deleteContact} visibleContacts={visibleContacts}/>
        </ContactList>
       
      </>
    )
  }


export default App;
