import React, { useState } from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = () => {
  const [enteredYear,setEnteredYear] = useState('');
  const clickHandler= (event)=>{
    setEnteredYear(event.target.value);
    console.log(enteredYear);
  }
  
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={clickHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;