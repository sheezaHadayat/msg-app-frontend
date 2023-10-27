import React from 'react';
import {BrowserRouter , Route} from 'react-router-dom'
import MessageForm from './component/messageform';
import MessageList from './component/messagelist';
import './index.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route path="/" exact component={MessageForm} />
      <Route path="/list" exact component={MessageList} />
      
      </BrowserRouter>
    </div>
  );
}

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import MessageFeed from './component/messagefeed';
// import MessageForm from './component/messageform';


// const App = () => {
//   return (
//     <Router>
//       <div className="app">
//         <h1>Social Media Feed</h1>
//         <Switch>
         
//           <Route path="/" component={MessageForm} />
//           <Route path="/feed" exact component={MessageFeed} />
//         </Switch>
//       </div>
//     </Router>
//   );
// };

// export default App;
