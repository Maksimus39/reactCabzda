import React from 'react';
import logo from './logo.svg';
import './App.css';
import {findAllByDisplayValue} from "@testing-library/react";

function App() {
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

function Rating() {
    return (
        <>
           <Star/>
           <Star/>
           <Star/>
           <Star/>
           <Star/>
        </>
    );
}

function  Accordion() {
    return <div>
        <AccordionTitle/>
        <AccordionBody/>
       {/* <h3>Menu</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>*/}
    </div>
}

function AccordionTitle() {
    return (
        <div>
            <h3>Menu</h3>
        </div>
    )
}
function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}
function Star(){
    return (
        <div>star</div>
    )

}
function AppTitle() {
    return (
        <>This is App component</>
    )



}













export default App;