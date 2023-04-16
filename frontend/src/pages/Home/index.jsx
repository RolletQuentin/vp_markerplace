import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../../utils/context";
import HeroBanner from "../../asset/Carousel/hero_banner.JPG";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel1 from "../../asset/Carousel/carousel1.JPG";
import Carousel2 from "../../asset/Carousel/carousel2.jpg";
import Carousel3 from "../../asset/Carousel/carousel3.jpg";

const HomeContainer = styled.div`
    background-color: ${(props) => props.thememode.backgroundLight};
    border-radius: 10px;
    margin: 50px;
    padding: 50px;
`;

const CarouselContainer = styled.div`
    width: 80%;
    margin: auto;
`;

const CarouselSlide = styled.img`
    height: 800px;
    object-fit: cover;
`;

function Home() {
    const { themeMode } = useContext(ThemeContext);

    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <HomeContainer thememode={themeMode}>
            <h1>Bienvenue sur la marketplace des VP !</h1>
            <CarouselContainer>
                <Slider {...settings}>
                    <CarouselSlide src={Carousel1} />
                    <CarouselSlide src={Carousel2} />
                    <CarouselSlide src={Carousel3} />
                    <CarouselSlide src={HeroBanner} />
                </Slider>
            </CarouselContainer>
            <h2>Qui sommes-nous ?</h2>
            <p>
                Nous avons mis tout notre talent et notre créativité pour
                concevoir des vêtements, des accessoires et des peluches uniques
                et originaux, représentant notre groupe d'amis et notre univers
                geek.
            </p>
            <p>
                Nous avons travaillé dur pour créer des designs authentiques et
                exclusifs, reflétant notre personnalité et notre esprit
                d'équipe. Nous sommes fiers de pouvoir proposer des produits de
                qualité, à l'image de notre groupe, à tous nos clients
                potentiels.
            </p>
            <p>
                Nous avons choisi de vendre nos propres produits sur notre
                marketplace car nous voulons transmettre notre passion, notre
                énergie et notre créativité à travers nos articles. Nous sommes
                convaincus que nos produits, à la fois originaux et abordables,
                sauront séduire les fans de mode et de culture geek.
            </p>
            <p>
                En choisissant de créer une marketplace pour vendre nos propres
                produits, nous avons également la possibilité de contrôler la
                qualité de nos articles, d'assurer une livraison rapide et
                fiable, et de fournir un service clientèle exceptionnel.
            </p>
            <p>
                Nous sommes fiers de pouvoir offrir à nos clients des produits
                exclusifs, conçus avec passion et amour par notre groupe d'amis
                soudé. Nous espérons que notre marketplace sera une belle
                réussite, portée par nos valeurs, notre créativité et notre
                esprit d'équipe.
            </p>
        </HomeContainer>
    );
}

export default Home;
