import { ADD, SQUARE, GET } from '../constans/actionType';

// const addOne = {
//   type: ADD,
//   num: 1
// };

// const addTwo = {
//   type: ADD,
//   num: 2
// };

// const square = {
//   type: SQUARE,
//   num: 2
// };

// Action 创建函数:
const addAction = (num) => {
  return {
    type: ADD,
    num
  }
};

const squareAction = (num) => {
  return {
    type: SQUARE
  }
};

const stringAction = (data) => {
  return {
    type: GET,
    data
  }
};

const getAction = () => {
  // 如果返回的一个方法会执行方法 拿到结果之后会执行 dispatch
  return (dispatch, getState) => {
    fetch('./data.json')
    // res 是一个对象
    .then(res => res.json())
    .then(res => {
      console.log(res[2]);
      dispatch(stringAction(res[2]));
    });
  }
};

export {
  addAction,
  squareAction,
  getAction
};
