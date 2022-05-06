import React from "react";
import Marilyn from "../assets/Marilyn.jpg";
import Gilda from "../assets/Gilda.jpg";
import DevilsEye from "../assets/DevilsEye.jpeg";
import TwoTowers from "../assets/TwoTowers.jpg";
import Angrymen from "../assets/Angrymen.jpeg";
import StarWars from "../assets/StarWars.jpeg";
import Carousel from "nuka-carousel";
import styled from "styled-components";

const Postimg = styled.img`
  display: flex;
  width: 23vw;
  height: 33vh;
  border-radius: 15px;
`;

const SectionC = styled.div`
  height: 20vh;
  width: 100%;
  background-color: black;
`;

const SectionD = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export default class APP extends React.Component {
  state = {
    movies: [
      {
        id: 1,
        title: "How to Marry a Milionaire",
        about:
          "Three fashionable Manhattan models, struggle to find love, so they decided to play to become independent of love",
        poster: Marilyn
      },
      {
        id: 2,
        title: "Gilda",
        about:
          "A gambler hired to work at a Buenos Aires casino discovers that his boss's new wife is his old love.",
        poster: Gilda
      },
      {
        id: 3,
        title: "The Devil's Eye",
        about:
          "The devil has a stye in his eye, caused by the purity of a vicar’s daughter. ",
        poster: DevilsEye
      },
      {
        id: 4,
        title: "Lord Of The Rings: The Two Towers",
        about:
          "Frodo and Sam are trekking to Mordor to destroy the One Ring of Power while Gimli, Legolas and Aragorn search for the orc-captured Merry and Pippin.",
        poster: TwoTowers
      },
      {
        id: 5,
        title: "12 Angry Men",
        about:
          "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent.",
        poster: Angrymen
      },
      {
        id: 6,
        title: "Star Wars: The Empire Strikes Back",
        about:
          "Three years after the destruction of the Death Star, the Imperial fleet, led by Darth Vader, dispatches Probe Droids across the galaxy to locate...",
        poster: StarWars
      }
    ]
  };
  render() {
    return (
      <SectionC>
        <h2>Selected</h2>
        <Carousel
          enableKeyboardControls="true"
          wrapAround={true}
          slidesToShow="4"
        >
          {this.state.movies.map((item) => (
            <SectionD>
              <Postimg src={item.poster} />
              {/* <BoxUnd>
                <TitleHover>{item.title}</TitleHover>
              </BoxUnd>
              <BoxInd>
                <Paragraf>{item.about}</Paragraf>
              </BoxInd> */}
            </SectionD>
          ))}
        </Carousel>
      </SectionC>
    );
  }
}
