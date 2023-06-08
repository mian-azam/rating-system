

function Dialog({onClick}) {
    return (
      <div class="dialog-container">
          <div class="dialog-box">
            <img src="https://cdn.jsdelivr.net/gh/mian-azam/CDN/fevicon.jpg" alt="Logo"></img>
            <button onClick={onClick} className="button btn">Close</button>
          </div>
        </div>
    )
  }
  
  export default Dialog