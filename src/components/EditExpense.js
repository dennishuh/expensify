import React from 'react';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

const EditExpensePage = (props) => {
  return (
    <div>
      <ExpenseForm
        onSubmit={(expense) => {
          props.onEditSubmit(props.match.params.id, expense);
          props.history.push('/');
        }}
        expense={props.expense}
      />
      <button onClick={() => {
        props.onRemoveExpense(props.match.params.id);
        props.history.push('/');
      }}>Remove</button>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onEditSubmit: (id, expense) => dispatch(editExpense(id, expense)),
    onRemoveExpense: (id) => dispatch(removeExpense({id}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
