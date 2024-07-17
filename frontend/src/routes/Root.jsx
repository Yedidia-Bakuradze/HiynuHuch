import "../Style/Root.css";
import {
  Outlet,
  Link,
  NavLink,
  useNavigation,
} from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { ListOfPositions } from "../Data/ListOfPositions.js";

export default function Root() {
  const navigation = useNavigation();

  return (
    <>
    <div id="navbar_container">
      <div id="sidebar">
        <div>
          <ul>
            <Link to={`/Newposition`} className="remove_text_dec">
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
          {ListOfPositions.length ? (
            <ul>
              {ListOfPositions.map((position) => (
                <li
                  key={
                    position._id && position._id.$oid
                      ? position._id.$oid
                      : position.name
                  }
                >
                  <NavLink
                    id="navLink"
                    to={``}
                    className={({ isActive, isPending }) =>
                      isActive ? "active" : isPending ? "pending" : ""
                    }
                  >
                    {position.title ? <>{position.title}</> : <i>No Name</i>}{" "}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No positions</i>
            </p>
          )}
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
      <div
        id="detail"
        className={navigation.state === "loading" ? "loading" : ""}
      >
        <Outlet />
      </div>
    </>
  );
}
