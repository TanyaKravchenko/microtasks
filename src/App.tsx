import React, {useState} from 'react';
import './App.css';
import {Header} from './site/Header';
import {Body} from './site/Body';
import {Footer} from './site/Footer';
import {NewComponent} from './NewComponent';
import {Button} from './components/Button/Button';

function App() {
    let [students, setStudents] = useState([
        {id: 1, name: 'Ann', age: 18},
        {id: 2, name: 'Vik', age: 17},
        {id: 3, name: 'Maks', age: 20},
        {id: 4, name: 'Bob', age: 18},
    ]);
    // const MyButtonOne = (event: MouseEvent<HTMLButtonElement>) => {alert('hi')}
    // const MyButtonTwo = () => {alert('hi, i am Vasya')}
    // const onClickHandler = (name: string) => {
    //     alert(name)
    // }

    // const foo1 = () => {alert('100200')}
    // const foo2 = (name: string) => {alert(name)}

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
    let[a, setA] = useState(1)

    const onClickHandler = () => {
        setA(++a)
        console.log(a)
    }
    const onClickHandler0 = () => {
        setA(0)
   
    }

    return (
        <div className="App">
            <header className="App-header">
                ---M1---
                <Header title={'New HEADER'}/>
                <Body title={'New Body'}/>
                <Footer title={'New Footer'}/>
            </header>
            ---M2---
            <NewComponent students={students}/>
            ---M3---
            {/*<button onClick={(event)=>{alert('hi')}}>MyButton</button>*/}
            {/*<button onClick={(event) => onClickHandler('Vasya')}>MyButton-One</button>*/}
            {/*<button onClick={(event) => onClickHandler('Ivan')}>MyButton-Two</button>*/}
            {/*<button onClick={() => onClickHandler('Yo-Yo')}>MyButton-Yo</button>*/}
            {/*<button onClick={foo1}>1</button>*/}
            {/*<button onClick={(event) => foo2('100200')}>2</button>*/}
            <Button name={'MyButton-YO'} callback={() => ButtonYOFoo('Vasya', 21)}/>
            <Button name={'MyButton-One'} callback={() => ButtonOneFoo('Ivan')}/>
            <Button name={'SimpleButton'} callback={SimpleButton}/>
            ---M4---
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandler0}>0</button>
        </div>
    );
}

export default App;
