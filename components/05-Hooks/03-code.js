// Team.jsx
import { binding } from "riot-bindings";
import { useState, useEffect } from "react";

const Team = () => {
  // hooks always go on top and cannot be inside conditionals or loops
  const [inputValue, setInputValue] = useState("");
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    binding().addObserver("/riot-client/members", (members) =>
      setTeamMembers(members)
    );
    // remove/clean up on unmount
    return () => {
      binding().removeObserver();
    };
  }, []);

  const addTeamMember = () => {
    if (inputValue && !teamMembers.includes(inputValue)) {
      setTeamMembers([...teamMembers, inputValue]);
      setInputValue("");
      // binding().post("/riot-client/members") ...
    }
  };

  useEffect(() => {
    document.title = `Total members: ${teamMembers.length}`;
    // effect dependencies!
  }, [teamMembers]);

  return (
    <div>
      <h1>Riot Client Team</h1>
      <p>Total members: {teamMembers.length}</p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e?.target?.value)}
      />
      <button onClick={addTeamMember}>Add Team Member</button>
      <ul>
        {teamMembers.map((name, i) => (
          // must have a 'key'
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
