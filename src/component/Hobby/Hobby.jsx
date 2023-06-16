import mbm from "../../pictures/matched-by-mistake.webp";
import pn from "../../pictures/Pole-Nord.webp";
import yt from "../../pictures/youtube.webp";
import "./Hobby.scss";

function Hobby() {
  return (
    <div>
      <h2>
        <i class="fa-solid fa-table-tennis-paddle-ball"></i> LOISIRS
      </h2>
      <section className="Hobby-body">
        <h3>Groupes de musique</h3>
        <div className="music-pictures">
          <a href="https://www.youtube.com/watch?v=WAyWwqZtx9A">
            <img src={pn} alt="pole nord" />
          </a>
          <a href="https://open.spotify.com/artist/1LCmfsSmkquRTUWO9rqBAJ?si=Gfbdjy7hQ_OEWIjKvplhfw">
            <img src={mbm} alt="matched by mistake" />
          </a>
          <a href="https://www.youtube.com/watch?v=QHen8QFAuCA">
            <img src={yt} alt="Andy covers" />
          </a>
        </div>
        <h3>Sport</h3>
        <div>
          <ul>
            <li>Semi-marathon de Reims - 2022 : 2h04</li>
            <li>Semi-marathon de Strasbourg - 2023 : 2h10</li>
            <li>Semi-marathon de Colmar - 2023 : à venir</li>
          </ul>
        </div>
        <h3>Lutherie amateur</h3>
        <p>Réparations de plusieurs guitares et basses électriques (formation avec un luthier professionnel)</p>
      </section>
    </div>
  );
}

export default Hobby;
