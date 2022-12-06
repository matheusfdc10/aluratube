import React from "react";
import { StyledVideo } from "../../styled/Video";

export default function Video({ video, setVideoVisible }) {



    return (
        <StyledVideo>
            <div className="container">
                <div>
                    <button type="button" className="close-modal" onClick={() => setVideoVisible(false)}>
                        X
                    </button>
                        <h2>{video.title}</h2>
                    <div className="video">
                        <iframe width="642" height="361" src={`https://www.youtube.com/embed/${video.url.split('v=')[1]}`}
                            title={video.title} frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        />
                    </div>
                </div>
            </div>
        </StyledVideo>
    )
}