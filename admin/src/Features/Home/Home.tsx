import React, { useState } from "react";
import "./Index.scss";
function Home() {
  const [active, setActive] = useState("upcoming");
  // Use effect to filter all the booking based on date
  console.log(active);
  // dummy data
  const data = [
    {
      location: "Muzaffarpur Bihar",
      name: "Aman Kumar Singh",
      date: new Date().toLocaleDateString(),
      Amount: 5000,
    },
    {
      location: "Muzaffarpur Bihar",
      name: "Aman Kumar Singh",
      date: new Date().toLocaleDateString(),
      Amount: 5000,
    },
    {
      location: "Muzaffarpur Bihar",
      name: "Aman Kumar Singh",
      date: new Date().toLocaleDateString(),
      Amount: 5000,
    },
    {
      location: "Muzaffarpur Bihar",
      name: "Aman Kumar Singh",
      date: new Date().toLocaleDateString(),
      Amount: 5000,
    },
    {
      location: "Muzaffarpur Bihar",
      name: "Aman Kumar Singh",
      date: new Date().toLocaleDateString(),
      Amount: 5000,
    },
    {
      location: "Muzaffarpur Bihar",
      name: "Aman Kumar Singh",
      date: new Date().toLocaleDateString(),
      Amount: 5000,
    },
    {
      location: "Muzaffarpur Bihar",
      name: "Aman Kumar Singh",
      date: new Date().toLocaleDateString(),
      Amount: 5000,
    },
    {
      location: "Muzaffarpur Bihar",
      name: "Aman Kumar Singh",
      date: new Date().toLocaleDateString(),
      Amount: 5000,
    },
    {
      location: "Muzaffarpur Bihar",
      name: "Aman Kumar Singh",
      date: new Date().toLocaleDateString(),
      Amount: 5000,
    },
  ];
  return (
    <div className="">
      <p className="__caption">admin dashboard</p>
      <h1>Welcome to GOMMT!</h1>
      <div className="divider" />
      <div className="__SLIDER">
        <button
          className={`${active === "upcoming" ? "active" : ""}`}
          onClick={() => setActive(prev => "upcoming")}
        >
          Up-Coming booking
        </button>
        <button
          className={`${active === "prev" ? "active" : ""}`}
          onClick={() => setActive(prev => "prev")}
        >
          Previous booking
        </button>
      </div>
      <div className="table__home">
        <div className="table__head">
          <span id="location">Location</span>
          <span id="name">Custmer Name</span>
          <span id="date">Date</span>
          <span id="amount">Amount</span>
        </div>
        <div className="data">
          {/* Conditional rendering of data */}
          {data.map((item, key) => {
            return (
              <div key={key} className="table__body">
                <span id="location">{item.location}</span>
                <span id="name">{item.name}</span>
                <span id="date">{item.date}</span>
                <span id="amount">&#8377;{item.Amount}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
