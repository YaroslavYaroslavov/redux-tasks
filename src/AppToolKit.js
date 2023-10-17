import { useDispatch, useSelector } from "react-redux";

import { setUsers } from "./reduxToolkit/toolkitSlice";
function AppToolkit() {
  const dispatch = useDispatch();

  const addUsersToolkit = () => {
    return (dispatch) => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((json) => dispatch(setUsers(json)));
    };
  };

  const handleButtonFetchUsersClick = () => {
    dispatch(addUsersToolkit());
  };

  const users = useSelector((state) => state.toolkit.users);
  console.log(users);
  return (
    <div className="App">
      <label>
        <h1>Task 4</h1>
        <div>
          {users.map((user) => (
            <div key={user.id}>{user.name}</div>
          ))}
        </div>
        <button onClick={handleButtonFetchUsersClick}>Fetch users</button>
      </label>
    </div>
  );
}

export default AppToolkit;
