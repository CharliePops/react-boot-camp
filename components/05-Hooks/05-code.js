import { binding } from "riot-bindings";
import { useState, useEffect } from "react";

const useTeamMembers = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    binding().addObserver("/riot-client/members", (members) =>
      setTeamMembers(members)
    );
    return () => {
      binding().removeObserver();
    };
  }, []);

  return teamMembers;
};

const Team = () => {
  const teamMembers = useTeamMembers();

  useEffect(() => {
    document.title = `Total members: ${teamMembers.length}`;
  }, [teamMembers]);

  return (
    <div>
      <h1>Riot Client Team</h1>
      <ul>
        {teamMembers.map((name, i) => (
          <li key={"member-" + i}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

// App.jsx
const App = () => {
  return <Team />;
};
