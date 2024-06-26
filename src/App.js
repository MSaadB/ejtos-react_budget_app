import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under
import ExpenseList from './components/ExpenseList';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
//import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';


import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                            // Budget component
                            <div className='col-sm'>
                                <Budget />
                            </div>
                        }        

                        {
                            //Remaining component
                            <div className='col-sm'>
                                <Remaining />
                            </div>
                        }        

                        {
                            //ExpenseTotal component
                            <div className='col-sm'>
                                <ExpenseTotal />
                            </div>
                        }

                        {
                            //Currency component
                            <div className='col-sm'>
                                <span>Currency: </span>
                                <input type="select">
                                    <select>
                                        <option value="USD">$ Dollar</option>
                                        <option value="Pound">£ Pound</option>
                                        <option value="Euro">€ Euro</option>
                                        <option value="Ruppee">₹ Ruppee</option>
                                    </select>
                                </input>
                            </div>

                        }        

                    <h3 className='mt-3'>Allocation</h3>
                    <div className='row mt-3'>
                        {
                            //ExpenseList component
                            <div className='col-sm'>
                                <ExpenseList />
                            </div>
                        }
                    </div>         

                        {
                            //ExpenseItem component
                            /*<div className='col-sm'>
                                <ExpenseItem />
                            </div>*/
                        }

                    <h3 className='mt-3'>Change Allocation</h3>
                    <div className='row mt-3'> 
                        {
                            //AllocationForm component
                            <div className='col-sm'>
                                <AllocationForm />
                            </div>
                        }
                    </div>        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;