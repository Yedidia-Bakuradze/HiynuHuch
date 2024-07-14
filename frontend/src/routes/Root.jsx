import "./Root.css";
import { useEffect, useState } from "react";
import {
  Outlet,
  Link,
  NavLink,
  useLoaderData,
  redirect,
  useParams,
  useNavigation,
  useNavigate,
} from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { positions } from "../data/positions.js";
import { getCachedPosition } from "../components/cache";
export async function action(redirect) {
  return redirect(`/newposition`);
}
export default function Root() {
  const [position, setPositions] = useState([]);
  const { id } = useParams();
  const navigation = useNavigation();
  const navigate = useNavigate();

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
            <Link to={`login`} className="remove_text_dec">
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
