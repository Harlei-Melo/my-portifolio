import React, { useState } from "react";
import { connect } from "react-redux";
import { useDispatch } from 'react-redux';
import { changeTabActive } from '../redux/actions';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ activeTab }) => {
  const dispatch = useDispatch();
  
  const [linkNav] = useState([
    { id: 'home', label: 'Início' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'projects', label: 'Projetos' },
    { id: 'contacts', label: 'Contatos' }
  ]);

  const [statusNav, changeStatusNav] = useState(null);
  
  const toggleNav = () => {
    changeStatusNav(statusNav === null ? 'active' : null);
  }
  
  const changeTab = (id) => {
    dispatch(changeTabActive(id));
    toggleNav();
  }
  
  return (
    <header>
      <div className="logo">
        <img src="/favicon.svg" alt=""/> Portfolio
      </div>
      <nav className={statusNav}>
        {linkNav.map(({ id, label }) => (
          <span 
            key={id}
            className={activeTab === id ? 'active' : ''}
            onClick={() => changeTab(id)}
          >
            {label}
          </span>
        ))}
      </nav>
      <div className="icon-bar" onClick={toggleNav}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </header>
  );
}

const mapStateToProps = (state) => ({
  activeTab: state.activeTab
});
  
export default connect(mapStateToProps, { changeTabActive })(NavBar);
