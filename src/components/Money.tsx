import React from 'react';
import {BanknotsType} from '../App';

type MoneyPropsType = {
    money: Array<MoneyType>
    onClickFilterHandler: (nameButton: BanknotsType) => void
    currentMoney: Array<MoneyType>
}
type MoneyType = {
    banknots: string
    value: number
    number: string
}

export const Money = (props: MoneyPropsType) => {
    return (
        <>
            <ul>
                {props.currentMoney.map((el, index) => {
                    return (
                        <li key={index}>
                            <span>{el.banknots}</span> --
                            <span>{el.value}</span> --
                            <span>{el.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={() => props.onClickFilterHandler('All')}>All</button>
                <button onClick={() => props.onClickFilterHandler('RUBLS')}>RUBLS</button>
                <button onClick={() => props.onClickFilterHandler('Dollars')}>Dollars</button>
            </div>
        </>
    );
}