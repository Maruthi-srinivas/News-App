// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import LoginPage from './LoginPage';
// import RegistrationPage from './RegistrationPage';

// const App = () => {
//   return (
//       <BrowserRouter>
//       <Routes>
//         <Route path='/login' element={<LoginPage/>}/>
//         <Route path='/register' element={<RegistrationPage/>}/>
//       </Routes>
//       </BrowserRouter>
//   )
// }

// export default App;

// //src/MainPage.js
// import React from 'react';
// import { Link, Route, Routes } from 'react-router-dom';
// import Login from './Login';
// import styles from './styles.module.css';

// const MainPage = () => {
//   return (
//     <div className={styles.start_page}>
//       <h1>Welcome to My App</h1>
//       <div className={styles.button_container}>
//         <Link to="/login">
//           <button className={styles.green_btn}>Login</button>
//         </Link>
//       </div>

//       {/* Use a Switch to render only the first matching route */}
//       <Routes>
//         {/* Define routes for Login and SignUp components */}
//         <Route path="/login" component={Login} />
//       </Routes>
//     </div>
//   );
// };

// export default MainPage;

// MainPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const MainPage = () => {
  return (
    <div className={styles.start_page}>
      <h1>Welcome to News App</h1>
      <div className={styles.button_container}>
        <Link to="/login">
          <button className={styles.green_btn}>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;


