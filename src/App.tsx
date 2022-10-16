import React from 'react';
import './App.css';
import {Header} from './site/Header';
import {Body} from './site/Body';
import {Footer} from './site/Footer';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Header title={'New HEADER'}/>
                <Body title={'New Body'}/>
                <Footer title={'New Footer'}/>
            </header>
        </div>
    );
}

export default App;
