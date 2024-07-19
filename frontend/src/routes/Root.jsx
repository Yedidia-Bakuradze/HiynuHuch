import "../Style/Root.css";
import {
  Outlet,
  Link,
  useParams,
} from "react-router-dom";
import { Form } from "react-bootstrap";
import NavPosition from "../Components/NavPosition.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Root() {
  let DisplayPositions;
  const { id } = useParams();
  const [listOfPositions, setListOfPositions] = useState([]);
  const [filteredPositions, setFilteredPositions] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/app/creator/${id}`);
        setListOfPositions(data);
        setFilteredPositions(data); // Initialize filtered positions with all positions
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, [id]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const searchValue = e.target.value.toLowerCase();
    const filtered = listOfPositions.filter(position =>
      position.title.toLowerCase().includes(searchValue)
    );
    setFilteredPositions(filtered);
  };

  if (filteredPositions.length) {
    DisplayPositions = (
      <ul>
        {filteredPositions.map((p) => (
          <NavPosition key={p._id} positionId={p._id} positionName={p.title} />
        ))}
      </ul>
    );
  } else {
    DisplayPositions = (
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
                <li className="nav_container">
                  New
                </li>
              </Link>

              <Form onSubmit={(e) => e.preventDefault()} id="search-form" role="search">
                <input
                  className="app_container"
                  aria-label="Search positions"
                  placeholder="Search"
                  type="search"
                  value={search}
                  onChange={handleSearch}
                />
              </Form>
            </ul>
          </div>

          <nav>
            {DisplayPositions}
          </nav>

          <div>
            <ul>
              <Link to={`settings`} className="remove_text_dec">
                <li className="nav_container">
                  Settings
                </li>
              </Link>
              <Link to={`login`} className="remove_text_dec">
                <li className="nav_container">
                  Profile
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
