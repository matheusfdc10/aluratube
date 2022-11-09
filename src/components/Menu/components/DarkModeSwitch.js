import React from "react";
import { ColorModeContext } from "./ColorMode";
import { StyledSwitch } from "../../../styled/DarkModeSwitch"

export default function DarkModeSwitch() {
    const contexto = React.useContext(ColorModeContext);

    return (
        <StyledSwitch>
            <input id="darkmode" type="checkbox" onChange={() => {
                // console.log("mudou o state");
                contexto.toggleMode();
            }} />
            <label
                htmlFor="darkmode"
                className="darkmode-switch"
            >
                <span>🌙</span>
                <span>☀️</span>
            </label>
        </StyledSwitch>
    )
}