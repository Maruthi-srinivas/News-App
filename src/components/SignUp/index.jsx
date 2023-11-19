import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

const SignUp = () =>{
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange=({currentTarget: input})=>{
        setData({...data, [input.name]: input.value});
    };

    const handleSubmit = async(e) =>
    {
        e.preventDefault()
        try{
            const url = "https://localhost:8080/api/users";
            const {data:res} = await axios.post(url,data);
            console.log(res.message);
        }catch(error){
            if(error.response && error.response.status>=400 && error.response.status<=500)
            {
                setError(error.response.data.message)
            }
        }
    }

    return(
        <div className={styles.signup_container}>
            <div className={styles.signup_form_container}>
                <div className={styles.left}>
                    <h1>Welcome Back</h1>
                    <Link to="/login">
                        <button className={styles.white_btn}>Sign In</button>
                    </Link>
                </div>
                <div className={styles.right}>
                    <form className={styles.form_container} onSubmit={handleSubmit}>
                        <h1>Create an account</h1>
                        <input className={styles.input} type="text" placeholder='Name' name='name' value={data.name} onChange={handleChange} required/>
                        <input className={styles.input} type="email" placeholder='Email' name='email' value={data.email} onChange={handleChange} required/>
                        <input className={styles.input} type="password" placeholder='Password' name='password' value={data.password} onChange={handleChange} required/>
                        {error && <div className={styles.error_msg}>{error}</div>}
                        <button type='submit' className={styles.green_btn}>
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}