import React from "react"
import config from "../../config.json"
import Menu from "../components/Menu"
import Header from "../components/Header"
import Timeline from "../components/Timeline"
import Channels from "../components/Channels"
import Footer from "../components/Footer"
import { videoService } from "../services/videoService"

function HomePage() {
    const service = videoService()
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");
    const [playlists, setPlaylists] = React.useState({});
    // const playlists = {
    //     "Jogos": []
    // }

    React.useEffect(() => {
        service.getAllVideos()
            .then(dados => {
                // Forma imutavel
                const novasPlaylists = { ...playlists }
                dados.data.forEach(video => {
                    if (!novasPlaylists[video.playlist]) {
                        novasPlaylists[video.playlist] = []
                    }
                    novasPlaylists[video.playlist].push(video)
                })
                setPlaylists(novasPlaylists);
            });
    }, []);


    return (
        <div style={{ width: "100%" }} >
            <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
            <Header github={config.github} name={config.name} job={config.job} banner={config.banner} />
            <Timeline searchValue={valorDoFiltro} playlists={playlists} />
            <Channels channels={config.channels} />
            <Footer />
        </div>
    )
}

export default HomePage