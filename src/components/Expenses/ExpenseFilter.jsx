import React from 'react';
import "./ExpenseFilter.css"

const ExpenseFilter = (props) => {

      const selectYearHendeler = (e) => {
        props.onSelect(e.target.value)
      }
    
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Selek by year</label>
                <select onChange={selectYearHendeler} value={props.filteredYear}>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="All">All</option>
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;