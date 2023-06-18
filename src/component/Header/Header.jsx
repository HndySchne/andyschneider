import { Link } from "react-router-dom";
import "./Header.scss";
import "./Header_mobile.scss";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // fonction qui permet de changer le statut du top
  const ShowContent = () => {
    setIsOpen(!isOpen);
  };

  // permet d'appeler dynamiquement la classe hidden ou non pour afficher les technos
  const showtext = isOpen ? "navigation-link--visible" : "navigation-link";

  return (
    <div className="body-header">
      <h1>Andy Schneider</h1>
      <nav className="body-header__navigation">
        <div className={showtext}>
          <Link to="andyschneider/" className="body-header__btn" onClick={showtext}>
            <span>Accueil</span>
          </Link>
          <Link to="andyschneider/Stacks" className="body-header__btn" onClick={showtext}>
            <span>Technologies</span>
          </Link>
          <Link to="andyschneider/Degree" className="body-header__btn" onClick={showtext}>
            <span>Diplomes</span>
          </Link>
          {/* <Link to="cv-andy-schneider/" className="body-header__btn">
          <span>Portfolio</span>
        </Link> */}
          <Link to="andyschneider/Experience" className="body-header__btn" onClick={showtext}>
            <span>Expérience</span>
          </Link>
          <Link to="andyschneider/Hobby" className="body-header__btn" onClick={showtext}>
            <span>Loisirs</span>
          </Link>
          <Link to="andyschneider/Contact" className="body-header__btn" onClick={showtext}>
            <span>Contact</span>
          </Link>
        </div>
        <button className="body-header__list" onClick={ShowContent}>
          <i class="fa-solid fa-bars"></i>
        </button>
      </nav>
    </div>
  );
}

export default Header;
