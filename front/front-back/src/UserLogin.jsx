import React, { useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function UserLogin() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        const userAuth = localStorage.getItem("userData");
        if (userAuth) {
            navigate("/")
        }
    }, [])




    const Loginhandle = async () => {
        let result = await axios.post("http://localhost:8080/user/login", {
            username: username,
            password: password
        })
        result = result.data

        if (result.name) {
            localStorage.setItem("userData", JSON.stringify(result))
            navigate("/")
        }
        else {
            alert("Please Enter Correct Details")
        }
    }


    return (
        <div>
            <h1>User Login</h1>
            <form action="">
                <input type="text" placeholder='Username' value={username} onChange={(e) => { setUsername(e.target.value) }} />
                <input type="password" placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <div className="btn">
                    <button onClick={(e) => {
                        e.preventDefault()
                        Loginhandle()
                    }}>Login</button>
                    <button onClick={() => { navigate("/userSignUp") }}>SignUp</button>
                </div>




            </form>
        </div>
    )
}

export default UserLogin