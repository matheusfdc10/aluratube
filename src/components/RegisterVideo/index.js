import React from "react";
import { StyledRegisterVideo } from "../../styled/RegisterVideo";
import { createClient } from '@supabase/supabase-js'
import { videoService } from "../../services/videoService";


function useForm(props) {
    const [values, setValues] = React.useState(props.initialValue)
    return {
        values,
        handleChange: e => {
            const value = e.target.value
            const name = e.target.name
            setValues({
                ...values,
                [name]: value,
            })
        },
        clearForm() {
            setValues({})
        }
    }
}

function getThumbnail(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    var isVideo = regExp.test(url)
    if (isVideo && match && match[7].length == 11) {
        return `https://img.youtube.com/vi/${match[7]}/hqdefault.jpg`;
    } else {
        return false
    }
}

function isUrlVideo(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    var isVideo = regExp.test(url)
    if (isVideo && match && match[7].length == 11) {
        return `https://www.youtube.com/watch?v=${match[7]}`;
    } else {
        alert('Url inválida.');
        return false
    }
}


export default function RegisterVideo() {
    const service = videoService()
    const formCadastro = useForm({
        initialValue: { titulo: "", url: "" }
    })

    const [formVisivel, setFormVisivel] = React.useState(false)

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
            {formVisivel
                ? (
                    <form onSubmit={e => {
                        e.preventDefault()

                        const isVideo = formCadastro.values.titulo != "" &&
                            isUrlVideo(formCadastro.values.url)

                        if (isVideo) {
                            service.setVideo({
                                title: formCadastro.values.titulo,
                                url: isUrlVideo(formCadastro.values.url),
                                thumb: getThumbnail(formCadastro.values.url),
                                playlist: "Vídeos",
                            })
                                .then(oqveio => {
                                    console.log(oqveio)
                                })
                                .catch(err => {
                                    console.log(err)
                                })
                            setFormVisivel(false)
                            formCadastro.clearForm()

                        } else {
                            console.log("Titulo ou Link invalido")
                        }

                    }}>
                        <div>
                            <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
                                X
                            </button>
                            <input
                                placeholder="Título do Vídeo"
                                name="titulo"
                                value={formCadastro.values.titulo}
                                onChange={formCadastro.handleChange}
                            />
                            <input
                                placeholder="URL"
                                name="url"
                                value={formCadastro.values.url}
                                onChange={formCadastro.handleChange}
                            />
                            <button type="submit">
                                Cadastrar
                            </button>
                            {/* {isVideo(formCadastro.values.url)*/ getThumbnail(formCadastro.values.url) ?
                                <>
                                    <div className="video">
                                        <img src={getThumbnail(formCadastro.values.url)} />
                                        {/* <iframe width="410"
                                        height="220"
                                        src={isVideo(formCadastro.values.url)}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen>
                                    </iframe> */}
                                    </div>
                                    <span>{formCadastro.values.titulo}</span> </> : false}
                        </div>
                    </form>
                )
                : false}
        </StyledRegisterVideo>
    )
}