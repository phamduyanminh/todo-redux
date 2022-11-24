import React from 'react';
import { Typography, Divider } from 'antd';


import './App.css';
import TodoList from './components/todolist/TodoList';
import Filters from './components/filters/Filters';


const { Title } = Typography;

function App() {
  return (
    <div 
      style={{
        width: '70%',
        margin: '1% auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 20,
        boxShadow: '0 0 10px 4px #bfbfbf',
        borderRadius: 5,
        height: '92vh',
      }}
    >
      <Title style={{ textAlign: 'center' }}>Built with REDUX and Ant Design</Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;
