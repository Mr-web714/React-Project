import { useState, useEffect } from 'react';
import axios from "axios";

import UserSelector from "./UserSelector.jsx";
import ClaimButton from './ClaimButton.jsx';
import LeaderBoard from './LeaderBoard.jsx';

import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);

  let fetchUsers = async () => {
    let res = await axios.get(
      "https://backend-for-react-2ccm.onrender.com/leaderboard/users"
    );
    setUsers(res.data);
  };

  let fetchLeaderboard = async () => {
    let res = await axios.get(
      "https://backend-for-react-2ccm.onrender.com/leaderboard/leaderboardlist"
    );
    setLeaderboard(res.data);
  };

  let handleClaim = async () => {
    if(!selectedUserId) return;
    await axios.post(
      "https://backend-for-react-2ccm.onrender.com/leaderboard/claims",
      { userId: selectedUserId }
    );
    fetchUsers();
    fetchLeaderboard();
  };

  useEffect(() => {
    fetchUsers();
    fetchLeaderboard();
  }, []);

  return (
    <div className='userContent'>
      <UserSelector
        users={users}
        onSelect={setSelectedUserId}
        onRefresh={fetchUsers}
        fetchLeaderboard={fetchLeaderboard}
      ></UserSelector>
      <ClaimButton onClick={handleClaim}></ClaimButton>
      <LeaderBoard leaderboard={leaderboard}></LeaderBoard>
    </div>
  );
}

export default App
