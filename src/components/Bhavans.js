import React from "react";
import BhavanBox from "./BhavanBox";

export default function Bhavans() {
  return (
    <>
      <div className="bhavan-container">
        <BhavanBox name="Siksha Bhavan" imgSrc="images/sikshab.jpg" />
        <BhavanBox name="Vidya Bhavan" imgSrc="images/vidyab.jpg" />
        <BhavanBox name="Bhasha Bhavan" imgSrc="images/bhasa.jpg" />
      </div>
    </>
  );
}
