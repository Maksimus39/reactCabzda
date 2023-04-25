import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <div>Hello world</div>
 /* <React.StrictMode>
    <App />
  </React.StrictMode>*/
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



let a = 10;
a = 12;

//a = "Macson";  // в Ts нельзя переназначать данные с чисел на строки,будет предупреждение

let b = {name: "Macsim"};
//b= 12;
//b = "Macsim"; // мы можем к ранее объявленному объекту(если он пустой) приклеить и цифру и строку.

let c = {name: "Larisa",
                      age: 37,

};
c = {name: "Olga",
     age: 50,
};                    // а переназначать объекты мы можем



let d = {name: "Larisa",
    age: 37,
    address: {
    city:  "Lipetsk",
    country: "Russia"
    }
};
console.log(d.address.country)

let users = [
    {
        name: "Max",
        age: 39,
        address: {
            city: "Lipeck",
            country: "Russia"
        }
    },
    {
        name: "Larisa",
        age: 39,
        address: {
            city: "Lipeck",
            country: "Russia"
        }
    }
]
console.log(users[1].address.city)











