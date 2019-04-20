import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

import 'normalize.css/normalize.css'
import '../styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import * as moment from 'moment';

const store = configureStore(); //=> return value from `configureStore'
// store.subscribe(() => {
//   const state = store.getState();
//   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
//   // console.log('visibleEx:');
//   console.log(visibleExpenses);
// });

// const expenseOne = store.dispatch(addExpense({
//   description: 'Water Bill', amount: 52, createdAt: '2019-04-12'
// }));
// const expenseThree = store.dispatch(addExpense({
//   description: 'Cable Bill', amount: 1252, createdAt: '2019-04-12'
// }))
// const expenseTwo = store.dispatch(addExpense({
//   description: 'Gas Bill', amount: 80, createdAt: '2019-04-12'
// }))
// const expenseFour = store.dispatch(addExpense({
//   description: 'Rent Bill', amount: 80, createdAt: '2019-04-12'
// }))
// // store.dispatch(setTextFilter('water'));

// // setTimeout(() => {
// //   store.dispatch(setTextFilter('gas'));
// // }, 3000);


// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)


// console.log('App: visibleExpenses:', visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));
// ReactDOM.render(<AppRouter />, document.getElementById('app'));
