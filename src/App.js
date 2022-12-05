  import "./App.css";
  import { useState, useEffect } from "react";
  

  /* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
  //shopData.forEach((item) => {
  // item.image = process.env.PUBLIC_URL + "/" + item.image;
  //});
  /* ############################################################## */

  function App() {
    
    return (
      <div className="App">
        <div className="top-bar">

        </div>

        <div className="content">
          <div className="intro">
            <div className="left-side-intro">
              <h2><b>Drowning Dolphin</b></h2>
              <p>Hello World! I am a student of Brown University and member of the Fall 2022 CSCI 1300 UI/UX course.</p>
              <p>Scroll to explore what I've created this semester!</p>
              
            </div>
            <div className="right-side-intro">
              <img className="dolphin" 
              src="https://images.emojiterra.com/google/android-11/512px/1f42c.png"
              alt="Emoticon of dolphin"></img>
            </div>
            
          </div>

          <div className="item1">
            <div className="left-side-item1">
              <div className="card">
                <a href="">
                  <img className="screenshots" src=""></img>
                </a>
              </div>
            </div>
            <div className="right-side-item1">
              <h3><b>Learning about Profiles</b></h3>
              <p><i>Describe Assignment Here</i></p>
            </div>
          </div>

          <div className="item2">
            <div className="left-side-item2">
              <h3><b>Developing a Redesign</b></h3>
              <p><i>Describe Assignment Here</i></p>
            </div>
            <div className="right-side-item2">
              <div className="card">
                <a id="redesigned-website"
                  href="https://drowningdolphin123.github.io/responsive-redesign/responsiveRedesign.html"
                  target="blank">
                    <img className="screenshots" 
                    src="https://i.imgur.com/Cp0T6Gb.png"
                    alt="Screenshot of the website redesign for the Washoe County Library"></img>
                </a>
              </div>
            </div>
          </div>

          <div className="item3">
            <div className="left-side-item3">
              <div className="card">
                <a href="https://drowningdolphin123.github.io/iterativedesign/"
                target="blank">
                  <img className="screenshots" 
                  src="https://i.imgur.com/HfXG7wr.png"
                  alt="Screenshot of Figma page for Dr. Treat"></img>
                </a>
              </div>
            </div>
            <div className="right-side-item3">
              <h3><b>Design with Evaluation</b></h3>
              <p><i>Describe Assignment Here</i></p>
            </div>
          </div>

          <div className="item4">
            <div className="top-item4">
                <h3><b>Fun with React + HTML + Figma</b></h3>
            </div>
            <div className="bottom-item4">
              <div className="card">
                <a href="https://drowningdolphin123.github.io/development/"
                target="blank">
                  <img className="screenshots" 
                  src="https://i.imgur.com/hPXWBCo.png"
                  alt="Screenshot of the website designed by Drowning Dolphin for a Club Penguin food court"></img>
                </a>
              </div>
              <div className="card">
                <a href=""
                target="blank">
                  <img className="screenshots" src="https://i.imgur.com/vnYsFGh.jpg"
                  alt="Locations Mythos screenshot"></img>
                </a>
              </div>
              <div className="card">
                <a href="https://www.majorarcana.net/"
                target="blank">
                  <img className="screenshots" src="https://i.imgur.com/5hzflr1.png"
                  alt="MajorArcana Logo"></img>
                </a>
              </div>
              <div className="card">
                <a href="https://www.figma.com/proto/zmMDkJBsth7OFl1DPsHjMq/LITR-List-project?scaling=scale-down&page-id=0%3A1&starting-point-node-id=5%3A1545&node-id=5%3A1545"
                target="blank">
                  <img className="screenshots" 
                  src="https://i.imgur.com/HYXNB5t.png"
                  alt="Screenshot of Figma page for Lists project"></img>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <p>Made with love in Providence</p>
        </div>

      </div>
    )
  }

  export default App;
