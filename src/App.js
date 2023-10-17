import { useDispatch, useSelector } from "react-redux";
import { incrementAction, decrementAction } from "./store/countReducer";
import "./App.css";
import { fetchUsers } from "./store/asyncActions.js/users";
import { fetchCat, fetchDog } from "./store/imageReducer";
function App() {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.countReducer.count);
  const users = useSelector((state) => state.usersReducer.users);

  const imageCat = useSelector((state) => state.imageReducer.catImage);
  const imageDog = useSelector((state) => state.imageReducer.dogImage);
  const handleButtonIncrementClick = () => {
    dispatch(incrementAction(1));
  };
  const handleButtonDecrementClick = () => {
    dispatch(decrementAction(1));
  };

  const handleButtonGetUsersClick = () => {
    dispatch(fetchUsers());
  };

  const handleButtonGetCatClick = () => {
    dispatch(fetchCat());
  };
  const handleButtonGetDogClick = () => {
    dispatch(fetchDog());
    console.log(imageDog);
  };

  return (
    <div className="App">
      <label>
        <h1>Task 1</h1>
        <p>{count}</p>
        <button onClick={handleButtonIncrementClick}>INCREMENT</button>
        <button onClick={handleButtonDecrementClick}>DECREMENT</button>
      </label>
      <label>
        <h1>Task 2</h1>
        {users.length ? (
          <div className="users">
            {users.map((user) => (
              <div key={user.id}>{user.name}</div>
            ))}
          </div>
        ) : (
          <p>Пользователей нет</p>
        )}
        <button onClick={handleButtonGetUsersClick}>GET USERS</button>
      </label>
      <label>
        <h1>Task 3</h1>
        <p>Cat:</p>
        {<img src={imageCat?.url} alt="cat"></img>}
        <p>Dog:</p>
        {<img src={`https://random.dog/${imageDog}`} alt="dog"></img>}
        <button onClick={handleButtonGetCatClick}>get cat!</button>
        <button onClick={handleButtonGetDogClick}>get dog!</button>
      </label>
    </div>
  );
}

export default App;
