import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

export async function getform(query) {
  await fakeNetwork(`getform:${query}`);
  let form_m = await localforage.getItem("form_m");
  if (!form_m) form_m = [];
  if (query) {
    form_m = matchSorter(form_m, query, { keys: ["first", "last"] });
  }
  return form_m.sort(sortBy("last", "createdAt"));
}
export async function createForm() {
  await fakeNetwork();
  let form_m = await getform();
  await set(form_m);
  return form_m;
}
export async function updateForm(notes, updates) {
  await fakeNetwork();
  let form_m = await localforage.getItem("form_m");
  Object.assign(notes, updates);
  await set(form_m);
  return form_m;
}
function set(form_m) {
  return localforage.setItem("form", form_m);
}
let fakeCache = {};

async function fakeNetwork(key) {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key]) {
    return;
  }

  fakeCache[key] = true;
  return new Promise((res) => {
    setTimeout(res, Math.random() * 800);
  });
}
