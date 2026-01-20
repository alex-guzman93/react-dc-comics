import './MainDc.css';
import './CardsFumetti';
import cards from '../data/comics';
import CardsFumetti from './CardsFumetti';
function MainDc() {
    return (
        <main>
            {/* <h1>{'--> Content goes here <--'}</h1> */}

            <ul className="container-cards">
                {
                    cards.map(card => {
                        return (
                            <CardsFumetti
                                key={card.id}
                                fumettiImg={card.thumb}
                                fumettiAlt={card.description}
                                fumettiTitle={card.title}
                            />

                        )
                    })
                }

            </ul>

        </main>
    )
}

export default MainDc









//         <li key={card.id} >
//             <img src={card.thumb} alt={card.description} />
//             <h3>{card.title}</h3>
//         </li>




