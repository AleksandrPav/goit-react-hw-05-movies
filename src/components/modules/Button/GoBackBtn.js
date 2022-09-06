import React from "react";
import css from "./GoBackBtn.module.css";

const GoBackBtn = ({ onClick }) => {
    return (
        <button type='button' className={css.btn} onClick={onClick}>
        Go back
        </button>
    );
}
    
export default GoBackBtn;