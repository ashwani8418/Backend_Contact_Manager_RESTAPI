import "./App.css";
import Expenses from "./Components/Expense/Expenses";
import React from 'react';

function App() {
  let expenseDetails = [
      {
        id : 1,
        title : "Booked ticket for Katra",
        amount : 1800,
        date : new Date(2023, 4, 25)
      },
      {
        id : 2,
        title : "Booked ticket for Katra to Delhi",
        amount : 1900,
        date : new Date(2023, 4, 30)
      },
      {
        id : 3,
        title : "Hotel booking in katra",
        amount : 600,
        date : new Date(2023, 4, 26)
      },
      {
        id : 4,
        title : "Dinner at Katra",
        amount : 400,
        date : new Date(2023, 4, 26)
      },
      {
        id : 5,
        title : "Breakfast",
        amount : 350,
        date : new Date(2023, 4, 27)
      }

    ]

  return (
    <div>
      <Expenses expense ={expenseDetails}/> 
    </div>
  );
}

export default App;
