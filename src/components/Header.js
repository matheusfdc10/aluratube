import { StyledHeader } from "../styled/Header"

export default function Header(props) {
    return (
        <>
        <StyledHeader>
            <img src={props.banner} />
            <section>
                <img src={`https://github.com/${props.github}.png`} />
                <div>
                    <h2>
                        {props.name} 
                    </h2>
                    <p>
                        {props.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
        </>
    )
}


