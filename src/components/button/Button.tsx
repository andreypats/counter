import React from 'react';

export const Button = (props: ButtonType) => {
    return (
        <button
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