import { useLayoutEffect, useRef, useState } from "react"
import { StyledTimeline } from "../styled/Timeline"
import Video from "./video"

export default function Timeline({searchValue , ...props}) {
    const [videoVisible, setVideoVisible] = useState(false)
    const [video, setVideo] = useState({})
    const Container = useRef();
    const playlistNames = Object.keys(props.playlists)

    useLayoutEffect(() => {
        const container = Container.current?.children

        // Da um display none se a playlist não possui vídeo
        for (let i = 0; i < container.length; i++){
            const section = container[i]
            const divList = container[i].children[1]
            const qtdVideos = divList.childElementCount
            if (qtdVideos == 0){
                section.style.display = 'none'
            } else {
                section.style.display = 'block'
            }
        }

    })

    function verVideo(dadosVideo) {
        setVideo(dadosVideo)
        setVideoVisible(true)
    }

    return (
        <>
            <StyledTimeline ref={Container}>
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