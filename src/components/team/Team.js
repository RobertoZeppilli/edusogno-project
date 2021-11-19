import React from 'react';
import './styles.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { team } from '../../data/team';
import { Link } from 'react-router-dom';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

// function CustomRightArrow({ onClick }) {
//     return (
//         <button
//             onClick={handleClick}
//             aria-label="Go to next slide"
//             className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right"
//         />
//     );
// }

// function CustomLeftArrow({ onClick }) {

//     return (
//         <button
//             onClick={handleClick}
//             aria-label="Go to previous slide"
//             className="react-multiple-carousel__arrow react-multiple-carousel__arrow--left"
//         />
//     );
// }

const Team = () => {
    return (
        <section className="team">
            <div className="container">
                <div className="team-headline">
                    <h2 className="team-headline__text">
                        Conosci i nostri tutor 📚
                    </h2>
                    <p className="team-headline__subtitle">
                        I nostri tutor hanno dimostrato che è possibile essere ammessi nelle migliori università del mondo partendo da un background comune.
                    </p>
                </div>
                <Carousel
                    swipeable={true}
                    draggable={false}
                    responsive={responsive}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                    {
                        team.map(t => {
                            const { id, text, name, picture } = t;
                            return (
                                <div key={id} className="carousel-item">
                                    <div className="carousel-item__inner flex">
                                        <div className="carousel-item__inner__image">
                                            <img src={require(`../../assets/${picture}`).default} alt={name} />
                                        </div>
                                        <h4>{name}</h4>
                                    </div>
                                    <div className="carousel-item__text">
                                        <p>
                                            {text}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Carousel>
                <div className="team-bottom flex-col">
                    <p className="team-bottom__text">
                        Adesso, mettono l'esperienza maturata attraverso le tantissime candidature per top university e posizioni lavorative di prestigio a disposizione di ragazzi come te che sognano una carriera brillante.
                    </p>
                    <Link className="btn cta" to="/servizi">
                        conosci altri nostri tutor
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Team
