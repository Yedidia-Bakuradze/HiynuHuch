import "../Style/Root.css";
import {
  Outlet,
  Link,
  NavLink,
  useNavigation,
  useParams,
} from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { ListOfPositions } from "../Data/ListOfPositions.js";
import NavPosition from "../Components/NavPosition.jsx";
export default function Root() {
  const navigation = useNavigation();
  let DisplayPositions;
  const {id} = useParams();
  const listOfCreatedPositions = ListOfPositions.filter((p) => p.recruiterId ===id );
  

  if(ListOfPositions.length){
    DisplayPositions = (
      <ul>
        {
         listOfCreatedPositions.map((p) => <NavPosition positionId={p.id} positionName={p.title}/>)
        }

      </ul>
    );
  }else{
    DisplayPositions = 
    (
      <p>
        <i>No positions</i>
      </p>
    );
  }

  return (
    <>
    <div id="navbar_container">
      <div id="sidebar">
        <div>
          <ul>
            <Link to={`new-position`} className="remove_text_dec">
              <li className="nav_container" >
                New
              </li>
            </Link>

            <Form id="search-form " role="search">
              <input
                className="app_container"
                aria-label="Search positions"
                placeholder="Search"
                type="search"
              />
              <div id="search-spinner" aria-hidden hidden={true} />
              <div className="sr-only" aria-live="polite"></div>
            </Form>
          </ul>
        </div>
        
        
        <nav>
          {DisplayPositions}
        </nav>



        <div>
          <ul>
            <Link to={`/settings`} className="remove_text_dec">
              <li className="nav_container">
                Settings
              </li>
            </Link>
            <Link to={`/login`} className="remove_text_dec">
              <li className="nav_container" >
                Profile
              </li>
            </Link>
          </ul>
        </div>
      </div>
      </div>
      <div id="detail" className={navigation.state === "loading" ? "loading" : ""}>
        <Outlet />
      </div>
    </>
  );
}
