import { Sub } from "../types";
import "../App.css";
interface Props {
  subs: Sub[];
}

const List: React.FC<Props> = ({ subs }: Props) => {
  return (
    <div className="List">
      <h1>Leandro Subs</h1>
      <ul className="list-items">
        {subs.map((sub) => {
          return (
            <li key={sub.nick}>
              <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
              <h4>
                {sub.nick}(<small>{sub.subMonths}</small>)
              </h4>
              <p>{sub.description?.substring(0, 20)}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
