import { useEffect, useState } from "react"
import React from "react"

const getInitialTheme = () => {
    if (typeof window !== "undefined" && window.localStorage) {
        const storedPrefs = window.localStorage.getItem("current-theme")
        if (typeof storedPrefs === 'string') {
            return storedPrefs
        }
        if (window.matchMedia("(prefers-color-theme: dark)").matches) {
            return "dark"
        }
    }
    return "light"
}


const Theme = ({ getInitialTheme, children}) => {
    const [theme, setTheme] = useState(getInitialTheme)

    const checkTheme = (existing) => {
        const root = window.document.documentElement
        const isDark = existing === 'dark'

        root.classList.remove(isDark ? 'light' : 'dark')
        root.classList.add(existing)

        localStorage.getItem('current-theme', existing)

        if (initialTheme) {
            checkTheme(initialTheme)
        }

        useEffect( () => {
            checkTheme(initialTheme)
        }, [theme])
    }
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
    </ThemeContext.Provider>
  )
}

export const ThemeContext = React.createContext()