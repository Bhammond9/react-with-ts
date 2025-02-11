import "./App.css";
import { useState } from "react";
import Modal from "./components/modal";

export interface Gift {
  id: string;
  image: string;
  name: string;
  value: number
}

function App() {
  const [showModal, setShowModal] = useState(false);
  const [gifts, setGifts] = useState<Gift[]>([]);

  const handleOpen = setShowModal(true)
  const handleClose = setShowModal(false)

  const handleSave = (gifts: Gift) => {
    setGifts([...gifts, gifts]);
  };

  
  return (
    <div className="App">
      {showModal && <Modal onClose = {handleClose} onSave={handleSave}/>}
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