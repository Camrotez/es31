import { useState } from "react"

function Login(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [checkbox, setCheckbox] = useState("")
    const name = (e) =>{
        e.preventDefault()
        const value = e.target.value
        setUsername(value)
    }
    const pass = (e) =>{
        e.preventDefault()
        const value = e.target.value
        setPassword(value)
    }
    const check = (e) =>{
        const value = e.target.checked
        setCheckbox(value)
    }
    const log =(e)=>{
        e.preventDefault()
        console.log(username,password,checkbox);
    }
    return(
        <form>
            <input onChange={name} type="text" />
            <input onChange={pass} type="password" />
            <input onClick={check} type="checkbox" />
            <button onClick={log} type="submit">Login</button>
        </form>
    )
}

export default Login