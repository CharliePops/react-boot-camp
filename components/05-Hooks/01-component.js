import { useState, useEffect, useRef } from "react";

// Team.jsx
const Component = () => {
  const [inputValue, setInputValue] = useState("");
  const [teamMembers, setTeamMembers] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    setTeamMembers(["Carlos", "Dino", "Andre", "Gabriel", "Jim", "Bradfort"]);
    return () => {
      ///
    };
    // empty dependencies (only on mount/unmount)
  }, []);

  useEffect(() => {
    document.title = `Total members: ${teamMembers.length}`;
    // effect dependencies!
  }, [teamMembers]);

  const addTeamMember = () => {
    if (inputValue && !teamMembers.includes(inputValue)) {
      setTeamMembers([...teamMembers, inputValue]);
    }
    setInputValue("");
  };

  return (
    <div>
      <h1>Riot Client Team</h1>
      <p>Total members: {teamMembers.length}</p>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e?.target?.value)}
        ref={inputRef}
      />
      <button onClick={addTeamMember}>Add Team Member</button>

      <ul>
        {teamMembers.map((name, i) => (
          <li key={"member-" + i}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Component;
