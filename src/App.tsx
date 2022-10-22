import React, {useState} from 'react';
import './App.css';
import {Header} from './site/Header';
import {Body} from './site/Body';
import {Footer} from './site/Footer';
import {NewComponent} from './NewComponent';
import {Button} from './components/Button/Button';
import {Money} from './components/Money';
import {FullInput} from './components/FullInput';

export type BanknotsType = 'All' | 'RUBLS' | 'Dollars'

function App() {
    let [students, setStudents] = useState([
        {id: 1, name: 'Ann', age: 18},
        {id: 2, name: 'Vik', age: 17},
        {id: 3, name: 'Maks', age: 20},
        {id: 4, name: 'Bob', age: 18},
    ]);

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ]);

    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }

    const ButtonYOFoo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }

    const ButtonOneFoo = (subscriber: string) => {
        alert(subscriber)
    }

    const SimpleButton = () => {
        console.log('I am SimpleButton')
    }

    //let a = 1
    let [a, setA] = useState(1)

    const onClickHandler = () => {
        setA(++a)
        console.log(a)
    }
    const onClickHandler0 = () => {
        setA(0)

    }

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    let [filter, setFilter] = useState<BanknotsType>('All')

    let currentMoney = money;

    if (filter === 'Dollars') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'Dollars')
    }
    if (filter === 'RUBLS') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'RUBLS')
    }

    const onClickFilterHandler = (nameButton: BanknotsType) => {
        setFilter(nameButton)
    }

    return (
        <div className="App">
            <header className="App-header">
                <div className="HW">
                    ---Microtask1---
                </div>
                <Header title={'New HEADER'}/>
                <Body title={'New Body'}/>
                <Footer title={'New Footer'}/>
            </header>
            <div className="HW">
                ---Microtask2---
            </div>
            <NewComponent students={students}/>
            <div className="HW">
                ---Microtask3---
            </div>
            <Button name={'MyButton-YO'} callback={() => ButtonYOFoo('Vasya', 21)}/>
            <Button name={'MyButton-One'} callback={() => ButtonOneFoo('Ivan')}/>
            <Button name={'SimpleButton'} callback={SimpleButton}/>
            <div className="HW">
                ---Microtask4---
            </div>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandler0}>0</button>
            <div className="HW">
                ---Microtask5---
            </div>
            <Money
                money={money}
                onClickFilterHandler={onClickFilterHandler}
                currentMoney={currentMoney}/>
            <div className="HW">
                ---Microtask6---
            </div>
            <FullInput
                message={message}
                addMessage={addMessage}
            />
        </div>
    );
}

export default App;
