import React from "react"
import { StyledSeach } from "../../../styled/Search";

export default function Search(props) { // { valorDoFiltro, setValorDoFiltro }
    // const [valorDaBusca, setValorDaBusca] = React.useState("");
    // console.log("Search", valorDaBusca)
    const valorDaBusca = props.valorDoFiltro;
    const setValorDaBusca = props.setValorDoFiltro;

    return (
        <StyledSeach>
            <input type="text" placeholder="Buscar"
                onChange={(e) => setValorDaBusca(e.target.value)}
                value={valorDaBusca} />
            <button>
                <i className={`lni lni-search-alt`} ></i>
            </button>
        </StyledSeach>
    )
}