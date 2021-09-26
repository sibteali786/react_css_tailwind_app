import "./App.css";
import { PrimaryButton, Card } from "./components";
import { useEffect, useState } from "react";
import requestUser from "./Api/request";
function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const Users = async () => {
      const data = await requestUser();
      setUser(data);
    };
    Users();
  }, []);
  return (
    <div className="bg-gray-600">
      <nav className="mb-8 w-full flex justify-between items-center bg-gray-800 py-4 px-6">
        <p className="text-white text-lg ">Sibteali Baqar</p>

        <PrimaryButton>Hello</PrimaryButton>
      </nav>
      <div className="container p-4 mx-auto">
        <Card user={user} />
      </div>
    </div>
  );
}

export default App;
