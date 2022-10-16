import React, {useState} from 'react';
import './App.css';
import {Header} from './site/Header';
import {Body} from './site/Body';
import {Footer} from './site/Footer';
import {NewComponent} from './NewComponent';

function App() {
    let [students, setStudents] = useState([
        {id: 1, name: 'Ann', age: 18},
        {id: 2, name: 'Vik', age: 17},
        {id: 3, name: 'Maks', age: 20},
        {id: 4, name: 'Bob', age: 18},
        ]);
    return (

        <div className="App">
            <header className="App-header">
                <Header title={'New HEADER'}/>
                <Body title={'New Body'}/>
                <Footer title={'New Footer'}/>
            </header>
            <NewComponent students={students} />
        </div>
    );
}

export default App;
