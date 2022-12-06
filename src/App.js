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

       
          <div className="intro">
            <div className="left-side-intro" id="Intro">
              <h2><b>Drowning Dolphin</b></h2>
              <div>
                <p>Hello World! I am a student of Brown University and member of the Fall 2022 CSCI 1300 UI/UX course.</p>
                <p>Scroll to explore what I've created this semester!</p>
              </div>
            </div>
            <div className="right-side-intro">
              <img className="dolphin" 
              src="https://images.emojiterra.com/google/android-11/512px/1f42c.png"
              alt="Emoticon of dolphin"></img>
            </div>
          </div>

          <div className="grid-container">
            <div className="left-side-item1" id="Personas">
              <div className="card">
                <a href=""
                target="blank">
                  <img className="screenshots" 
                  src="https://i.imgur.com/5yV8LAU.png"></img>
                </a>
              </div>
            </div>
            <div className="center-item1">
              <div className="text">
                <h3><b>Learning about Profiles</b></h3>
                <div className="descriptions">
                  <p>
                    Through observing and interviewing individuals interacting with the laundry machines in Hegeman Hall, I created
                    two personas based on their experiences and illustrated storyboards for the personas.
                  </p>
                </div>
              </div>
            </div>
            <div className="right-side-item1">
              <div className="bubbles">
                  <table>
                    <tr>
                      <td></td>
                      <td><img className="bubble" src="https://i.imgur.com/4pXynPQ.png"></img></td>
                    </tr>
                    <tr>
                      <td><img className="bubble" src="https://i.imgur.com/qjtfzgl.png"></img></td>
                      <td></td>
                    </tr>
                  </table>
                </div>
            </div>

            <div className="left-side-item2" id="ResponsiveRedesign">
            <div className="bubbles">
                <table>
                  <tr>
                    <td><img className="bubble" src="https://i.imgur.com/HzXbXMd.jpg"></img></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td><img className="bubble" src="https://i.imgur.com/SfCdaAf.jpg"></img></td>
                  </tr>
                </table>
              </div>   
            </div>
            <div className="center-item2">
              <div className="text">
                  <h3><b>Developing a Redesign</b></h3>
                  <div className="descriptions">
                    <p>
                    Showcases the workflow of redesigning a simple website. Identified Washoe County Library website as 
                    needing renovation by analyzing and identifying flaws in the existing interface.
                    </p>
                  </div>
              </div>
            </div>
            <div className="right-side-item2">
              <div className="card">
                <a id="redesigned-website"
                  href="https://drowningdolphin123.github.io/responsive-redesign/responsiveRedesign.html"
                  target="blank">
                    <img className="screenshots" 
                    src="https://i.imgur.com/GqtZ1KJ.png"
                    alt="Screenshot of the website redesign for the Washoe County Library"></img>
                </a>
              </div>
            </div>

            <div className="left-side-item3"  id="IterativeDesign">
              <div className="card">
                <a href="https://drowningdolphin123.github.io/iterativedesign/"
                target="blank">
                  <img className="screenshots" 
                  src="https://bookface-images.s3.amazonaws.com/small_logos/d32db90d7196c1ce3567ce75271b6314a38a8b22.png"
                  alt="Screenshot of Figma page for Dr. Treat"></img>
                </a>
              </div>
            </div>
            <div className="center-item3">
              <div className="text">
              <h3><b>Design with Evaluation</b></h3>
              <div className="descriptions">
                <p>Worked through the process of mocking up a solution to a chosen startup's content 
                  beginning with sketching ideas for the interfaces, then creating
                  an interactive, high-fidelity prototype, then conducting user testing on a revised prototype, and finally contacting the
                  startup.
                </p>
              </div>
              </div>
            </div>
            <div className="right-side-item3">
              <div className="bubbles">
                  <table>
                    <tr>
                      <td></td>
                      <td><img className="bubble" src="https://i.imgur.com/kqcOvtU.jpg"></img></td>
                    </tr>
                    <tr>
                      <td><img className="bubble" src="https://i.imgur.com/TVW2iPf.jpg"></img></td>
                      <td></td>
                    </tr>
                  </table>
              </div>
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
                src="https://www.pngitem.com/pimgs/m/433-4339408_club-penguin-rewritten-wiki-club-penguin-pizza-chef.png"
                alt="Screenshot of the website designed by Drowning Dolphin for a Club Penguin food court"></img>
              </a>
            </div>
            <div className="card">
              <a href=""
              target="blank">
                <img className="screenshots" src="https://i.imgur.com/Spo00wU.jpg"
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
                src="https://i.imgur.com/6Ge9YBY.png"
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