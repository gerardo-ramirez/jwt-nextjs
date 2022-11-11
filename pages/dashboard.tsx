import axios, { AxiosHeaders } from 'axios';
import {useRouter} from 'next/router';
import React, {useState} from 'react'; 

function Dashboard(){
const router = useRouter();

const [user, setUser] = useState({email:"", username:""});
    const getProfile= async ()=>{
        const response = await axios.get('/api/profile')
        setUser(response.data)
        
    };

    const logout = async ()=>{
        try {
             let res = await axios.post('/api/auth/logout');
        console.log(res)
        router.push('/login')

        } catch (error) {
            router.push('/login')
        }
       
    }; 

    return (
        <div>
            <h1>Dashboard</h1>
            <pre>
                {JSON.stringify(user, null, 2)}
            </pre>
            <button onClick={()=>getProfile()}>
                get profile
            </button>
            <button onClick={() => logout()}>
                logout
            </button>
        </div>
    )
}
export default Dashboard;