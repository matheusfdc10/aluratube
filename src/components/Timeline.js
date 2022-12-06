import { useState } from "react"
import { StyledTimeline } from "../styled/Timeline"
import Video from "./video"

export default function Timeline({searchValue , ...props}) {
    const [videoVisible, setVideoVisible] = useState(false)
    const [video, setVideo] = useState({})
    const playlistNames = Object.keys(props.playlists)

    function verVideo(dadosVideo) {
        setVideo(dadosVideo)
        setVideoVisible(true)
    }

    return (
        <>
            <StyledTimeline>
                {playlistNames.map(playlistName => {
                    const videos = props.playlists[playlistName]
                    return (
                        <section key={playlistName}>
                            <h2>{playlistName}</h2>
                            <div>
                                {videos.filter((video) => {
                                    const titleNormalized = video.title.toLowerCase()
                                    const searchValueNormalized = searchValue.toLowerCase()        
                                    return titleNormalized.includes(searchValueNormalized)
                                }).map(video => {
                                    return (
                                        <a key={video.id} onClick={() => verVideo(video)}>
                                            <img src={video.thumb} />
                                            <span>
                                                {video.title}
                                            </span>
                                        </a>
                                    )
                                })}
                            </div>
                        </section>
                    )
                })}
            </StyledTimeline>

            {videoVisible &&
                <Video setVideoVisible={setVideoVisible} video={video}/>
            }
        </>
    )
}