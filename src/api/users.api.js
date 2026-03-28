const fetchUserList = () => {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((result) => result);
};

const fetchUserDetailsById = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response.json())
    .then((result) => result);
};

module.exports = {
  fetchUserList,
  fetchUserDetailsById,
};
