import React, { useState } from "react";

export default function Search(props) {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  function showCity(event) {
    event.preventDefault();
    setMessage(`It is 19 °C in ${city}`);
  }

  function getCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="App">
      <form onSubmit={showCity}>
        <input type="search" onChange={getCity}></input>
        <input type="submit" value="Search"></input>
      </form>
      <h2>{message}</h2>
    </div>
  );
}