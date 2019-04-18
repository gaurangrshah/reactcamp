import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'
import moment from 'moment';

test('should set default State', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
})


test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]])
});

test('should not remove expense if no id found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
    // '-1' provides a falsy value
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses)
});


test('should add an expense', () => {
  const expense = {
    id: '109',
    description: 'Laptop',
    note: '',
    amount: 20000,
    createdAt: 29500,
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense by id', () => {
  const amount = 122000
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount
    }
  }

  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});

test('should not edit an if no id found', () => {
  const amount = 11100;
  const action = {
    type: 'EDIT_EXPENSE',
    id: undefined,
    updates: {
      amount
    }
  }

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

