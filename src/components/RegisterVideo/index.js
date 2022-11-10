import React from "react";
import { StyledRegisterVideo } from "../../styled/RegisterVideo";


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

export default function RegisterVideo() {
    const formCadastro = useForm({
        initialValue: { titulo: "", url: ""}
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