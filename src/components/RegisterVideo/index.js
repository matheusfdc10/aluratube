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

// BANCO DE DADOS
const URL = "https://zcednlxbrbcxkxqhrjlw.supabase.co"
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjZWRubHhicmJjeGt4cWhyamx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNzIwMzAsImV4cCI6MTk4Mzc0ODAzMH0.N8lbbZyT5t0YPqGIqJTrGn1hcO9qy37CoZVLNsQjI4w"
const supabase = createClient(URL, PUBLIC_KEY)

function getThumbnail(url) {
    return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`
}


export default function RegisterVideo() {
    const service = videoService()
    const formCadastro = useForm({
        initialValue: { titulo: "", url: "https://www.youtube.com/watch?v=QsqatJxAUtk"}
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

                        service.setVideo({
                            title: formCadastro.values.titulo,
                            url: formCadastro.values.url,
                            thumb: getThumbnail(formCadastro.values.url),
                            playlist: "Jogos",
                        })
                        .then(oqveio => { 
                            console.log(oqveio)
                        })
                        .catch(err => {
                            console.log(err)
                        })

                        setFormVisivel(false)
                        formCadastro.clearForm()
                    }}>
                        <div>
                            <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
                                X
                            </button>
                            <input 
                                placeholder="Titulo do Vídeo" 
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
                        </div>
                    </form>
                ) 
                : false}
        </StyledRegisterVideo>
    )
}