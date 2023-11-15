// export default App;
// src/App.js
import React from 'react';
import CategorySelector from './components/CategorySelector';

function App() {
  return (
    <div className="App">
      <h1>News App</h1>
      <CategorySelector />
    </div>
  );
}

export default App;
// // Frontend code 
// // Filename - App.js
// // Filename - App.js

// import { useState } from 'react';
// function App() {
// 	const [name, setName] = useState("");
// 	const [email, setEmail] = useState("");
// 	const handleOnSubmit = async (e) => {
// 		e.preventDefault();
// 		let result = await fetch(
// 		'http://localhost:5000/register', {
// 			method: "post",
// 			body: JSON.stringify({ name, email }),
// 			headers: {
// 				'Content-Type': 'application/json'
// 			}
// 		})
// 		result = await result.json();
// 		console.warn(result);
// 		if (result) {
// 			alert("Data saved succesfully");
// 			setEmail("");
// 			setName("");
// 		}
// 	}
// 	return (
// 		<>
// 			<h1>This is React WebApp </h1>
// 			<form action="">
// 				<input type="text" placeholder="name"
// 				value={name} onChange={(e) => setName(e.target.value)} />
// 				<input type="email" placeholder="email"
// 				value={email} onChange={(e) => setEmail(e.target.value)} />
// 				<button type="submit"
// 				onClick={handleOnSubmit}>submit</button>
// 			</form>

// 		</>
// 	);
// }

// export default App;

