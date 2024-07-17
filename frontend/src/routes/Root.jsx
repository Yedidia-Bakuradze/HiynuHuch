import "../css/Root.css";
import {
  Outlet,
  Link,
  NavLink,
  useNavigation,
} from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { positions } from "../data/positions.js";

export default function Root() {
  const navigation = useNavigation();

  return (
    <>
      <div id="sidebar">
        <div>
          <ul>
            <Link to={`/positions`} className="remove_text_dec">
              <li className="nav_container" id="settings">
                positions
              </li>
            </Link>
            <Link to={`/Newposition`} className="remove_text_dec">
              <li className="nav_container" id="new_button">
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
          {positions.length ? (
            <ul>
              {positions.map((position) => (
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
              <li className="nav_container" id="settings">
                Settings
              </li>
            </Link>
            <Link to={`/login`} className="remove_text_dec">
              <li className="nav_container" id="profile">
                Profile
              </li>
            </Link>
          </ul>
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
