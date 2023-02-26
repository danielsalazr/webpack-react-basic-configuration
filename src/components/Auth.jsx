import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';

const AuthContext = React.createContext();


function AuthProvider({children}) {
  const navigate = useNavigate();
  const [user, setUser] =  React.useState(null);

  /*
    establesco un actualizador que va a llamar a set user para 
    que verifique el estado de login constanetemente
  */
  const login = ({username}) => {
    setUser({username})
    navigate('/')
  }

  const logout = () => {
    setUser(null)
  }

  const auth = {user, login, logout};

  return (
    <AuthContext.Provider value ={auth}>
        {children}
    </AuthContext.Provider>
  )
}

//Esto es un react context
function useAuth(){
    const auth = useContext(AuthContext);
    return auth;
}

export {
    AuthProvider,
    useAuth
}
