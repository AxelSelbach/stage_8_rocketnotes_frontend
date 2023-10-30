import { createContext, useContext } from "react";

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  return ( 
    <AuthContext.Provider value={{ email: 'axel@gmail.com' }}>
      {children}
    </AuthContext.Provider>
   )
}

function useAuth() {
  const context = useContext(AuthContext)
}

export { AuthProvider, useAuth }