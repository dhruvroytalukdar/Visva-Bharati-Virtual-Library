import React from "react";
import BhavanBox from "./BhavanBox";
import { useState, useEffect } from "react";
import { db } from "../index";
import BhavanContent from "./BhavanContent";

export default function Bhavans() {
  const [subject, setSubject] = useState(null);
  const [sem, setSem] = useState(null);
  const [havedata, setHaveData] = useState(false);
  const [bhavanname, setBhavanName] = useState("");
  const fireFirebase = (name) => {
    setBhavanName(name);
    db.collection("bhavans")
      .doc(name)
      .collection("subjects")
      .onSnapshot((query) => {
        const doc = query.docs.map((data) => ({
          ...data.data(),
          id: data.id,
        }));
        setSubject(doc);
      });

    db.collection("bhavans")
      .doc(name)
      .collection("sem")
      .onSnapshot((query) => {
        const doc = query.docs.map((data) => ({
          ...data.data(),
          id: data.id,
        }));
        setSem(doc);
      });

    console.log(subject);
    console.log(sem);
  };

  useEffect(() => {
    console.log("Inside the use effect");
    console.log(subject);
    console.log(sem);
    if (subject && sem) {
      setHaveData(true);
      console.log("data updated");
    }
  }, [sem]);

  return (
    <>
      {!havedata && (
        <div className="bhavan-container">
          <>
            <BhavanBox
              fireFirebase={fireFirebase}
              redirecturl="sikshabhavan"
              name="Siksha Bhavan"
              imgSrc="images/sikshab.jpg"
            />
            <BhavanBox
              fireFirebase={fireFirebase}
              redirecturl="vidyabhavan"
              name="Vidya Bhavan"
              imgSrc="images/vidyab.jpg"
            />
            <BhavanBox
              fireFirebase={fireFirebase}
              redirecturl="bhashabhavan"
              name="Bhasha Bhavan"
              imgSrc="images/bhasa.jpg"
            />
          </>
        </div>
      )}
      {havedata && (
        <BhavanContent name={bhavanname} subjects={subject} sems={sem} />
      )}
    </>
  );
}
