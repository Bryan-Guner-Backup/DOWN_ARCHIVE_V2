import React, { useEffect, useState } from 'react'
import { UserContext } from './UserContext'
import { DarkModeContext } from './DarkModeContext'
import Routes from './components/routes/Routes'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import './sass_master/index.scss'
import CssBaseline from '@material-ui/core/CssBaseline'

function App () {
  const [user, setUser] = useState({})
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode === true) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [darkMode])

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkMode ? 'dark' : 'light'
        }
      }),
    [darkMode]
  )

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes />
        </ThemeProvider>
      </DarkModeContext.Provider>
    </UserContext.Provider>
  )
}

export default App
