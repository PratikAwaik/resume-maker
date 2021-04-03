export function setDataOnInitialMount(key, setData) {
  if (localStorage.getItem(key)) {
    setData(JSON.parse(localStorage.getItem(key)));
  }
}

export function setDataOnChange(id, e, state, setState, key) {
  const { name, value } = e.target;
  const newState = [...state];
  newState[id][name] = value;
  localStorage.setItem(key, JSON.stringify(newState));
  setState(newState);
}

export function addData(item, state, setState, key) {
  const newState = [...state];
  newState.push(item);
  setState(newState);
  localStorage.setItem(key, JSON.stringify(newState));
}

export function deleteData(id, state, setState, key) {
  const newState = [...state];
  newState.splice(id, 1);
  setState(newState);
  localStorage.setItem(key, JSON.stringify(newState));
}
