import "../Style/Root.css";
import {
  Outlet,
  Link,
  NavLink,
  useNavigate,
  useParams,
} from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { ListOfPositions } from "../Data/ListOfPositions.js";
import NavPosition from "../Components/NavPosition.jsx";
import { useState, useEffect } from "react";
import axios from "axios";



export default function Root() {
  let DisplayPositions;
  const {id} = useParams();
  const [listOfPositions,setListOfPositions ] = useState([]);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/app/creator/${id}`);
        setListOfPositions(data);
        console.log(listOfPositions)
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [id]);
  
  
  
  if(listOfPositions.length){
    DisplayPositions = (
      <ul>
        {
         listOfPositions.map((p) => <NavPosition positionId={p._id} positionName={p.title}/>)
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
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
