import "./Home.scss";
import pictureProfile from "../../pictures/pic.jpg";
import resume from "../../documents/CV-andy-schneider.pdf";

function Home() {
  return (
    <div className="home-container">
      <div className="abstract">
        <div className="abstract__text">
          <p>
            Développeur ayant 6 années d'expériences dans le domaine du
            bancaire-assurances, je me suis récemment formé aux technologies
            web. Dynamique, sérieux et curieux, je suis à la recherche d'une
            opportunité professionnelle différente
          </p>
          <a href={resume} download={resume}>
            <div className="abstract__resume">
              <p>
                CV en pdf : <i class="fa-solid fa-download"></i>
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className="picture-container">
        <img src={pictureProfile} alt="Le candidat" />
      </div>
    </div>
  );
}

export default Home;
