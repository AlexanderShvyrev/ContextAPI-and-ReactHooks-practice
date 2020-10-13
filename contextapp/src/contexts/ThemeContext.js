// CREATING CONTEXT

import React, { createContext, Component } from 'react'

export const ThemeContext = createContext()

class ThemeContextProvider extends Component {
    // creating themes
    state = {
        isLightTheme: true,
        light: {
            text: '#555',
            ui: '#ddd',
            bg: '#eee'
        },
        dark: {
            text: '#ddd',
            ui: '#333',
            bg: '#555'
        }
    }

    toggleTheme = () => {
        this.setState({ isLightTheme: !this.state.isLightTheme })
    }
    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }} >
                {/* refers to the whatever components it wraps */}
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}
export default ThemeContextProvider