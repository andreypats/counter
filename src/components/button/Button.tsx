import React from 'react';

export const Button = (props: ButtonType) => {
    return (
        <button>{props.name}</button>
    );
};

type ButtonType = {
    name: string
}