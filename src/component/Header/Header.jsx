import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <div className="body-header">
      <h1>Andy Schneider</h1>
      <nav className="body-header__navigation">
        <Link to="andyschneider/" className="body-header__btn">
          <span>Accueil</span>
        </Link>
        <Link to="andyschneider/Stacks" className="body-header__btn">
          <span>Technologies</span>
        </Link>
        <Link to="andyschneider/Degree" className="body-header__btn">
          <span>Diplomes</span>
        </Link>
        {/* <Link to="cv-andy-schneider/" className="body-header__btn">
          <span>Portfolio</span>
        </Link> */}
        <Link to="andyschneider/Experience" className="body-header__btn">
          <span>Expérience</span>
        </Link>
        <Link to="andyschneider/Hobby" className="body-header__btn">
          <span>Loisirs</span>
        </Link>
        <Link to="andyschneider/Contact" className="body-header__btn">
          <span>Contact</span>
        </Link>
      </nav>
    </div>
  );
}

export default Header;
