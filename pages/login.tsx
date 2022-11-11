
import React, {useState
} from 'react';
import axios from 'axios';
import { useRouter } from "next/router";


function LoginPage() {
  const router = useRouter();
const [credentials, setCredentials] = useState({
    email:"",
    password:""
})
    const handleChange = (e)=>{
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    };

    const handleSumbit = async (e)=>{
        e.preventDefault(); 
         const response = await axios.post('/api/auth/login', credentials);
         console.log(response);
         if(response.status == 200){
            router.push('/dashboard');
         }

    }; 
    return (
        <form onSubmit={handleSumbit}>
            <input type={"email"} name={'email'} placeholder={'Email'} onChange={handleChange}/>
            <input type={"password"} name={'password'} placeholder={'pass'} onChange={handleChange} />
        <button>Login</button>

        </form>
    )
};
export default LoginPage