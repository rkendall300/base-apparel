import './App.css';
import titleIcon from './images/logo.svg';
import arrowIcon from './images/icon-arrow.svg';
import { useState } from 'react';

function App() {

  const [validEmail, setValidEmail] = useState(true);

  const checkEmail = () => {
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(document.getElementById('email').value)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  }

  return (
    <main>
      <div id="backdrop">
        <div id="title-image">
          <img src={titleIcon} id="title-icon" alt="title"></img>
        </div>
        <div id="fm-image-container">
          <div id="fm-image"></div>
        </div>
        <div id="info">
          <h1 id="title"><span id="thin">WE'RE</span> COMING SOON</h1>
          <p id="description">Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
          <div id="input-holder">
            <input className={validEmail ? "default-input" : "error-input"} id="email" type="email" placeholder="Email Address"></input>
            <button id="submit" onClick={checkEmail}>
              <img src={arrowIcon} id="arrow-icon" alt="push-arrow"></img>
            </button>
            <p className={validEmail ? "hide" : "show"}>Please provide a valid email</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
