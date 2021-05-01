import React from "react";

export default function BhavanContent({ subjects, sems }) {
  console.log(subjects, sems);
  return (
    <div>
      <form action="" method="POST" id="searchForm">
        <label htmlFor="subject">Subject</label>
        <select form="searchForm" id="subject" name="subject">
          {subjects &&
            subjects.map((data) => (
              <option key={data.id} value={data.id}>
                {data.id.toString().toUpperCase()}
              </option>
            ))}
        </select>
      </form>
    </div>
  );
}
