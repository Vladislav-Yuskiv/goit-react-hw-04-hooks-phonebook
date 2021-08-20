import React from "react";
import s from './ContactItem.module.css';
import PropTypes, { object } from "prop-types";
function ContactItem ( { handleBtnDelete ,visibleContacts}) {
        return (
             <>
        {visibleContacts.map(({ id, name, number }, i) => (
          <li key={id} className={s.item}>
            <span className={s.text}>
              {`${i + 1})    `}
              {name}: {number}
            </span>
            <button type="button" onClick={() => handleBtnDelete(id)} className={s.button}>
              Delete
            </button>
          </li>
        ))}
        </>
    )
        
    }

ContactItem.propTypes = {
  handleBtnDelete: PropTypes.func.isRequired,
  visibleContacts: PropTypes.arrayOf(object).isRequired
}
export default ContactItem;