  import "./App.css";  

  function App() {
    
    return (
      <div className="App">
        <div className="top-bar" id="navbar">
          <a class="navbar-first" href="#Intro"><strong>Final Portfolio</strong></a>
          <a href="#Personas">Personas & Storyboarding</a>
          <div class="separator"></div>
          <a href="#ResponsiveRedesign">Responsive Redesign</a>
          <div class="separator"></div>
          <a href="#IterativeDesign">Iterative Design</a>
          <div class="separator"></div>
          <a class="navbar-last" href="#AdditionalProjects">More!</a>
        </div>

        <div className="grid-container">
          
            <div className="left-side-intro" id="Intro">
              <h2><b>Drowning Dolphin</b></h2>
              <p>Hello World! I am a student of Brown University and member of the Fall 2022 CSCI 1300 UI/UX course.</p>
              <p>Scroll to explore what I've created this semester!</p>
              
            </div>
            <div className="right-side-intro">
              <img className="dolphin" 
              src="https://images.emojiterra.com/google/android-11/512px/1f42c.png"
              alt="Emoticon of dolphin"></img>
            </div>
            
          

            <div className="left-side-item1" id="Personas">
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

            <div className="left-side-item2" id="ResponsiveRedesign">
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

            <div className="left-side-item3"  id="IterativeDesign">
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

        <div className="top-item4" id="AdditionalProjects">
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
        <div className="footer">
          <p>Made with love in Providence</p>
        </div>

      </div>
    )
  }

  export default App;
