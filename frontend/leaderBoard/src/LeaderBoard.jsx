export default function LeaderBoard({leaderboard}) {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Current Ranking</h2>
        <div>
          <div>
            <ul
              style={{
                listStyle: "none",
                backgroundColor: "rgb(230 234 162)",
                padding: "1rem 1.5rem",
                width: "50vw",
                borderRadius: "1rem",
              }}
            >
              {leaderboard.map((user, idx) => (
                <li
                  key={idx}
                  style={{
                    marginBottom: "2rem",
                    backgroundColor: "white",
                    borderRadius: "1rem",
                  }}
                >
                  <hr />
                  <p
                    style={{
                      textAlign: "center",
                      padding: "10px",
                      fontWeight: "600",
                    }}
                  >
                    {user.rank} &nbsp; &nbsp;&nbsp; &nbsp;
                    <img
                      style={{
                        borderRadius: "50%",
                        height: "35px",
                        width: "35px",
                      }}
                      src={user.image}
                    />
                    &nbsp; &nbsp;&nbsp;
                    {user.name}
                    &nbsp; &nbsp; &nbsp; &nbsp; TotalPoints = {user.totalPoints}
                  </p>
                  <hr />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
};