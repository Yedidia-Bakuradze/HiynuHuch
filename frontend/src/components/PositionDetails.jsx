import { useParams} from "react-router-dom";
import "../Style/PositionDetails.css";

function PositionDetails() {
  const { positionId } = useParams();
  return <>
  This page would be loaded for every position
  </>
}

export default PositionDetails;
