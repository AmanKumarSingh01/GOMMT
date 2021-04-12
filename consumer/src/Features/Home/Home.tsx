import React from "react";
import { useHistory } from "react-router";
import "./Index.scss";

const data = [
  {
    name: "Holiday home villa",
    imageExternal:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe_LP3mu7rQc8KQ_6SaODXiCsztbnmBKQDtg&usqp=CAU",
    imageInternal:
      "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/2019/08/26204630/Duplex-House-Design-Living-Room-1024x683.jpg",
    imageBedroom:
      "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/2019/08/26204630/Duplex-House-Design-Living-Room-1024x683.jpg",
    imageGarden:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe_LP3mu7rQc8KQ_6SaODXiCsztbnmBKQDtg&usqp=CAU",
    price: "5000",
    id: "12345678890",
    location: "muzaffarpur Bihar",
  },
  {
    name: "Holiday home villa",
    imageExternal:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe_LP3mu7rQc8KQ_6SaODXiCsztbnmBKQDtg&usqp=CAU",
    imageInternal:
      "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/2019/08/26204630/Duplex-House-Design-Living-Room-1024x683.jpg",
    imageBedroom:
      "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/2019/08/26204630/Duplex-House-Design-Living-Room-1024x683.jpg",
    imageGarden:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe_LP3mu7rQc8KQ_6SaODXiCsztbnmBKQDtg&usqp=CAU",
    price: "5000",
    id: "12345678890",
    location: "muzaffarpur Bihar",
  },
  {
    name: "Holiday home villa",
    imageExternal:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe_LP3mu7rQc8KQ_6SaODXiCsztbnmBKQDtg&usqp=CAU",
    imageInternal:
      "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/2019/08/26204630/Duplex-House-Design-Living-Room-1024x683.jpg",
    imageBedroom:
      "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/2019/08/26204630/Duplex-House-Design-Living-Room-1024x683.jpg",
    imageGarden:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe_LP3mu7rQc8KQ_6SaODXiCsztbnmBKQDtg&usqp=CAU",
    price: "5000",
    id: "12345678890",
    location: "muzaffarpur Bihar",
  },
  {
    name: "Holiday home villa",
    imageExternal:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe_LP3mu7rQc8KQ_6SaODXiCsztbnmBKQDtg&usqp=CAU",
    imageInternal:
      "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/2019/08/26204630/Duplex-House-Design-Living-Room-1024x683.jpg",
    imageBedroom:
      "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/2019/08/26204630/Duplex-House-Design-Living-Room-1024x683.jpg",
    imageGarden:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe_LP3mu7rQc8KQ_6SaODXiCsztbnmBKQDtg&usqp=CAU",
    price: "5000",
    id: "12345678890",
    location: "muzaffarpur Bihar",
  },
  {
    name: "Holiday home villa",
    imageExternal:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe_LP3mu7rQc8KQ_6SaODXiCsztbnmBKQDtg&usqp=CAU",
    imageInternal:
      "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/2019/08/26204630/Duplex-House-Design-Living-Room-1024x683.jpg",
    imageBedroom:
      "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/2019/08/26204630/Duplex-House-Design-Living-Room-1024x683.jpg",
    imageGarden:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe_LP3mu7rQc8KQ_6SaODXiCsztbnmBKQDtg&usqp=CAU",
    price: "5000",
    id: "12345678890",
    location: "muzaffarpur Bihar",
  },
  {
    name: "Holiday home villa",
    imageExternal:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe_LP3mu7rQc8KQ_6SaODXiCsztbnmBKQDtg&usqp=CAU",
    imageInternal:
      "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/2019/08/26204630/Duplex-House-Design-Living-Room-1024x683.jpg",
    imageBedroom:
      "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/2019/08/26204630/Duplex-House-Design-Living-Room-1024x683.jpg",
    imageGarden:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe_LP3mu7rQc8KQ_6SaODXiCsztbnmBKQDtg&usqp=CAU",
    price: "5000",
    id: "12345678890",
    location: "muzaffarpur Bihar",
  },
  {
    name: "Holiday home villa",
    imageExternal:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe_LP3mu7rQc8KQ_6SaODXiCsztbnmBKQDtg&usqp=CAU",
    imageInternal:
      "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/2019/08/26204630/Duplex-House-Design-Living-Room-1024x683.jpg",
    imageBedroom:
      "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/2019/08/26204630/Duplex-House-Design-Living-Room-1024x683.jpg",
    imageGarden:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe_LP3mu7rQc8KQ_6SaODXiCsztbnmBKQDtg&usqp=CAU",
    price: "5000",
    id: "12345678890",
    location: "muzaffarpur Bihar",
  },
];

function Home() {
  let History = useHistory();
  return (
    <div className="home__wrapper">
      <header className="Header__search">
        <div className="__Gommt__welcome">
          <h1>Welcome to GOMMT</h1>
        </div>
        <form className="search__">
          <div className="Input__wrapper">
            <p>Location</p>
            <input placeholder="Muzaffarpur, Bihar" type="text" />
          </div>
          <div className="Input__wrapper">
            <p>Number of people</p>
            <input placeholder="2 people" type="number" />
          </div>
          <div className="Input__wrapper">
            <p>date</p>
            <input type="date" />
          </div>
          <div className="Input__wrapper">
            <p>&nbsp;</p>
            <button> Search </button>
          </div>
        </form>
      </header>
      <main className="__Grid__data">
        {data.map((item, key) => {
          return (
            <div
              onClick={() => History.push(`/${item.id}/details`)}
              className="grid__item"
            >
              <img src={item.imageExternal} alt="image" />
              <div>
                <h1>{item.name}</h1>
                <div className="facilities">
                  <p>ac</p>
                  <p>Wifi</p>
                  <p>TV</p>
                  <p>Free food</p>
                </div>
                <p className="Money">&#8377;{item.price}</p>
                <button>Request a dome</button>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default Home;
