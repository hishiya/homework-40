import { useState, useEffect } from "react";

const SalaryTracker = () => {
  const [salary, setSalary] = useState("");

  const [salaries, setSalaries] = useState(() => {
    const saved = localStorage.getItem("salaries");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("salaries", JSON.stringify(salaries));
  }, [salaries]); 

  const handleAddSalary = (event) => {
    event.preventDefault();
    if (!salary) return;

    setSalaries([...salaries, salary]);
    setSalary(""); 
  };

  return (
    <div>
      <form onSubmit={handleAddSalary}>
        <input
          type="number"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          placeholder="Enter salary"
        />
        <button type="submit">Add Salary</button>
      </form>

      <h3>Salaries:</h3>
      <ul>
        {salaries.map((s, index) => (
          <li key={index}>Salary for month {index + 1}: {s} грн</li>
        ))}
      </ul>
    </div>
  );
};

export default SalaryTracker;
