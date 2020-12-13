import React, {Component} from 'react';
import Calculator from '../Calculator/Calculator';
import Footer from '../Misc/Footer';
import Header from '../Misc/Header';
import './App.scss';

class App extends Component{
    render(){
        return(
            <div className={"container"}>
                <Header />
                <Calculator />
                <Footer />
            </div>
        );
    }
};

export default App;