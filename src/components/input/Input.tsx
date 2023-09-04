import React, {ChangeEvent} from 'react';
import s from "./input.module.css";

export const Input = (props: InputType) => {

    const InputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(Number(e.currentTarget.value))
    };

    return (
        <div>
            <span className={s.valueText}>{props.name}     </span>
            <input
                className={s.input}
                onChange={InputHandler}
                type="number"
                value={props.defaultValue}
            />
        </div>
    );
};

type InputType = {
    name: string
    onChange: (num: number)=>void
    defaultValue: number
}