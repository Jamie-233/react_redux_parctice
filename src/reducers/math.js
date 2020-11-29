import { ADD, SQUARE, GET } from '../constans/actionType';

const math = (state=10, actiotn) => {
  switch (actiotn.type) {
    case ADD:
      return state + actiotn.num;
    case SQUARE:
      if(typeof state !== 'number') return 0;
      return state * state;
    case GET:
      return actiotn.data;
    default:
      return state;
  }
};

export default math;
