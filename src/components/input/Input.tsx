import React, {ChangeEvent} from 'react';
import s from "./input.module.css";

export const Input = (props: InputType) => {

    const InputOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(Number(e.currentTarget.value))
    };

    return (
        <div>
            <span className={s.valueText}>{props.name}     </span>
            <input
                className={props.error ? s.error : s.input}
                onChange={InputOnChangeHandler}
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
    error: boolean
}