import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';
import Avengers from '../Styles/Images/Avengers.png';
import HarryPotter from '../Styles/Images/HarryPotter.png';
import Disney from '../Styles/Images/Disney.png';
import StarWars from '../Styles/Images/StarWars.png';
import LordoftheRings from '../Styles/Images/LordOfTheRings.png';
import Chucky from '../Styles/Images/Chucky.png';
import Navbar from '../Components/Navbar';
// import DataLoader from '../Components/UseFetch';
import Saga from '../Components/Saga';

const Home = () => (
  <div className="columns is-desktop">
    <div className="columns is-multiline">

      <div className="column">
        <header>
          <Navbar> </Navbar>

        </header>
      </div>


      <div className="column">
        <Saga wordKey="star" to="/allmovies/star" image={StarWars} title="Star Wars" />
        <Saga image={Disney} title="Disney" wordKey="disney" to="/allmovies/disney" />
        <Saga image={LordoftheRings} wordkey="lord" title="Lord Of The Rings" to="/allmovies/lord" />
      </div>
      <div className="column">
        <Link key="marvel" to="/allmovies/marvel" />
        <Saga image={Avengers} title="Avengers" wordKey="avengers" to="/allmovies/avengers" />
        <Saga image={Chucky} title="Chucky" wordKey="chucky" to="/allmovies/chucky" />
        <Saga image={HarryPotter} title="Harry Potter" wordKey="harry" to="/allmovies/harry" />
      </div>

    </div>

  </div>
);

export default Home;
