import React from "react";
import "./Index.scss";

const data = [
  {
    name: "Aman Kumar Singh",
    mobile: "+918757641020",
    email: "amanksingh72@gmail.com",
    amount: "5000",
    bookedName: "Villa house",
    bookedAdress: "muzaffarpur, bihar",
  },
  {
    name: "Aman Kumar Singh",
    mobile: "+918757641020",
    email: "amanksingh72@gmail.com",
    amount: "5000",
    bookedName: "Villa house",
    bookedAdress: "muzaffarpur, bihar",
  },
  {
    name: "Aman Kumar Singh",
    mobile: "+918757641020",
    email: "amanksingh72@gmail.com",
    amount: "5000",
    bookedName: "Villa house",
    bookedAdress: "muzaffarpur, bihar",
  },
  {
    name: "Aman Kumar Singh",
    mobile: "+918757641020",
    email: "amanksingh72@gmail.com",
    amount: "5000",
    bookedName: "Villa house",
    bookedAdress: "muzaffarpur, bihar",
  },
  {
    name: "Aman Kumar Singh",
    mobile: "+918757641020",
    email: "amanksingh72@gmail.com",
    amount: "5000",
    bookedName: "Villa house",
    bookedAdress: "muzaffarpur, bihar",
  },
  {
    name: "Aman Kumar Singh",
    mobile: "+918757641020",
    email: "amanksingh72@gmail.com",
    amount: "5000",
    bookedName: "Villa house",
    bookedAdress: "muzaffarpur, bihar",
  },
];

function Active() {
  return (
    <div className="__active">
      <p className="__caption">Property post dashboard</p>
      <h1>Welcome to GOMMT!</h1>
      <div className="divider" />
      <div className="active__wrapper">
        {data.map((item, key) => {
          return (
            <div className="active_item" key={key}>
              <h1 className="name"> Name : {item.name}</h1>
              <h1 className="email"> Email : {item.email}</h1>
              <h1 className="mobile"> Mobile : {item.mobile}</h1>
              <h1 className="amount"> Amount : {item.amount}</h1>
              <h1 className="bookedname"> Proprety Name : {item.bookedName}</h1>
              <h1 className="bookedadress"> Adress : {item.bookedAdress}</h1>
              <div>
                <button>Decline</button>
                <button>Accept</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Active;
