import { ListOfPositions } from "../Data/ListOfPositions";

const cache = {};

export function getCachedPosition(id) {
  if (cache[id]) {
    return cache[id];
  } else {
    const position = ListOfPositions.find((position) => id === position._id.$oid);
    cache[id] = position;
    return position;
  }
}

export function getCachedPositions() {
  return ListOfPositions;
}
