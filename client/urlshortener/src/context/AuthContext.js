import React, {createContext , useState} from 'react';

export const AuthContext = createContext();

const AuthProvider = (props)=>{

    const [logged, setlogged] = useState(false);

    return(
        <AuthContext.Provider
            value={{
                logged,
                setlogged
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthProvider;