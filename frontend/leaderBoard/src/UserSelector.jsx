import { useState, useEffect } from "react";
import axios from "axios";
import "./userSelector.css";

export default function UserSelector({users, onSelect, onRefresh, fetchLeaderboard}) {
    const [newUser, setNewUser] = useState("");

    let addUser = async () => {
        if(newUser.trim()) {
            await axios.post("http://localhost:8080/leaderboard/users", {name : newUser});
            setNewUser("");
            onRefresh();
            fetchLeaderboard();
        }
        // console.log("added new user");
    };

    return (
      <div className="userSelector">
        <div>
          <select
            onChange={(e) => onSelect(e.target.value)}
            defaultValue=""
            className="selectUser"
          >
            <option value="" disabled>
              Select a User
            </option>
            {users.map((user) => (
              <option key={user._id} value={user._id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
        <div className="addUser">
          <input
            type="text"
            placeholder="Enter Username"
            value={newUser}
            onChange={(e) => setNewUser(e.target.value)}
          />
          <button onClick={addUser}>Add User</button>
        </div>
      </div>
    );
}