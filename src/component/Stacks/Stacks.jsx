import "./Stacks.scss";
import StacksArray from "./StacksArray";
import { Stacks_data } from "./Stacks_data";

function Stacks() {

  return (
    <div>
      <h2>
        <i class="fa-solid fa-computer"></i> TECHNOLOGIES
      </h2>
      <div className="stacks-container">
        {Stacks_data.map((stack) => (
          <div className="stack-container" key={stack.title}>
            <StacksArray 
              title={stack.title}
              logo={stack.logo}
              stack={stack.stack}
              />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stacks;
