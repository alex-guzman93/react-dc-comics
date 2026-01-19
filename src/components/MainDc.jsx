import './MainDc.css';
import cards from '../data/comics';
function MainDc() {
    return (
        <main>
            {/* <h1>{'--> Content goes here <--'}</h1> */}

            <ul>
                {
                    cards.map(card => {
                        return (
                            <li key={card.id} >
                                <img src={card.thumb} alt={card.description} />
                                <h3>{card.title}</h3>
                            </li>
                        )
                    })
                }

            </ul>

        </main>
    )
}

export default MainDc