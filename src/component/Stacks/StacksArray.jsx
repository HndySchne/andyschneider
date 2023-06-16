import "./Stacks.scss";
import { useState } from "react";

function Stacks_Array({title, logo, stack}) {
  const [isOpen, setIsOpen] = useState(false);

  // fonction qui permet de changer le statut du top
  const ShowContent = () => {
    setIsOpen(!isOpen);
  };

  // permet d'appeler dynamiquement la classe hidden ou non pour afficher les technos
  const showtext = isOpen ? "NotHidden" : "Hidden";

  return (
    <div>
      <h3>{title}</h3>
      <div className="stack-container__logo" onClick={ShowContent}>
        <span className="logostack">
          <i className={logo}></i>
        </span>
        <span className="hand">
          click !
        <i class="fa-regular fa-hand-pointer"></i>
        </span>
      </div>
      <div className="stack-container__description">
        <ul className={showtext}>
          {stack.map((arrayStack) => (
            <li>{arrayStack}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Stacks_Array;
