import React from "react"

export const ColorModeContext = React.createContext({
    mode: "",
    setMode: () => { alert("Você previsa me configurar primeiro") },
    toggleMode: () => { alert("Você previsa me configurar primeiro") }
})

export default function ColorModeProvider(props) {
    const [mode, setMode] = React.useState(props.initialMode);

    function toggleMode() {
        mode === "dark" ? setMode("light") : setMode("dark")
    }

    return (
        <ColorModeContext.Provider value={{mode, setMode, toggleMode}}>
            {props.children}
        </ColorModeContext.Provider>
    )

}