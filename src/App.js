import React from 'react';
import Expenses from './component/Expenses';

function App() {
  const expenses = [
    {
      id: 'e1',
      title:'car insurance',
      amount:345.98, 
      date: new Date(2021, 2, 28)
    },
    {
      id: 'e2',
      title:'dry cleaning', 
      amount:65.65, 
      date: new Date(2021, 4, 6)
    }
  ];
  return (
    <div>
      <h2>Let's get started! </h2>
      <Expenses items={expenses} />
    </div>
  )
  
}

export default App;
