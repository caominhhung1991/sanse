import * as SanSeActionTypes from './sanse.type';
const initialState = {
  khoaHocs: [
    {
      id: 1,
      title: 'Front end courses',
      companies: ['KMS', 'GameLoft', 'FPT', 'Vietel'],
      courses: [
        { 
          id: 'course1',
          title: 'HTML5/CSS3',
          time: '20-30 hours',
        },{
          id: 'course2',
          title: 'Javascript Fundamental ES6/ES7',
          time: '35-45 hours'
        }, {
          id: 'course3',
          title: 'Javascript Framework (React/Angular)',
          time: '50-65 hours'
        }
      ],
      showDetail: false,
      purpose: "Cung cấp các khác học về lập trình mới nhất về front-end như HTML5/CSS3, Javascript Fundamentals (ES6/ES7), Javascript Frameworks (React/ Angular)",

    }, {
      id: 2,
      title: 'Back end courses',
      companies: ['KMS', 'Vietel'],
      courses: [{
        id: 'course4',
        title: 'Node.js',
        time: '45-60 hours'
      }, {
        id: 'course5',
        title: 'Database (Mongodb/Postgresql)',
        time: '35-55 hours'
      }],
      showDetail: false,
      purpose: "Khóa học cung cấp kiến thức về Node.js, Restify, Swagger... và các công cụ Unit test frameworks như Mocha, Chai JS, Nock... để xử lý các tác vụ hệ thống"
    }
    , {
      id: 3,
      title: 'Android Apps Develop',
      companies: ['fsoft', 'fujinet', 'VNG'],
      courses: [{
        id: 'course6',
        title: 'Android, OPP, Java core',
        time: '65-80 hours'
      }, {
        id: 'course7',
        title: 'Database (Oracle/SQL Server)',
        time: '25-35 hours'
      }],
      showDetail: false,
      purpose: "Khóa học giúp cung cấp kiến thức nền tảng để phát triển các úng dụng trên nền hệ điều hành Android"
    },{
      id: 4,
      title: 'iOS Apps Develop',
      companies: ['misfit', 'KMS', 'VNG'],
      courses: [{
        id: 'course8',
        title: 'Swift, Objective C',
        time: '65-80 hours'
      }, {
        id: 'course9',
        title: 'Database (Oracle/SQL Server)',
        time: '25-35 hours'
      }],
      showDetail: false,
      purpose: "Khóa học giúp cung cấp kiến thức nền tảng để phát triển các úng dụng trên nền hệ điều hành iOS"
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