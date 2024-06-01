import { createContext, useContext, useState } from 'react'

const Context = createContext()

export const useTheme = () => {
  const context = useContext(Context)

  if (!context) {
    throw new Error('useTheme must be used within an ThemeProvider')
  }

  return context
}

export const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false)

  const toggleTheme = () => {
    setDarkTheme(!darkTheme)
  }

  return (
    <Context.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </Context.Provider>
  )
}
