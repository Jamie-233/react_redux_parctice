import React from 'react';
import { connect } from 'react-redux';
import {
  addAction,
  squareAction,
  getAction,
} from '../actions/actions';

// console.log(store.dispatch(addAction(1)));
// console.log(store.dispatch(addAction(2)));
// console.log(store.dispatch(squareAction()));
// console.log(store.getState());

function Container(props) {
  console.log(props);
  const { num, add, square, get } = props;

  return (
    <div>
      <div>{num}</div>
      <button onClick={() => {add(1)}}>加1</button>
      <button onClick={() => {add(2)}}>加2</button>
      <button onClick={() => {square()}}>乘方</button>
      <button onClick={() => {get()}}>获取</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    num: state,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (value) => dispatch(addAction(value)),
    square: (value) => dispatch(squareAction()),
    get: () => dispatch(getAction()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
