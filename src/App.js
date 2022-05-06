import React from "react";
import All from "./Components/All";
import Favorites from "./Components/Favorites";
import Watched from "./Components/Watched";
import Added from "./Components/Added";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Profile from "./assets/profile.svg";
import Arrow from "./assets/arrow.svg";
import SMain from "./assets/smain.jpg";
import ReactStars from "react-rating-stars-component";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Modal from "react-modal";
import "./styles.css";
import Heart from "./assets/heart.svg";
import Mainplace from "./assets/mainplace.png";
import Carrossel from "./Components/Carrossel";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  border:none;
}
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 20vh;
  width: 100%;
  background-color: black;
`;

const Div = styled.div`
  width: 30%;
  height: 20vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;
`;

const H1 = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #e71b27;
`;

const SectionTwo = styled.div`
  width: 50%;
  height: 20vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;
`;

const Input = styled.input`
  display: flex;
  width: 35vw;
  height: 5vh;
  background-color: #2c2c2c;
  ::placeholder {
    color: white;
  }
`;

const Ul = styled.ul`
  position: absolute;
  left: 22.5%;
  top: 13.5%;
  &:hover {
    cursor: pointer;
  }
`;

const Button = styled.button`
  width: 6.5vw;
  height: 5vh;
  background-color: #e71b27;
  color: white;
  transition: transform 0.2s;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const P = styled.p`
  color: white;
  transition: 0.8s ease-in-out;
  &:hover {
    cursor: pointer;
    color: #e71b27;
  }
`;

const TextSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 74%;
  height: 60vh;
  display: flex;
  flex-direction: row;
  margin-left: -20vw;
  margin-top: -25vh;
`;

const H2 = styled.p`
  display: flex;
  color: #fff;
  font-size: 30px;
  width: 28vw;
  height: 10vh;

  align-items: center;
`;

const Img = styled.img`
  width: 38vw;
  height: 46vh;
  border-radius: 10px;
`;

const TextOne = styled.p`
  color: #fff;
  width: 30vw;
`;

const LinkS = styled(Link)`
  text-decoration: none;
  font-weight: bolder;
  color: white;
  transition: 0.8s ease-in-out;
  &:hover {
    cursor: pointer;
    color: #e71b27;
  }
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  background-color: black;
`;

const TextMain = styled.div`
  color: white;
  display: flex;

  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  width: 52%;
  height: 50vh;
  margin-left: 60px;
`;

const Himg = styled.img`
  width: 2vw;
  border: solid yellow;
`;

const Modalh = styled.h2`
  font-size: 30px;
  color: white;
`;

const Placeimg = styled.img`
  width: 16vw;
  height: 16vh;
`;
const CaseIn = styled.input`
 display:flex;
 background-color:#2C2C2C;
 align-items:center;
 justify-content
`;

const CaseOn = styled.input`
  background-color: #2c2c2c;
  display: flex;
  width: 36vw;
  height: 15vh;
`;

const SectionCase = styled.div`
  display: flex;
  flex-direction: wrap;
`;

export default class App extends React.Component {
  state = {
    stateList: false,
    stateModal: false,
    stateHeart: true
  };

  handleList = () => {
    this.setState({ stateList: !this.state.stateList });
  };

  handleModal = () => {
    this.setState({
      stateModal: !this.state.stateModal
    });
  };

  handleHeart = () => {
    this.setState({
      stateHeart: !this.state.stateHeart
    });
  };

  render() {
    return (
      <Router>
        <Container>
          <GlobalStyle />
          <Div>
            <H1>LETTERFLIX</H1>
            <LinkS to="/">
              <p>Home</p>
            </LinkS>
            <P onClick={this.handleList}>Selection</P>
            {this.state.stateList && (
              <Ul>
                <LinkS to="All">
                  <p onClick={this.handleList}>All</p>
                </LinkS>
                <LinkS to="Favorites">
                  <p onClick={this.handleList}>Favorites</p>
                </LinkS>
                <LinkS to="Watched">
                  <p onClick={this.handleList}>Watched</p>
                </LinkS>
                <LinkS to="Added">
                  <p onClick={this.handleList}>Added</p>
                </LinkS>
              </Ul>
            )}
          </Div>
          <SectionTwo>
            <Button onClick={this.handleModal}>Add Movie</Button>
            <div>
              <Modal
                className="ModalB"
                isOpen={this.state.stateModal}
                transparent={true}
                style={{
                  overlay: {
                    width: 850,
                    height: 550,
                    position: "fixed",
                    top: 40,
                    left: 250,
                    right: 0,
                    bottom: 0,
                    opacity: 80
                  },
                  content: {
                    position: "absolute",
                    top: "1px",
                    left: "1px",
                    right: "1px",
                    bottom: "1px",
                    background: "#fff",
                    overflow: "auto",
                    WebkitOverflowScrolling: "touch",
                    borderRadius: "4px",
                    outline: "none",
                    padding: "20px",
                    backgroundColor: "black"
                  }
                }}
              >
                <button onClick={this.handleModal}>X</button>
                <Modalh>Add new movie</Modalh>

                <SectionCase>
                  <form>
                    <label>Title</label>
                    <CaseIn type="text" placeholder="   new..." />
                    <label>About</label>
                    <CaseOn type="text" placeholder="   Sinopse..." />
                  </form>
                </SectionCase>
                <div>
                  <h4>Movie Poster</h4>
                </div>
                <div>
                  <Placeimg src={Mainplace} />
                  <ReactStars count={5} size={24} activeColor="#ffd700" />
                </div>
                <div>
                  <button>Select Image</button>
                </div>
                <div>
                  <label>Watched</label>
                  <input type="radio" name="Watched" value="Watched" />
                  <label>It's on my list</label>
                  <input
                    type="radio"
                    name="It's on my list"
                    value="It's on my list"
                  />
                </div>
              </Modal>
            </div>

            <Input type="text" placeholder="   📺  Search..." />
            <img src={Profile} />
            <img src={Arrow} />
          </SectionTwo>
        </Container>
        <Main>
          <TextSection>
            <Img src={SMain} />
            <TextMain>
              <Himg
                onClick={this.handleHeart}
                style={
                  this.state.handleHeart === false
                    ? { filter: "brightness(0.7)" }
                    : {
                        filter:
                          "drop-shadow(1px 1px 10px rgba(255,255,255,0.5))"
                      }
                }
                src={Heart}
              />
              <h4>Recently Watched</h4>
              <H2>Midsummer Night's Dream</H2>
              <TextOne>
                A Midsummer Night's Dream is a 1999 romantic comedy fantasy film
                based on the play of the same name by William Shakespeare. It
                was written, directed and co-produced by Michael Hoffman. The
                ensemble cast features Kevin Kline as Bottom, Michelle Pfeiffer
                and Rupert Everett as Titania and Oberon, Stanley Tucci as Puck,
                and Calista Flockhart, Anna Friel, Christian Bale, and Dominic
                West as the four lovers.
              </TextOne>
            </TextMain>
          </TextSection>
          <Carrossel />
        </Main>

        <Routes>
          <Route path="/All" element={<All />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/Watched" element={<Watched />} />
          <Route path="/Added" element={<Added />} />
        </Routes>
      </Router>
    );
  }
}
