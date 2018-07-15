import * as SanSeActionTypes from './sanse.type';
const initialState = {
  khoaHocs: [
    {
      id: 1,
      title: 'Front end courses',
      companies: ['KMS', 'GameLoft', 'FPT', 'Vietel'],
      showDetail: true,
      purpose: "Cung cấp các khác học về lập trình mới nhất về front-end như HTML5/CSS3, Javascript Fundamentals (ES6/ES7), Javascript Frameworks (React/ Angular)",

    }, {
      id: 2,
      title: 'Back end courses',
      companies: ['KMS', 'Vietel'],
      showDetail: false,
      purpose: "Khóa học cung cấp kiến thức về Node.js, Restify, Swagger... và các công cụ Unit test frameworks như Mocha, Chai JS, Nock... để xử lý các tác vụ hệ thống"
    }
  ], 
  user: {
    username: 'nghiatran',
    birthday: '1997',
    
  }
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SanSeActionTypes.HELLO: {
      break;
    }

    default:
      return state;
  }
}