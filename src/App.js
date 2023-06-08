
//-------------------Imports
import StarRating from "./components/StarRating";
import './styles/index.css'
import { useState } from "react";
import Dialog from "./components/Dialog";


function App() {
  const [show, showDialogue] = useState(false);
  const handleClick = () => {
    showDialogue(true)
  }
  const closeDialog = () => {
    showDialogue(false)
  }
  return (
    <main className="container">
      <StarRating />
      <div className="dialog">
        <button className="button buttonPosition" onClick={handleClick}>Open Dialog</button>
      </div>
      <div>
      { show &&
        <Dialog 
        onClick={() => closeDialog(show)}
        />
      }
      </div>
      
      
    </main>

  );
}

export default App;

