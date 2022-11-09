import { StyledChannels } from '../styled/Channels'

export default function Channels(props) {
    const channels = props.channels

    return (
        <StyledChannels>
            <section> 
                <h2>Canais Favoritos</h2>
                <div>
                    {channels.map(favorito => {
                        return (
                            <a key={favorito.name} href={favorito.youtube}>
                                <img src={favorito.logo} />
                                <span>
                                    {favorito.name}
                                </span>
                            </a>
                        )
                    })}
                </div>
            </section>
        </StyledChannels>
    )
}