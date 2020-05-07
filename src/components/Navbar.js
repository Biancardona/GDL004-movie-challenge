import React from 'react';
import { useHistory } from 'react-router-dom';
import LabMovies from '../Styles/Images/LabMovies.png';
import Home from '../Styles/Images/Home.png';
import SearchForm from './SearchForm';

const Navbar = () => {
  const history = useHistory();
  const homeRoute = () => { history.push('/'); };

  return (
    <div className="container center">
      <nav>
        <img onClick={homeRoute} clasName="homeLogo" className="navBar" src={Home} alt="" />
        <img className="navBar" src={LabMovies} alt="" />
        <div className="navBar" />
        <SearchForm />
      </nav>
    </div>
  );
};
export default Navbar;
