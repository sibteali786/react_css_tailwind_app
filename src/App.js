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
    <div className="container mx-auto p-4">
      <PrimaryButton>Hello</PrimaryButton>
      <Card user={user} />
    </div>
  );
}

export default App;
