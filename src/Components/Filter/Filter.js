import React from "react";
import PropTypes from "prop-types";
import s from './Filter.module.css'

function Filter ({ title, value, handleChange }){
        return (
            <>
                <h2 className={s.title}>{title}</h2>
                <label className={s.label}>
                Find contacts by name 
                <input type="text" value={value} name="filter" onChange={handleChange} className={s.input}></input>
                </label>
            </>
        )
    }


Filter.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string.isRequired,
    handleChange:PropTypes.func.isRequired
}
export default Filter;