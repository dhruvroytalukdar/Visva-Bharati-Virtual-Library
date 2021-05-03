import React, { useState } from "react";
import mystyle from "./styles/bhavancontent.module.css";
import { db } from "../index";
import Books from "./Books";

export default function BhavanContent({ name, subjects, sems }) {
  const [data, setData] = useState(null);

  const fetchData = (subject, sem) => {
    db.collection("bhavans")
      .doc(name)
      .collection("books")
      .doc(subject)
      .collection(sem)
      .get()
      .then((query) => {
        const doc = query.docs.map((data) => ({
          ...data.data(),
          id: data.id,
        }));
        setData(doc);
        console.log(data);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var selectedSubject = e.target[0].value;
    var selectedSem = e.target[1].value;
    //console.log(selectedSubject, selectedSem);
    fetchData(selectedSubject, selectedSem);
  };

  const checkRenderCondition = () => {
    if (data.length !== 0) {
      return data.map((singledata) => (
        <div
          style={{
            width: "100%",
            height: "300px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Books key={singledata.id} {...singledata} />
        </div>
      ));
    } else {
      return (
        <p
          className={mystyle.messages}
          style={{ marginLeft: "1.1rem", marginTop: "1rem" }}
        >
          These books are unavailable now but will be back soon.
        </p>
      );
    }
  };

  const renderData = () => {
    if (data === null) {
      return (
        <p
          className={mystyle.messages}
          style={{ marginLeft: "1.1rem", marginTop: "1rem" }}
        >
          Search Something
        </p>
      );
    } else {
      return checkRenderCondition();
    }
  };

  return (
    <div className={mystyle.container}>
      <div className={mystyle.forms}>
        <form onSubmit={handleSubmit} action="" method="POST" id="searchForm">
          <div>
            <label
              id="subject-label"
              style={{ margin: "1.1rem" }}
              htmlFor="subject"
            >
              Subject
            </label>
            <select form="searchForm" id="subject" name="subject" required>
              {subjects &&
                subjects.map((data) => (
                  <option key={data.id} value={data.id}>
                    {data.id.toString().toUpperCase()}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label style={{ margin: "1.3rem" }} htmlFor="sem">
              Sem
            </label>
            <select
              style={{ width: "35px" }}
              form="searchForm"
              id="sem"
              name="sem"
              required
            >
              {sems &&
                sems.map((data) => (
                  <option key={data.id} value={data.id}>
                    {data.id.toString().toUpperCase()}
                  </option>
                ))}
            </select>
          </div>
          <input
            type="submit"
            value="Submit"
            className={mystyle.submit_button}
          />
        </form>
      </div>
      <div className={mystyle.contents}>{renderData()}</div>
    </div>
  );
}
