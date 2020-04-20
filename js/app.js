////////////////////////
///// DECLARATIONS /////
////////////////////////

// Define all the states that the app can be in
const APPSTATE_SETUP = 'APPSTATE_SETUP'
const APPSTATE_ADVANCED_SETTINGS = 'APPSTATE_ADVANCED_SETTINGS'
const APPSTATE_PREPARING = 'APPSTATE_PREPARING'
const APPSTATE_SESSION = 'APPSTATE_SESSION'
const APPSTATE_STOP_PREPARING = 'APPSTATE_STOP_PREPARING'
const APPSTATE_STOP_SESSION = 'APPSTATE_STOP_SESSION'
const APPSTATE_FINISHED = 'APPSTATE_FINISHED'
const APPSTATE_IMPRESSUM = 'APPSTATE_IMPRESSUM'

// define how long a new session is delayed to give the user time to prepare.
const PREPARATION_DELAY = 7000

// define how long the title of the current audio track is displayed before it is reduced to "..."
const DISPLAY_AUDIOTRACK_INTERVAL = 5000

// Define the breath state, which determines some of the visuals and text instructions
const BREATHSTATE_EXHALE = 'BREATHSTATE_EXHALE'
const BREATHSTATE_INHALE = 'BREATHSTATE_INHALE'

const AUDIOSTATE_PAUSE = 'AUDIOSTATE_PAUSE'
const AUDIOSTATE_PLAY = 'AUDIOSTATE_PLAY'

// For each app state, define the UI layout, i.e. which UI elements appear on the screen
const UI_STATES = {
          APPSTATE_SETUP: {
                            Header:                 true,
                            Settings:               true,
                            AdvancedSettings:       false,
                            MoreSettingsButton:     true,
                            StartButton:            true,
                            StopButton:             false,
                            NewButton:              false,
                            Countdown:              false,
                            Instruction:            false,
                            AudioPlayer:            true,
                            Animation:              true,
                            Footer:                 true,
                            Impressum:              false,
                            OverlayContainerRight:  true,
                            OverlayContainerLeft:   true
                          },
          APPSTATE_ADVANCED_SETTINGS: {
                            Header:                 true,
                            Settings:               true,
                            AdvancedSettings:       true,
                            MoreSettingsButton:     true,
                            StartButton:            true,
                            StopButton:             false,
                            NewButton:              false,
                            Countdown:              false,
                            Instruction:            false,
                            AudioPlayer:            true,
                            Animation:              true,
                            Footer:                 true,
                            Impressum:              false,
                            OverlayContainerRight:  true,
                            OverlayContainerLeft:   false
                          },
          APPSTATE_PREPARING: {
                            Header:                 true,
                            Settings:               false,
                            AdvancedSettings:       false,
                            MoreSettingsButton:     false,
                            StartButton:            false,
                            StopButton:             true,
                            NewButton:              false,
                            Countdown:              true,
                            Instruction:            true,
                            AudioPlayer:            true,
                            Animation:              true,
                            Footer:                 true,
                            Impressum:              false,
                            OverlayContainerRight:  true,
                            OverlayContainerLeft:   true
                          },
          APPSTATE_SESSION: {
                            Header:                 true,
                            Settings:               false,
                            AdvancedSettings:       false,
                            MoreSettingsButton:     false,
                            StartButton:            false,
                            StopButton:             true,
                            NewButton:              false,
                            Countdown:              true,
                            Instruction:            true,
                            AudioPlayer:            true,
                            Animation:              true,
                            Footer:                 true,
                            Impressum:              false,
                            OverlayContainerRight:  true,
                            OverlayContainerLeft:   true
                          },    
          APPSTATE_STOP_PREPARING: {
                            Header:                 true,
                            Settings:               false,
                            AdvancedSettings:       false,
                            MoreSettingsButton:     false,
                            StartButton:            false,
                            StopButton:             true,
                            NewButton:              true,
                            Countdown:              true,
                            Instruction:            true,
                            AudioPlayer:            true,
                            Animation:              true,
                            Footer:                 true,
                            Impressum:              false,
                            OverlayContainerRight:  true,
                            OverlayContainerLeft:   true
                          },
          APPSTATE_STOP_SESSION: {
                            Header:                 true,
                            Settings:               false,
                            AdvancedSettings:       false,
                            MoreSettingsButton:     false,
                            StartButton:            false,
                            StopButton:             true,
                            NewButton:              true,
                            Countdown:              true,
                            Instruction:            true,
                            AudioPlayer:            true,
                            Animation:              true,
                            Footer:                 true,
                            Impressum:              false,
                            OverlayContainerRight:  true,
                            OverlayContainerLeft:   true
                          },
          APPSTATE_FINISHED: {
                            Header:                 true,
                            Settings:               false,
                            AdvancedSettings:       false,
                            MoreSettingsButton:     false,
                            StartButton:            false,
                            StopButton:             true,
                            NewButton:              true,
                            Countdown:              true,
                            Instruction:            true,
                            AudioPlayer:            true,
                            Animation:              true,
                            Footer:                 true,
                            Impressum:              false,
                            OverlayContainerRight:  true,
                            OverlayContainerLeft:   true
                          },
          APPSTATE_IMPRESSUM: {
                            Header:                 true,
                            Settings:               false,
                            AdvancedSettings:       false,
                            MoreSettingsButton:     false,
                            StartButton:            false,
                            StopButton:             false,
                            NewButton:              false,
                            Countdown:              false,
                            Instruction:            false,
                            AudioPlayer:            false,
                            Animation:              false,
                            Footer:                 true,
                            Impressum:              true,
                            OverlayContainerRight:  false,
                            OverlayContainerLeft:   false
                          }
  }

// For each app state, define the text on the Stop button
const BUTTON_STOP_STATES = {
          APPSTATE_SETUP: 'Stop',
          APPSTATE_ADVANCED_SETTINGS: 'Stop',
          APPSTATE_PREPARING: 'Stop',
          APPSTATE_SESSION: 'Stop',
          APPSTATE_STOP_PREPARING: 'Continue',
          APPSTATE_STOP_SESSION: 'Continue',
          APPSTATE_FINISHED: 'Repeat'
        }

// For each app state, define the text on the main button
const BUTTON_ADVANCED_SETTINGS_STATES = {
          APPSTATE_SETUP: 'More Settings',
          APPSTATE_ADVANCED_SETTINGS: 'Less Settings',
          APPSTATE_PREPARING: 'More Settings',
          APPSTATE_SESSION: 'More Settings',
          APPSTATE_STOP_PREPARING: 'More Settings',
          APPSTATE_STOP_SESSION: 'More Settings',
          APPSTATE_FINISHED: 'More Settings'
        }

// For each app state, define the text instructions given to the user
const INSTRUCTION_STATES = {
          APPSTATE_SETUP: '',
          APPSTATE_ADVANCED_SETTINGS: '',
          APPSTATE_PREPARING: 'Prepare...',
          APPSTATE_SESSION: {BREATHSTATE_EXHALE: 'breathe out', // when in session, the text instructions also depend on the 'breath state'
                             BREATHSTATE_INHALE: 'breathe in'}, 
          APPSTATE_STOP_PREPARING: 'Sure. What do you want to do?',
          APPSTATE_STOP_SESSION: 'Sure. What do you want to do?',
          APPSTATE_FINISHED: 'Well done!',
        }

// For each app state, define the the parameters of the circle visualisation
const CIRCLE_DEFAULT = { circleOpacityOffset: -0.0, 
                         circleYMove: 0.3, 
                         circleBaseScale: 0.85 }

const CIRCLE_SESSION = { circleOpacityOffset: -0.0, 
                         circleYMove: 0.9, 
                         circleBaseScale: 0.85 }

const CIRCLE_STATES = {
          APPSTATE_SETUP: CIRCLE_DEFAULT,
          APPSTATE_ADVANCED_SETTINGS: CIRCLE_DEFAULT,
          APPSTATE_PREPARING: CIRCLE_DEFAULT,
          APPSTATE_SESSION: CIRCLE_SESSION, 
          APPSTATE_STOP_PREPARING: CIRCLE_SESSION,
          APPSTATE_STOP_SESSION: CIRCLE_SESSION,
          APPSTATE_FINISHED: CIRCLE_SESSION,
          APPSTATE_IMPRESSUM: CIRCLE_DEFAULT,
        }

// define the color themes the user can select from
const THEMES = {
          'Forest spring': {
            color_primary: '#26595F',
            color_primary_dark: '#06393F',
            color_secondary: '#008000',
            color_tertiary: '#FFFF00',
            color_bg: 'whitesmoke',
            color_font: 'black'
          },
          /*'Forest spring (dark mode)': {
            color_primary: '#26595F',
            color_primary_dark: '#06393F',
            color_secondary: '#008000',
            color_tertiary: '#FFFF00',
            color_bg: 'black',
            color_font: 'whitesmoke'
          },*/
          'Campfire': {          
            color_primary: '#2D3A51',
            color_primary_dark: '#0D1A31',
            color_secondary: '#F65D24',
            color_tertiary: '#F3CB3A',
            color_bg: 'whitesmoke',
            color_font: 'black'
          },
          'Lantern': {          
            color_primary: '#3F3943',
            color_primary_dark: '#1F1923',
            color_secondary: '#647092',
            color_tertiary: '#AA4F70',
            color_bg: '#DEEDFF',
            color_font: 'black'
          },
          'Mario': {          
            color_primary: '#312C46',
            color_primary_dark: '#312C46',
            color_secondary: '#3569A9',
            color_tertiary: '#5CA3C7',
            color_bg: '#C1CED8',
            color_font: 'black'
          },
          'Ocean': {          
            color_primary: '#324149',
            color_primary_dark: '#122129',
            color_secondary: '#597F9D',
            color_tertiary: '#96A8B4',
            color_bg: 'whitesmoke',
            color_font: 'black'
          }
}

// define the audio tracks the user can okay as background music
const AUDIOTRACKS = {
    0: {name: "No music, please.",
       url: '',
       info: ''},
    1: {name: '“Tranquility” by K. MacLeod',
       url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Kevin_MacLeod/Calming/Kevin_MacLeod_-_Tranquility.mp3',
       info: 'https://freemusicarchive.org/music/Kevin_MacLeod/Calming/Tranquility'},
    2: {name: '“Cylinder Seven” by C. Zabriskie',
       url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Music_for_Video/Chris_Zabriskie/Cylinders/Chris_Zabriskie_-_07_-_Cylinder_Seven.mp3',
       info: 'https://freemusicarchive.org/music/Chris_Zabriskie/2014010103336111/Chris_Zabriskie_-_Cylinders_-_07_-_Cylinder_Seven'},
    3: {name: '“Take Off and Shoot a Zero” by C. Zabriskie',
       url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Chris_Zabriskie/Stunt_Island/Chris_Zabriskie_-_01_-_Take_Off_and_Shoot_a_Zero.mp3',
       info: 'https://freemusicarchive.org/music/Chris_Zabriskie/Stunt_Island/Chris_Zabriskie_-_01_-_Take_Off_and_Shoot_a_Zero'},
  }

////////////////////////////
///// REACT COMPONENTS /////
////////////////////////////

class Breazance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appState: APPSTATE_SETUP,      
      appStateLast: APPSTATE_SETUP,
      breathState: BREATHSTATE_EXHALE,
      audioState: AUDIOSTATE_PAUSE,
      bpm: 5.5,      
      inhaleRatio: 0.45,
      duration: 12,
      
      theme: 'Forest spring',
      audiotrack: 0

    };

    // create a NoSleep object for NoSleep.js, which help us keep the screen on during the session
    var noSleep;

    // bind all the methods
    this.handleChangeBPM = this.handleChangeBPM.bind(this);
    this.handleChangeDuration = this.handleChangeDuration.bind(this);
    this.handleChangeInhaleRatio = this.handleChangeInhaleRatio.bind(this);
    this.handleChangeTheme = this.handleChangeTheme.bind(this);
    this.handleChangeAudio = this.handleChangeAudio.bind(this);
    this.handleButtonStartStop = this.handleButtonStartStop.bind(this)
    this.handleButtonNew = this.handleButtonNew.bind(this)
    this.handleButtonMoreSettings = this.handleButtonMoreSettings.bind(this)
    this.handleAudioToggle = this.handleAudioToggle.bind(this)
    this.handleImpressumClick = this.handleImpressumClick.bind(this)
    this.handleGoBack = this.handleGoBack.bind(this)
    
    this.transitionTo = this.transitionTo.bind(this);
    this.startNewSession = this.startNewSession.bind(this);
    this.finishSession = this.finishSession.bind(this);    
    
    this.updateUI = this.updateUI.bind(this);
    this.setBreathState = this.setBreathState.bind(this)
    this.setAudioState = this.setAudioState.bind(this)
    
  }

  ////////////////////////
  //// INITIALISATION ////
  ////////////////////////
  
  componentDidMount() {

    // create a new instance of NoSleep.js, which will later be used to keep the screen on during the session
    this.noSleep = new NoSleep();
    
    // go to first appState
    this.transitionTo(APPSTATE_SETUP)

  }
  
  /////////////////////////
  //// APPSTATE AND UI ////
  /////////////////////////
  
  transitionTo(newAppState) {
    
    // to transition into a new appState, the last appState, the new appState and UI must be updated.
    // the function updateUI() must be called as a callback from setState because 
    // React works async. calling updateUI() directly doesn't work because 
    // state.appState will not yet be updated when updateUI tries to access it.
    
    // first, set appStateLast to the current appState
    this.setState((state) => ({appStateLast: this.state.appState}), 
                  // when that is done, update the appState to the new appState
                       () => (this.setState({appState: newAppState}, 
                           // and when that is done, update the UI
                              this.updateUI)))    
  }
  
  startNewSession() {
    
    // starting a new SESSION is a two-step-process.
    
    // 1) first the app goes into APPSTATE_PREPARING, which 
    // involves inhaling, then halting the animation and 
    // waiting for a number of seconds.
    
    // update appState and UI
    this.transitionTo(APPSTATE_PREPARING)    

    // wait for a speficied number of seconds, then...
    setTimeout(() => {
    
    // 2) after the waiting period we enter into APPSTATE_SESSION
      
      // check if we're still in 'APPSTATE_PREPARING'. 
      // if not, the user has aborted the session. so: exit.
      if(this.state.appState != APPSTATE_PREPARING) return;
      
      // update the the appstate that we're now in session
      this.transitionTo(APPSTATE_SESSION)

      
    }, PREPARATION_DELAY);
    
  }
  
  updateUI() {
    // this function takes care of hiding and showing the different UI components
    // depending on the appState, as defined in UI_STATES. it is called whenever appState changes.
    // it also takes care of the wakelock, i.e. keeping the screen on during session.
    
    let element = undefined;
    
    // iteratere through all UI elements
    Object.keys(UI_STATES[this.state.appState]).forEach( item => {
      
      // get the next element
      element = document.getElementById(item);
      
      // if it is marked as 'true' for the new appState...
      if(UI_STATES[this.state.appState][item]) {
        // then show it by removing the CSS class "collapsed"
        element.classList.remove("collapsed"); 
      } else {
        // else hide it by adding the CSS class "collapsed"
        element.classList.add("collapsed");        
      }
      
    })
    
    // finally, set the wakelock if we're in session
    if(this.state.appState == APPSTATE_SESSION) {
      // enable NoSleep.js to prevent the screen from turning off during the session
      this.noSleep.enable();      
    } else {
      // if we're not in session, let the screen turn off.
      this.noSleep.disable();
    }
  }

 
  /////////////////////////////////////////////////
  ////            CALLBACK FUNCTIONS           ////
  //// that are passed to the child components ////
  /////////////////////////////////////////////////
   
  handleButtonStartStop(event) {
  // this callback is passed to components StartButton and StopButton.
  // depending on the current appState, a transition into a new appState is triggered.

    switch(this.state.appState) {
      case APPSTATE_SETUP: this.startNewSession();
        break;
      case APPSTATE_ADVANCED_SETTINGS: this.startNewSession();
        break;  
      case APPSTATE_PREPARING: this.transitionTo(APPSTATE_STOP_PREPARING)
        break;
      case APPSTATE_SESSION: this.transitionTo(APPSTATE_STOP_SESSION)
        break;
      case APPSTATE_STOP_PREPARING: this.startNewSession()
        break;
      case APPSTATE_STOP_SESSION: this.transitionTo(APPSTATE_SESSION)
        break;
      case APPSTATE_FINISHED: this.startNewSession()
        break;
    }

  }
  
  handleButtonNew(event) {
    // this callback is passed to component ButtonNew. whenever the button is clicked, 
    // the app transitions back into APPSTATE_SETUP.
    this.transitionTo(APPSTATE_SETUP)
  }
  
  handleButtonMoreSettings(event) {
    // this callback is passed to component ButtonNew. whenever the button is clicked, 
    // the app transitions back into APPSTATE_SETUP.
    if(this.state.appState == APPSTATE_SETUP) this.transitionTo(APPSTATE_ADVANCED_SETTINGS)
    if(this.state.appState == APPSTATE_ADVANCED_SETTINGS) this.transitionTo(APPSTATE_SETUP)
  }
   
  handleChangeBPM(event) {
    // this callback is passed to component Settings
    this.setState({ bpm: event.target.value })
  }
  
  handleChangeDuration(event) {
    // this callback is passed to component Settings
    this.setState({ duration: event.target.value })
  }
  
  handleChangeInhaleRatio(event) {
    // this callback is passed to component AdvancedSettings
    this.setState({ inhaleRatio: event.target.value })              
  }
  
  handleChangeTheme(event) {
    // this callback is passed to component AdvancedSettings
    this.setState({ theme: event.target.value })    
  }
  
  handleChangeAudio(event) {
    // this callback is passed to component AdvancedSettings    
    this.setState({ audiotrack: event.target.selectedIndex })
    
    if(event.target.selectedIndex == 0) {
      this.setAudioState(AUDIOSTATE_PAUSE)
    } else { this.setAudioState(AUDIOSTATE_PLAY) }
  }
  
  handleAudioToggle(event) {    
    
    // if audio is currently paused...
    if(this.state.audioState == AUDIOSTATE_PAUSE) { 
      // check if not audiotrack was selected by the user (index 0)
      if(this.state.audiotrack == 0) {        
        // in this case, generate a random index to select an audiotrack as a "suggestion" to the user
        this.setState({ audiotrack: (Math.floor(Math.random() * (Object.keys(AUDIOTRACKS).length - 1)) + 1) })
      } 
      // update audioState to "currently playing"
      this.setAudioState(AUDIOSTATE_PLAY)
    }
    
    // if audio is currently playing...
    else if(this.state.audioState == AUDIOSTATE_PLAY) { 
      // update audioState to "currently paused"
      this.setAudioState(AUDIOSTATE_PAUSE) 
    }
  }
  
  handleImpressumClick(event) {    
    // if we're not in APPSTATE_IMPRESSUM, then transition to APPSTATE_IMPRESSUM
    if(this.state.appState != APPSTATE_IMPRESSUM) this.transitionTo(APPSTATE_IMPRESSUM)    
  }
  
  handleGoBack(event) {
    //transition back to the last state we remembered
    this.transitionTo(this.state.appStateLast)
  }
  
  finishSession() {
    // this callback is passed to component Countdown.
    // it is called when the counter reaches 0.
    this.transitionTo(APPSTATE_FINISHED)
  }
 
  setBreathState(newBreathState) {
    // this callback is passed to component Animation.
    // it is called whenever breathSTate switches between inhale and exhale.
    this.setState({breathState: newBreathState})    
  }

  setAudioState(newAudioState) {
    this.setState({audioState: newAudioState})    
    
  }
  
  /////////////////////
  //// HTML RENDER ////
  /////////////////////

  render() {
    return (
      <div container>

        {/* ///// The main app. Components are aranged in a flex container ///// */}
        <div className="flex-container">
          
          {/* ///// Pass variables concerning breathing animation and color theme to the css style ///// */}
          <style>
            {`
              :root {
                --bpm: ${this.state.bpm};
                --inhaleRatio: ${this.state.inhaleRatio};
                --color_primary: ${THEMES[this.state.theme].color_primary};
                --color_primary_dark: ${THEMES[this.state.theme].color_primary_dark};
                --color_secondary: ${THEMES[this.state.theme].color_secondary};
                --color_tertiary: ${THEMES[this.state.theme].color_tertiary};
                --color_bg: ${THEMES[this.state.theme].color_bg};
                --color_font: ${THEMES[this.state.theme].color_font};
                }
              `}
          </style>

          {/* ///// render all the components ///// */}
          <Header/>

          <Settings bpm={this.state.bpm} duration={this.state.duration} handleChangeBPM={this.handleChangeBPM} 
                    handleChangeDuration={this.handleChangeDuration}/>

          <AdvancedSettings inhaleRatio={this.state.inhaleRatio} handleChangeInhaleRatio={this.handleChangeInhaleRatio}
                  theme={this.state.theme} handleChangeTheme={this.handleChangeTheme} audiotrack={this.state.audiotrack} 
                  handleChangeAudio={this.handleChangeAudio}/>

          <MoreSettingsButton appState={this.state.appState} handleClick={this.handleButtonMoreSettings}/>

          <StartButton appState={this.state.appState} handleClick={this.handleButtonStartStop}/>

          <StopButton appState={this.state.appState} handleClick={this.handleButtonStartStop}/>

          <NewButton handleClick={this.handleButtonNew}/>

          <Animation appState={this.state.appState} breathState={this.state.breathState} setBreathState={this.setBreathState} inhaleRatio={this.state.inhaleRatio}/>

          <Impressum handleClick={this.handleGoBack}/>

          <Footer handleClick={this.handleImpressumClick}/>

        </div>
        
        {/* ///// render the overlays during session: Times on the left and Audio on the right ///// */}
        <div id="OverlayContainerLeft" className="OverlayContainerLeft">
          <Countdown appState={this.state.appState} duration={this.state.duration} 
            callbackFinished={this.finishSession}/>                       
        </div>
        
        <div id="OverlayContainerRight" className="OverlayContainerRight">
          <AudioPlayer audioState={this.state.audioState} handleClick={this.handleAudioToggle} 
            audiotrack={this.state.audiotrack} setAudioState={this.setAudioState}/>          
        </div>
        
     </div> 
     
    );
  }
}

const Header = () => {
  // just a stateless function to render the h1
  return(
    <div className="Header" id="Header">
      <h1>Breazance</h1>
      <p className="subtitle hide">guided resonance breathing</p>      
    </div>
    )
}

class Settings extends React.Component {
// the Settings component handles user input concerning inportant paramteres of the 
// session: its duration and the breaths per minute. these paramteres are NOT saved as local states, 
// because other components need to acces them. instead, they are saved to the main component via 
// callback functions and then passed back to the settings component as props, so they can printed out.
// thus, settings expects to be passed the props "bpm", "duration", callback "handleChangeBPM" and
// callback "handleChangeDuration".
  constructor(props) {
    super(props);

    this.state = { } // this component has no local state. all information comes from and goes back to the main function.
  }
  
  componentDidMount() {
    // nothing  
  }
  
  componentDidUpdate(prevProps) {
  // nothing
  }
  
  render() {
    return (  
        <div className="Settings trans center-maxwidth" id="Settings">
          
          <h2>Set up your breathing session</h2>
        
            <div className="settingsDuration">
              
              <p className="pSettings">Make the session <strong>{this.props.duration}</strong> minutes long.</p>
              
              <input type="range" min="1" max="60" defaultValue="12" step="1" className="slider center-maxwidth-inner" id="sliderDuration"
                      name="sliderDuration" onChange={this.props.handleChangeDuration}/>
              
            </div>            

            <div className="settingsBPM">
              
              <p className="pSettings">Take <strong>{this.props.bpm}</strong> breaths per minute.</p>
              
              <input type="range" min="3.0" max="8.0" defaultValue="5.50" step="0.1" className="slider center-maxwidth-inner" id="sliderBPM"
                      name="sliderBPM" onChange={this.props.handleChangeBPM}/>              
            
            </div>
      </div>
    )
  }
}

class AdvancedSettings extends React.Component {
// the AdvancedSettings component handles the more advanced settings a user can select.
  constructor(props) {
    super(props);
    
    // The component keeps track of important parameters the user can set: 
    // ("Breaths per Minute" and the duration of the session.
    // These parameters are passed to the CSS style so it can show the 
    this.state = { } // this sets the instruction text that is printed out. 
                                    // the updateInstruction() function will get the text
                                    //  from const INSTRUCTION_STATES defined above.

  }
  
  populateThemeSelect() {
    let selectElement = document.getElementById('ThemeSelect');
    
    // remove all entries from the dropdown element
    var i, L = selectElement.options.length - 1;
    for(i = L; i >= 0; i--) {
      selectElement.remove(i);
    }

    // add al items from THEMES to the dropdown element
    Object.keys(THEMES).forEach(item => {
      let newopt = document.createElement('option');
      newopt.value = item;
      newopt.innerHTML = item;
      selectElement.appendChild(newopt);
    })

  }
  
  populateAudioSelect() {
    let selectElement = document.getElementById('AudioSelect');
    
    // remove all entries from the dropdown element
    var i, L = selectElement.options.length - 1;
    for(i = L; i >= 0; i--) {
      selectElement.remove(i);
    }

    // add al items from THEMES to the dropdown element
    Object.keys(AUDIOTRACKS).forEach(item => {      
      let newopt = document.createElement('option');
      newopt.value = AUDIOTRACKS[item].name;
      newopt.innerHTML = AUDIOTRACKS[item].name;
      selectElement.appendChild(newopt);
    })

  }

  updateAudioSelect() {
    // update the selected value in the "AudioSelect" element to the audiotrack passed to the component.
    // this is important because the user can trigger a "random" audiotrack (see "handleAudioToggle()" in component Breazance) 
    // that needs to be passed to the AudioSelect element
    document.getElementById('AudioSelect').selectedIndex = this.props.audiotrack;
  }
  
  componentDidMount() {
    // update the instruction during initialisation
    this.populateThemeSelect()
    this.populateAudioSelect()
  }
  
  componentDidUpdate(prevProps) {
  // update the component when the appState or breathState changes
  // (this needs to be in a condition statement to prevent infinite loops!)
    
    if(this.props.audiotrack != prevProps.audiotrack) this.updateAudioSelect()    
  }
  
  render() {
    return (  
        <div className="AdvancedSettings trans center-maxwidth" id="AdvancedSettings">
        
          <p className="pSettings">Inhale <strong>{Math.round(this.props.inhaleRatio*100)}%</strong> of the time, exhale <strong>{Math.round((1-this.props.inhaleRatio)*100)}%</strong> of the time.</p>  
        
          <input type="range" min="0.10" max="0.90" defaultValue="0.45" step="0.01" className="slider center-maxwidth-inner" 
            id="sliderInhaleRatio" name="sliderInhaleRatio" onChange={this.props.handleChangeInhaleRatio}/>
          
          <p className="pSettings">Use this color theme:</p>
          <div id="ThemeSwitcher" className="ThemeSwitcher center-maxwidth-inner">
            
              <select id="ThemeSelect" className="ThemeSelect" name="theme"  size="1" onChange={this.props.handleChangeTheme}>
                <option></option>
              </select>
            
            <div className="themeColorPreviewContainer">
              <div className="themeColorPreview color1"/>
              <div className="themeColorPreview color2"/>
              <div className="themeColorPreview color3"/>
            </div>
          </div>
        
          <p className="pSettings">Play this music:</p>
          <div id="AudioSwitcher" className="AudioSwitcher center-maxwidth-inner">
            
              <select id="AudioSelect" className="AudioSelect" name="audio" size="1" onChange={this.props.handleChangeAudio}>
                <option></option>
              </select>
            

          </div>
        </div>
    )
  }
}

const MoreSettingsButton = (props) => {
// the StartBUtton is only needed to initiate a new session. during the session it is hidden.
// the button is a simple, stateless component, since it does not need to change.
  return(
        <div className="MoreSettingsButton center-maxwidth trans" id="MoreSettingsButton">
          <h2 className="hide">MoreSettings</h2>
          <button className="button buttonNoBorder buttonMoreSettings trans-quick" onClick={props.handleClick}>{BUTTON_ADVANCED_SETTINGS_STATES[props.appState]}</button>
        </div>
  )
}

const StartButton = (props) => {
// the StartButton is only needed to initiate a new session. during the session it is hidden.
// the button is a simple, stateless component, since it does not need to change.
  return(
        <div className="StartButton center-maxwidth trans" id="StartButton">
          <h2 className="hide">Start Session</h2>
          <button className="button buttonStart trans-quick" onClick={props.handleClick}>Let’s breathe</button>
        </div>
  )
}

class StopButton extends React.Component {
// the StopButton is the main way for the user to control the session. 
// when it is clicked, the app changes into a different appState 
// via the callback handleClick function.
// also, the button shows a different label depending on the appState.
// the component manages the label as a local state, which it sets 
// depending on the appstate it receives as a prop.
  constructor(props) {
    super(props);
    this.state = { label: ''} // this sets the label on the button. the updateButton() function will get the
                              // label on the button from const BUTTON_START_STATES defined above.
  }
  
  updateLabel() {    
    // update the label on the button depending on the current app state
    this.setState( {label: BUTTON_STOP_STATES[this.props.appState]} );    
  }
  
  componentDidMount() {
    // update the label during initialisation
    this.updateLabel()
  }
  
  componentDidUpdate(prevProps) {
  // update the label when the appState Changes
  // (this needs to be in a condition statement to prevent infinite loops!)
    if (this.props.appState !== prevProps.appState) {
      this.updateLabel()
    }
  }
  
  render() {
    return (  
        <div className="StopButton center-maxwidth trans collapsed" id="StopButton">
          <h2 className="hide">Start or Stop Session</h2>          
          <button className="button buttonStop trans-quick" onClick={this.props.handleClick}>{this.state.label}</button>
        </div>
    )
  }
}

const NewButton = (props) => {
// the NewButton is only needed when a breathing session is finished or terminated by the user.
// by clicking it, the user goes back to the initial setup for a new session.
// the button is a simple, stateless component, since it does not need to change.
  return(
        <div className="NewButton center-maxwidth trans collapsed" id="NewButton">
          <h2 className="hide">New Session</h2>
          <button className="button buttonNew trans-quick" onClick={props.handleClick}>New Session</button>
        </div>
  )
}

class Countdown extends React.Component {
// the Coundown component handles the countdown shown to the user during the session.
// the countdown only counts down during APPSTATE_SESSION. In APPSTATE_PREPARING it 
// resets the clock basend on the desired duration passed as a prop. when the countdown 
// reaches 0, it calls a callback function.
// the component expects appState, duration, and callback function to be provided as props.
  constructor(props) {
    super(props);
    this.state = { secondsRemaining: 0, // keep track of the remaining seconds and count them down
                   timeRemaining: ''}   // this is the string equivalent so 'secondsRemainung' in format 'HH:MM:SS'
  
    this.countdown = this.countdown.bind(this);
    this.updateCountdown = this.updateCountdown.bind(this);
    this.convertToTimeString = this.convertToTimeString.bind(this);
    
    // set a times that calls function 'countdown' once every second
    var timer = window.setInterval(() => this.countdown(), 1000);
  }
  
  // a function that counts down the seconds
  countdown() {
    // if we're in APPSTATE_SESSION ...                     
    if(this.props.appState == APPSTATE_SESSION) {
      
      // ... and have not yet counted down to zero
      if(this.state.secondsRemaining >= 1) {
        // then decrease secondsRemaining by 1, convert to HH:MM:SS and save to state
        this.setState((state) => ({        
          secondsRemaining: state.secondsRemaining - 1,
          timeRemaining: this.convertToTimeString(state.secondsRemaining - 1)
        }));
      }
      // if we have counted down to zero
      else {
        // call the callback function
        this.props.callbackFinished()               
      }
    }    
  }  
  
  updateCountdown() {
    // if we're entering APPSTATE_PREPARING... 
    if(this.props.appState == APPSTATE_PREPARING) {
      // reset the countdown based on the duration provided as a prop, convert to HH:MM:SS and save to state
      this.setState( { secondsRemaining: this.props.duration * 60,
                       timeRemaining: this.convertToTimeString(this.props.duration * 60) })
    }
  }
  
  // helper function to convert seconds into string "HH:MM:SS"
  convertToTimeString = function (sec_num) { 
    
    let hours   = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    let seconds = sec_num - (hours * 3600) - (minutes * 60);

    let strHours =    hours < 1 ? '' :
                      hours < 10 ? "0" + hours + ':' : hours+':'
    let strMinutes =  minutes < 10 ?  "0" + minutes + ":" : minutes + ":"
    let strSeconds =  seconds < 10 ?  "0" + seconds : seconds
    
    return strHours + strMinutes + strSeconds; 
  }

  componentDidMount() {
    // update the countdown during initialisation
    this.updateCountdown()
  }
  
  componentDidUpdate(prevProps) {
  // update the countdown when the provided props change
  // (this needs to be in a condition statement to prevent infinite loops!)
    if (this.props !== prevProps ) {
      this.updateCountdown()
    }
  }
  
  render() {
    return (  
        <div className="Countdown center-maxwidth trans collapsed" id="Countdown">
          <h2 className="hide">Countdown</h2>          
          <p className="timeRemaining overlay">{this.state.timeRemaining}</p>
        </div>
    )
  }
}

class AudioPlayer extends React.Component {
// the Audioplayer component handles the background music played during the session.
// the component consists of two sub-components: 
// 1) a clickable louspeaker-icon which acts as a toggle to turn music on and of, and
// 2) a button which displays the title of the track when it is clicked, but is usually 
// collapsed to save screen space.
// the component communicates with the main component via the passed props audioState and audioTrack
// and also expects handles for toggling the Audo and setting the audio state.
  constructor(props) {
    super(props);
    this.state = { display: '' }  

    var myaudio;
    this.updateAudioPlayerAndIcon = this.updateAudioPlayerAndIcon.bind(this)
    this.loadNewTrack = this.loadNewTrack.bind(this)
    this.displayTrack = this.displayTrack.bind(this)
    
  }  
  
  displayTrack() {
    // display the name of the audiotrack
    this.setState({ display: AUDIOTRACKS[this.props.audiotrack].name})  
    
    // reduce the display to "…" after a predefined time to save screenspace
    setTimeout(() => {
      this.setState({ display: '…'}) 
    }, DISPLAY_AUDIOTRACK_INTERVAL);    
    
  }
  
  updateAudioPlayerAndIcon() {
    let icon = document.getElementById('iconAudio')
    let button = document.getElementById('buttonAudioTitle')
    
    
    if(this.props.audioState == AUDIOSTATE_PLAY) 
    {
      // play the audio
      this.myaudio.play();
      
      // change the icon to a 'loudspeaker'
      icon.classList.remove("fa-volume-mute")
      icon.classList.add("fa-volume-up")
      
      // show the buttonAudioTitle
      button.classList.remove("collapsed")
      
      this.displayTrack()
    }
    else {
      // pause the audio
      this.myaudio.pause();
      
      // don't display any audiotrack
      this.setState({display: ''})
      
      // hide the buttonAudioTitle
      button.classList.add("collapsed")
      
      // change the icon to mute
      icon.classList.remove("fa-volume-up")
      icon.classList.add("fa-volume-mute")
    }
  }
  
  loadNewTrack() {
    this.myaudio.src = AUDIOTRACKS[this.props.audiotrack].url;
    this.myaudio.loop = true;        
  }

  componentDidMount() {
    // during initialisation, create a new instance of HTML5's "Audio" element
    this.myaudio = new Audio();       
  }
  
  componentDidUpdate(prevProps) {
  // update the AudioPlayer when the provided props change
  // (this needs to be in a condition statement to prevent infinite loops!)
    if(this.props.audiotrack != prevProps.audiotrack) {
      this.loadNewTrack()
      this.updateAudioPlayerAndIcon()
    }
    if(this.props.audioState != prevProps.audioState) this.updateAudioPlayerAndIcon()
   

  }
  
  render() {
    return (
      <div className="AudioPlayer" id="AudioPlayer">
        
        <button className="overlay buttonAudio trans-quick collapsed" id="buttonAudioTitle" onClick={this.displayTrack}>
          <p className="pAudio trans" id="pAudio">{this.state.display}</p>
        </button>
        
        <button className="overlay buttonAudio trans-quick" id="buttonAudioToggle" onClick={this.props.handleClick}>
          <i className="fas fa-volume-mute iconAudio" id="iconAudio"></i>
        </button>
        
      </div>)
  }
}

class Animation extends React.Component {
// the Animation component handles the circle animation depending 
// on appState, breathState and window dimensions. breathState is 
// saved locally AND in the parent, because other components need access
// to it. Animation component expects to receive an appState and a callback 
// function setBreathState() that is used to save breathState in the parent.
  constructor(props) {
    super(props);
    this.state = { breathState: BREATHSTATE_EXHALE, // this sets the instruction text that is printed out. 
                                    // the updateInstruction() function will get the text
                                    //  from const INSTRUCTION_STATES defined above.
                   circleOpacityOffset: -0.0,
                   innerCircleYMove: 0,
                   innerCircleMinSize: 0,
                   innerCircleMaxSize: 0
                 }
    
    this.setAnimation = this.setAnimation.bind(this)
    this.addEventListeners = this.addEventListeners.bind(this)
    this.loopAnimation = this.loopAnimation.bind(this)
    this.updateAnimation = this.updateAnimation.bind(this)
    this.updateCircle = this.updateCircle.bind(this);

  }
  
  setAnimation(newBreathState) {
    
    // update breathState in the parent component(!) using the callback function,
    // because breathState is needed by other components as well
    this.props.setBreathState(newBreathState)
    // also keep a local copy of breathState so the loopAnimation function can work
    this.setState( {breathState: newBreathState} )
    
    // get the html-element for the inner circle
    let element = document.getElementById("circle-inner");
    
    // remove all the animation classes
    element.classList.remove("animate-inner-circle-inhale");
    element.classList.remove("animate-inner-circle-exhale"); 
    
    if(newBreathState == BREATHSTATE_EXHALE) {
      //add the class to trigger exhale animation      
      element.classList.add("animate-inner-circle-exhale");
    }
    else if (newBreathState == BREATHSTATE_INHALE) {
      // add the class to trigger inhale animation      
      element.classList.add("animate-inner-circle-inhale");
    }
    
    // trigger a reflow! necessary. this won't work in strict mode.
    void element.offsetWidth;
  }
  
  loopAnimation(e) {
    
    // catch the 'animationend' event
    e.preventDefault;

    // if appState is 'PREPARING', 'STOP_PREPARING', 'STOP_SESSION' or 'FINISHED': 
    // only inhale one last time and then stop the animation
    if(this.props.appState == APPSTATE_PREPARING || 
       this.props.appState == APPSTATE_STOP_PREPARING || 
       this.props.appState == APPSTATE_STOP_SESSION ||
       this.props.appState == APPSTATE_FINISHED) {

         if(this.state.breathState == BREATHSTATE_EXHALE) {           
           this.setAnimation(BREATHSTATE_INHALE)           
         }
    }

    // if appState is something different (SETUP or SESSION), 
    // then loop the animation by switching between inhaling and exhaling
    else {
      if(this.state.breathState == BREATHSTATE_INHALE) {

        this.setAnimation(BREATHSTATE_EXHALE)        
        
      } else {
        
        this.setAnimation(BREATHSTATE_INHALE)
                 
      }
    } 
  }
    
  updateAnimation() {
    
    switch(this.props.appState) {
      // in setup, always begin with an exhale.
      case APPSTATE_SETUP: this.setAnimation(BREATHSTATE_EXHALE)
        break;
      // when preparing a new session, always inhale and then wait. function "loopAnimation" takes care of the rest.
      case APPSTATE_PREPARING: this.setAnimation(BREATHSTATE_INHALE)  
        break;
      // when starting or resuming a session, always begin with an exhale.
      case APPSTATE_SESSION: this.setAnimation(BREATHSTATE_EXHALE)
        break;      
    }   
  }
  
  updateCircle() {
    // the movement of the circle animation must be adapted to the viewport size. 
    // this function takes care of this adaptation. it is called when the window resizes (see addEventListener())
    // or when the appState changes.
    
    // get the viewport dimensions
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        
    this.setState({
      // calculate new minimum size of the inner circle depending to the app state and viewport dimensions
      innerCircleMinSize: (CIRCLE_STATES[this.props.appState].circleBaseScale + 0.9 
              * (0.97-CIRCLE_STATES[this.props.appState].circleBaseScale) * Math.tanh((vw-350)/vh)),
      
      // calculate new maximum size of the inner circle depending to the app state and viewport dimensions
      innerCircleMaxSize: (0.92 + 0.9 * (0.97-0.92) * Math.tanh(((Math.max(vw,350)-350)/vh))),
      
      // set the opacity of the circle according to the app state
      circleOpacityOffset: CIRCLE_STATES[this.props.appState].circleOpacityOffset,
      
      // set the Y-Move scale of the circle according to the app state
      innerCircleYMove: CIRCLE_STATES[this.props.appState].circleYMove
    
    })    
  }
  
  addEventListeners() {
    
      // event listener to detect when a animation has ended and needs to be restarted in the loopAnimation function
      let element = document.getElementById("circle-inner");
      element.addEventListener("animationend", this.loopAnimation, false);
    
      // event listener for window resize, necessary to update the circle animation
      window.addEventListener('resize', this.updateCircle, false);
  }
    
  componentDidMount() {
    // add event listeners during initialisation
    this.addEventListeners()
    
    // update the Animation during initialisation
    this.updateAnimation()
    this.updateCircle()
  }
  
  componentDidUpdate(prevProps) {
  // update the animation and the circle size when the appState changes
  // (this needs to be in a condition statement to prevent infinite loops!)
    if ( this.props.appState !== prevProps.appState ) {
      this.updateAnimation()
      this.updateCircle()
    }
  }
  
  render() {
    return (  
        <div className="Animation trans" id="Animation">
          
        {/* these css variables define the appearance and movement of the inner circle animation. 
        this code injects the local state of the animation com into the stylesheet*/}
        <style>
          {`
            :root {
              --innerCircleMinSize: ${this.state.innerCircleMinSize};
              --innerCircleMaxSize: ${this.state.innerCircleMaxSize};
              --innerCircleYMove: ${this.state.innerCircleYMove};
              --circleOpacityOffset: ${this.state.circleOpacityOffset};
              }
            `}
        </style>
        
          <h2 className="hide">Animation</h2>
          
          <div className="animation-circle">            
            
            <div className="circle circle-outer" id="circle-outer"></div>
            <div className="circle circle-inner animate-inner-circle-exhale" id="circle-inner"></div>            
            <Instruction appState={this.props.appState} breathState={this.props.breathState} inhaleRatio={this.props.inhaleRatio}/>
          </div>
        </div>
    )
  }
}

class Instruction extends React.Component {
// the Instruction component handles the text instructions given to the user during the session,
// depending on appState and breathState it receives as a prop.
  constructor(props) {
    super(props);
    this.state = { fadeDuration: 0,
                   instruction: ''} // this sets the instruction text that is printed out. 
                                    // the updateInstruction() function will get the text
                                    //  from const INSTRUCTION_STATES defined above.
  }
  
  updateInstruction() {
    let element = document.getElementById("pInstruction");
    
   // calculate the duration of the fade-effect on the instruction text and save it to state
   this.setState({fadeDuration: (Math.min(this.props.inhaleRatio, 1-this.props.inhaleRatio) * 60000 * 0.025)})
    
    // fade out current instruction
    element.classList.add("fade-instruction");
    
    // wait for it to disappear
    setTimeout(() => { 
      
      element.classList.remove("pInstruction-trans-inhale"); 
      element.classList.remove("pInstruction-trans-exhale"); 
      
      // if we're not in session ...
      if(this.props.appState != APPSTATE_SESSION) {        
        // ... update the instruction text depending only on the current app state
        this.setState(state => ({instruction: INSTRUCTION_STATES[this.props.appState]}));
      } // but if we are in session
      else {
        // ... update the instruction text depending on the current app state AND the breath state
        this.setState(state => ({instruction: INSTRUCTION_STATES[this.props.appState][this.props.breathState]}));            
        
        // ... and update the instruction animation,
        if(this.props.breathState==BREATHSTATE_INHALE) element.classList.add("pInstruction-trans-inhale"); 
        else if(this.props.breathState==BREATHSTATE_EXHALE) element.classList.add("pInstruction-trans-exhale"); 
      }
      
      // and let's fade it in again
      element.classList.remove("fade-instruction");    

      
    }, this.state.fadeDuration);
  }
  
  componentDidMount() {
    // update the instruction during initialisation
    this.updateInstruction()
  }
  
  componentDidUpdate(prevProps) {
  // update the instruction when the appState or breathState changes
  // (this needs to be in a condition statement to prevent infinite loops!)
    if (this.props.appState !== prevProps.appState || this.props.breathState !== prevProps.breathState ) {
      this.updateInstruction()
    }
  }
  
  render() {
    return (  

        <div className="Instruction collapsed trans" id="Instruction">
           <style>
              {`
            :root {
              --fadeDurationInstruction: ${this.state.fadeDuration};
              }
            `}
          </style>  
          <p className="pInstruction pInstruction-trans-inhale" id="pInstruction"><em>{this.state.instruction}</em></p>
        </div>
    )
  }
}

const Footer = (props) => {
  // just a stateless function to render the footer
  return(
    <div className="Footer" id="Footer">
      <button className="pFooter buttonNoBorder buttonFooter trans-quick" onClick={props.handleClick}>Impressum – Legal Notice</button>
    </div>
    )
}

const Impressum = (props) => {
  // just a stateless function to render the "Impressum" / legal stuff necessary on German websites
  return(
    <div className="Impressum center-maxwidth trans" id="Impressum">
      <button className="button buttonMoreSettings buttonGoBack trans-quick" onClick={props.handleClick}>Go back</button>
      
      <div className="ImpressumGerman pImpressum">
        
        <p>The following legal information (Impressum) is required under German law. You can find a shortened <a href="#ImpressumEnglish">English version</a> below.</p>
        
        <h2>Impressum</h2>
          <p>Angaben gemäß § 5 TMG</p>
          <p>Georg Feitscher<br/> 
            Talstraße 24a<br/> 
            79102 Freiburg im Breisgau</p>
      
          <p><strong>Kontakt:</strong></p>
          <p>Telefon: 0176 49338341<br/>
          E-Mail: breazance[at]gmail.com</p>
        
          <p><strong>Haftungsausschluss: </strong></p>
          
        <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
        <p><strong>Haftung für Links</strong></p>
<p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
        <p><strong>Urheberrecht</strong></p>
<p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
        <p><strong>Datenschutz</strong></p>
<p>Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.</p>
<p>Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>
      <p>Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.</p>
        {/*<p><strong>Google Analytics</strong></p>
<p>Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. (''Google''). Google Analytics verwendet sog. ''Cookies'', Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglicht. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website (einschließlich Ihrer IP-Adresse) wird an einen Server von Google in den USA übertragen und dort gespeichert. Google wird diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten für die Websitebetreiber zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von Google verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten der Google in Verbindung bringen. Sie können die Installation der Cookies durch eine entsprechende Einstellung Ihrer Browser Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website voll umfänglich nutzen können. Durch die Nutzung dieser Website erklären Sie sich mit der Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden.</p>
        <p><strong>Google AdSense</strong></p>
<p>Diese Website benutzt Google Adsense, einen Webanzeigendienst der Google Inc., USA (''Google''). Google Adsense verwendet sog. ''Cookies'' (Textdateien), die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglicht. Google Adsense verwendet auch sog. ''Web Beacons'' (kleine unsichtbare Grafiken) zur Sammlung von Informationen. Durch die Verwendung des Web Beacons können einfache Aktionen wie der Besucherverkehr auf der Webseite aufgezeichnet und gesammelt werden. Die durch den Cookie und/oder Web Beacon erzeugten Informationen über Ihre Benutzung dieser Website (einschließlich Ihrer IP-Adresse) werden an einen Server von Google in den USA übertragen und dort gespeichert. Google wird diese Informationen benutzen, um Ihre Nutzung der Website im Hinblick auf die Anzeigen auszuwerten, um Reports über die Websiteaktivitäten und Anzeigen für die Websitebetreiber zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von Google verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten der Google in Verbindung bringen. Das Speichern von Cookies auf Ihrer Festplatte und die Anzeige von Web Beacons können Sie verhindern, indem Sie in Ihren Browser-Einstellungen ''keine Cookies akzeptieren'' wählen (Im MS Internet-Explorer unter ''Extras > Internetoptionen > Datenschutz > Einstellung''; im Firefox unter ''Extras > Einstellungen > Datenschutz > Cookies''); wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website voll umfänglich nutzen können. Durch die Nutzung dieser Website erklären Sie sich mit der Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden.</p>*/}
        <p>(Impressum vom <a href="https://www.impressum-generator.de">Impressum Generator</a> der <a href="https://www.kanzlei-hasselbach.de/">Kanzlei Hasselbach, Rechtsanwälte für Arbeitsrecht und Familienrecht</a>)</p>
      </div>  
 
      <div className="pImpressum" id="ImpressumEnglish">
        <h2>Legal Notice</h2>
      
        <h3>Legal responsibility for this website</h3>
          <p>Breazance is a service offered by:</p>
          <p>Georg Feitscher<br/>
            Talstrasse 24a, 79102 Freiburg im Breisgau, Germany<br/>
            breazance[at]gmail.com</p>
    
        <h3>Online Dispute Resolution website of the EU Commission</h3>

          <p>In order for consumers and traders to resolve a dispute out-of-court, the European Commission developed the Online Dispute Resolution Website: <a href="https://ec.europa.eu/consumers/odr" target="_blank">www.ec.europa.eu/consumers/odr</a></p>

        <h3>Legal disclaimer</h3>

          <p>The contents of these pages were prepared with utmost care. Nonetheless, we cannot assume liability for the timeless accuracy and completeness of the information.</p>

          <p>Our website contains links to external websites. As the contents of these third-party websites are beyond our control, we cannot accept liability for them. Responsibility for the contents of the linked pages is always held by the provider or operator of the pages.</p>
      
          <p>(English diclaimer by <a href="https://language-boutique.de/" target="_blank">Language-Boutique.de</a>)</p>
      </div>
      
      
    </div>
    )
}


console.log(Date());
ReactDOM.render(<Breazance />, document.getElementById("app"));
