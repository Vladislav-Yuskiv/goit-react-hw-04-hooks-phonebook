import React from "react";
import PropTypes from "prop-types";
import s from './ContactList.module.css';

function ContactList ({children}) {    
        return (
            <ul className={s.list}>
               {children}
            </ul>
        )
    }
ContactList.propTypes = {
    children: PropTypes.any.isRequired 
}
export default ContactList;