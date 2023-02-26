import React from 'react'
import { useAuth } from '../components/Auth';


function LoginPage() {

    const auth = useAuth();

    const [username, setUsername] = React.useState('');
    const login = (e) => {
        e.preventDefault();
        auth.login({username})
        console.log(username);
        console.log("Logueando");      
    }

    return (
    <>  

        { auth.user === null && <h1>Login page</h1>}
        {auth.user === null && <form action="" onSubmit={login}>
            <label >Iniciar Sesion</label>
            <input type="text"  value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <button type='submit' > Ingresar</button>
        </form>}
        
    </> 
        
    )
}

export default LoginPage
