import React, { useState } from "react";
import PropTypes from "prop-types";
import s from './FormContacts.module.css';

function FormContacts ({ submit }) {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


    const handleChange = ({currentTarget}) => {
    const { name, value } = currentTarget;
      switch (name) {
        case 'name':
          setName(value);
          break;
        case 'number':
          setNumber(value);
          break;

        default:
          return;
      }
    
    }
 
  const  handleChangeSubmit = (e) => {
     e.preventDefault();
     submit({name , number});
     reset();
  };

 const reset = () => {
   setName( '');
   setNumber('');
  };
   
      
        return (
        <form onSubmit={handleChangeSubmit} className={s.form}>
          <label className={ s.label}>
            Name
          <input type="text" name="name" required value={name} onChange={handleChange} className={s.input}></input>
          </label>
          <label  className={  s.label}>
            Number
          <input type="tel" required name="number" value={number} onChange={handleChange} className={s.input}></input>
          </label>
          <button type="submit" className={s.button}>Add to card</button>
        </form>
        )
    }

FormContacts.propTypes = {
    submit: PropTypes.func.isRequired
}
export default FormContacts;