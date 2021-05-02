import React from "react";
import mystyle from "./styles/books.module.css";

export default function Books({ name, course, link }) {
  return (
    <div className={mystyle.card}>
      <p className={mystyle.title}>{name}</p>
      <p className={mystyle.course}>{course}</p>
      <a className={mystyle.link} href={link}>
        Download
      </a>
    </div>
  );
}
