import React, { useEffect, useState } from "react";

function Sender() {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");
  const fetchData = async () => {
    const response = await fetch("https://teamsync-server.onrender.com/chat/users", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const data = await response.json();
    setUsers(data.users);
    console.log(data.users);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="flex rounded-lg border-8 mt-0 flex-col">
        <div>
          <h1 className="p-4 border-4 text-lg font-semibold">Contract</h1>
        </div>
        <div className="overflow-auto p-4">
          {users.map((user) => (
            <div>
              <p className="p-2  font-semibold">{user.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sender;
