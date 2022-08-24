import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Components/Card';
import CardList from './Components/CardList';
import App from './Containers/App';
import 'tachyons';
import reportWebVitals from './reportWebVitals';
import './Containers/App.css';
// import { robots } from './robots';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <CardList robots={robots}/>
//   </React.StrictMode>
// );


/* <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
<Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
<Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/> */