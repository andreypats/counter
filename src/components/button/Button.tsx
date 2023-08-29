import React from 'react';
import s from "./button.module.css";

export const Button = (props: ButtonType) => {
    return (
        <button
            className={s.button}
            onClick={props.callback}
            disabled={props.disabled}
        >
            {props.name}
        </button>
    );
};

type ButtonType = {
    name: string
    callback: () => void
    disabled: boolean
}