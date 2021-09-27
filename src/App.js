import "./App.css";
import { Card } from "./components";
import { useEffect, useState } from "react";
import requestUser from "./Api/request";
function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);
  const onChange = () => {
    Users();
  };
  const Users = async () => {
    const data = await requestUser();
    setUser(data);
  };
  useEffect(() => {
    if (user.length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [user]);
  return (
    <div className="h-screen">
      <nav className="mb-4 w-full flex justify-between items-center bg-gray-800 py-4 px-6 shadow-lg">
        <p className="text-fontColor text-4xl ">Sibteali Baqar</p>

        <button
          className="px-6 py-2 rounded bg-buttonColor text-fontColor text-lg font-medium hover:bg-buttonColorDark tracking-wider "
          onClick={() => onChange()}
        >
          Start Searching
        </button>
      </nav>
      {loading ? (
        <div className="text-5xl flex justify-center items-center text-fontColor h-full">
          <p className="animate-bounce">
            Press Button to Start Fetching Images
          </p>
        </div>
      ) : (
        <div className="container p-4 mx-auto ">
          <Card user={user} />
        </div>
      )}
    </div>
  );
}

export default App;
