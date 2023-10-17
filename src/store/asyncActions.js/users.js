import { addManyUsersAction } from "../usersReducer";

export const fetchUsers = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => dispatch(addManyUsersAction(json)));
  };
};
