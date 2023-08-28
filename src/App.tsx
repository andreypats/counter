import React, {useState} from 'react';
import s from './counter.module.css';
import {Button} from './components/button/Button';

function App() {

    let [num, setNum] = useState<number>(0)
    let numMax = 5

    let disableInc
    let disableReset

    num === numMax ? disableInc = true : disableInc = false
    num === 0 ? disableReset = true : disableReset = false

    const incNum = () => {
        setNum(++num)
    }

    const resetNum = () => {
        setNum(0)
    }

    return (
        <div className={s.app}>
            <div className={s.counter}>
                <div className={s.num}>{num}</div>
                <div className={s.buttons}>
                    <Button name={'inc'} callback={incNum} disabled={disableInc}/>
                    <Button name={'reset'} callback={resetNum} disabled={disableReset}/>
                </div>

            </div>
        </div>
    );
}

export default App;
