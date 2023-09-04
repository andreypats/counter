import React, {useEffect, useState} from 'react';
import s from './counter.module.css';
import {Button} from './components/button/Button';
import {Input} from "./components/input/Input";

function App() {

    let [num, setNum] = useState<number>(0)
    let [numMax, setNumMax] = useState<number>(5)
    let [numMin, setNumMin] = useState<number>(0)

    useEffect(() => {
        let numFromLocalStorage = localStorage.getItem('counterValue') //получаем значение из localStorage
        if (numFromLocalStorage) {
            setNum(JSON.parse(numFromLocalStorage))  //JSON.parse(numFromLocalStorage) - перевод значения из строки
        }
        let maxNumFromLocalStorage = localStorage.getItem('counterMaxValue')
        if (maxNumFromLocalStorage) {
            setNumMax(JSON.parse(maxNumFromLocalStorage))
        }
        let minNumFromLocalStorage = localStorage.getItem('counterMinValue')
        if (minNumFromLocalStorage) {
            setNumMin(JSON.parse(minNumFromLocalStorage))
        }
    }, []) //при пустом [] эффект выполнится только один раз при загрузке приложения

    let disableInc
    let disableReset
    let disableSet

    num === numMax ? disableInc = true : disableInc = false
    num === numMin ? disableReset = true : disableReset = false
    numMin < num || numMax <= numMin ? disableSet = true : disableSet = false

    const incNum = () => {
        setNum(++num)
        localStorage.setItem('counterValue', JSON.stringify(num)) //записываем значение в localStorage, JSON.stringify(num) - перевод значения в строку
    }

    const resetNum = () => {
        setNum(numMin)
        localStorage.setItem('counterValue', JSON.stringify(numMin))
    }

    const setMinMax = () => {
        localStorage.setItem('counterMaxValue', JSON.stringify(numMax))
        localStorage.setItem('counterMinValue', JSON.stringify(numMin))
    }

    const maxValueInputHandler = (num: number) => {
        setNumMax(num)
    };

    const minValueInputHandler = (num: number) => {
        setNumMin(num)
    };

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
                    <Input
                        name={'Max Value:'}
                        onChange={maxValueInputHandler}
                        defaultValue={numMax}
                    />
                    <Input
                        name={'Min Value:'}
                        onChange={minValueInputHandler}
                        defaultValue={numMin}
                    />
                </div>
                <div className={s.setButtonWindow}>
                    <Button name={'set'} callback={setMinMax} disabled={disableSet}/>
                </div>
            </div>
        </div>
    );
}

export default App;
