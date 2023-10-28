import React from 'react';
import {BrowserRouter , Route} from 'react-router-dom'
import MessageForm from './component/messageform';
import MessageList from './component/messagelist';
import NavigationBar from './component/navbar';
import './index.css';

function App() {
  return (
    <div className="App">
  <NavigationBar/>
      <BrowserRouter>
      <Route path="/" exact component={MessageForm} />
      <Route path="/list" exact component={MessageList} />
      
      </BrowserRouter>
    </div>
  );
}

export default App;



