import { positions } from "../data/positions.js";

const cache = {};

export function getCachedPosition(id) {
  if (cache[id]) {
    return cache[id];
  } else {
    const position = positions.find((position) => id === position._id.$oid);
    cache[id] = position;
    return position;
  }
}

export function getCachedPositions() {
  return positions;
}
