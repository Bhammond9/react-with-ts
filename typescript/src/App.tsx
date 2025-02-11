import "./App.css";
import { useState } from "react";
import Modal from "./components/modal";

const handleOpen = setShowModal(true)
const handleClose = setShowModal(false)

function App() {
  return (
    <div className="App">
      {showModal && <Modal onClose = {handleClose}/>}
    <h1>My Birthday Gifts</h1>
    <div className="cards">
      <button>Add a Gift</button>
    </div>
    <div className="cards-gift">
        {/* {[].map((gift) => (
          <div className="card-gift" key={gift.id}>
            <img src={gift.image} alt="" />
            <h1>{gift.name}</h1>
            <p>${gift.value}</p>
          </div>
        ))} */}
      </div>
      </div>
  );
}
export default App;