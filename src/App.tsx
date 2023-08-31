import React, {useEffect, useState} from 'react';
import s from './counter.module.css';
import {Button} from './components/button/Button';

function App() {

    let [num, setNum] = useState<number>(0)

    useEffect(() => {
        let numFromLocalStorage = localStorage.getItem('counterValue') //получаем значение из localStorage
        if (numFromLocalStorage) {
            setNum(JSON.parse(numFromLocalStorage))  //JSON.parse(numFromLocalStorage) - перевод значения из строки
        }
    }, []) //при пустом [] эффект выполнится только один раз при загрузке приложения

    let numMax = 5

    let disableInc
    let disableReset

    num === numMax ? disableInc = true : disableInc = false
    num === 0 ? disableReset = true : disableReset = false

    const incNum = () => {
        setNum(++num)
        localStorage.setItem('counterValue', JSON.stringify(num)) //записываем значение в localStorage, JSON.stringify(num) - перевод значения в строку
    }

    const resetNum = () => {
        setNum(0)
        localStorage.setItem('counterValue', JSON.stringify(0))
    }

    const setMinMax = () => {

    }

    return (
        <div className={s.app}>
            <div className={s.counter}>
                <div className={s.numWindow}>
                    <div className={num === numMax ? s.numMax : s.num}>{num}</div>
                </div>
                <div className={s.buttons}>
                    <Button name={'inc'} callback={incNum} disabled={disableInc}/>
                    <Button name={'reset'} callback={resetNum} disabled={disableReset}/>
                </div>
            </div>
            <div className={s.setMinMax}>
                <div className={s.minMaxWindow}>
                    <div className={s.maxWindow}>
                        <span className={s.maxValueText}>Max Value:     </span>
                        <input className={s.maxValueInput} type="number"/>
                    </div>
                    <div className={s.minWindow}>
                        <span className={s.minValueText}>Min Value:     </span>
                        <input className={s.minValueInput} type="number"/>
                    </div>
                </div>
                <div className={s.setButtonWindow}>
                    <Button name={'set'} callback={setMinMax} disabled={false}/>
                </div>
            </div>
        </div>
    );
}

export default App;
