import React from "react"
import config from "../../config.json"
import Menu from "../components/Menu"
import Header from "../components/Header"
import Timeline from "../components/Timeline"
import Channels from "../components/Channels"
import Footer from "../components/Footer"


function HomePage() {
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");

    return (
        <div style={{width: "100%"}} >
            <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}/>
            <Header github={config.github} name={config.name} job={config.job} banner={config.banner}/>
            <Timeline searchValue={valorDoFiltro} playlists={config.playlists}/>
            <Channels channels={config.channels}/>
            <Footer />
        </div>
    )
}

export default HomePage