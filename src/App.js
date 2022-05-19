import './App.css';
import React,{useState} from 'react';
import MemoToolbar from './MemoToolbar.js';
import Board from './Memolists.js';
function App() {
  const [IsTyping,setIsTyping]=useState(true);
  return (
      <div className="App">
      <MemoToolbar IsTyping={IsTyping} setIsTyping={setIsTyping}></MemoToolbar>
      <Board IsTyping={IsTyping} setIsTyping={setIsTyping}></Board>
      </div>
  );
}

export default App;
