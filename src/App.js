import { useEffect } from 'react'
import { ThemeProvider } from '@mui/material/styles'

import theme from 'theme.js'
import LoggedIn from 'components/LoggedIn'
import { useUserState, getUserFromUid, saveUserToDb } from 'utilities/firebase.js'
import './App.css'
import Login from 'components/Login'

const App = () => {
  const user = useUserState();
  
  useEffect(() => {
    if (user === undefined || user === null) return
    getUserFromUid(user.uid).then(userData => {
      if (userData !== null || userData !== undefined) {
        saveUserToDb(user)
      }
    })
  }, [user])

  return (
    <ThemeProvider theme={theme}>
      {(user === null) ? (
        <Login />
      ) : (
        <LoggedIn user={user} />
      )
      }
    </ThemeProvider>
  )
}

export default App;
