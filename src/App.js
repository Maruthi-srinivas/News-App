// // export default App;
// // src/App.js
// import React from 'react';

// import './App.css';
// import CategorySelector from './components/CategorySelector';

// function App() {
//   return (
//     <div className="App">
//       <h1 className='app-name'>News App</h1>
//       <CategorySelector />
//     </div>
//   );
// }

// export default App;

// // import { Navigate, Route, Routes } from "react-router-dom";
// // import Login from "./components/Login";
// // import Main from "./components/Main";
// // import SignUp from "./components/SignUp";

// // function App() {
// //    const user = localStorage.getItem("token");

// //    return (
// //       <Routes>
// //          {user && <Route path="/" exact element={<Main />} />}
// //          <Route path="/signup" exact element={<SignUp />} />
// //          <Route path="/login" exact element={<Login />} />
// //          <Route path="/" element={<Navigate replace to="/login" />} />
// //       </Routes>
// //    );
// // }

// // export default App;


// import React from 'react';
// import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// import './App.css';
// import Login from './components/Login';
// import Main from './components/Main';
// import SignUp from './components/SignUp';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/login">Login</Link>
//             </li>
//             <li>
//               <Link to="/signup">Sign Up</Link>
//             </li>
//           </ul> 
//         </nav>
//         <h1 className="app-name">News App</h1>
//         <Routes>
//           <Route path="/login" component={Login} />
//           <Route path="/signup" component={SignUp} />
//           <Route path="/" component={Main}>
//           </Route>
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from "./Login";
import MainPage from './MainPage';
import CategorySelector from './components/CategorySelector';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<MainPage/>} />
        <Route path="/news" element={<CategorySelector/>} />
      </Routes>
    </Router>
  );
};

export default App;

