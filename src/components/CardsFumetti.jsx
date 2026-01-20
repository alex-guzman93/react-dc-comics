
function CardsFumetti({ fumettiImg, fumettiAlt, fumettiTitle }) {
    return (

        <li >

            <img src={fumettiImg} alt={fumettiAlt} />
            <h3>{fumettiTitle}</h3>
        </li>

        // two method
        // function cardsfumetti(props) { 
        //     conts {fumettiImg,fumettiAlt,fumettiTitle} = props
        //     return (
        //         li >

        //             <img src={ fumettiImg} alt={ fumettiAlt} />
        //             <h3>{ fumettiTitle}</h3>
        //         </li>
        //     )
        // }

    )
}

export default CardsFumetti