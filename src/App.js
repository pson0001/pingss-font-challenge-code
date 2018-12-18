import React, { Component } from 'react';
import './App.css';
import {Helmet} from "react-helmet";
import { Row, Col } from 'antd';


const API_KEY = 'AIzaSyAJNRET1i72IoEvCwsonTd6TevKHelOqBU';
const fontDict = {};

class App extends Component {
  state = {
    flipped: false,
    dict:fontDict,
  }

  componentDidMount(){
    fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}`)
    .then(res => res.json())
    .then(data => {
      let sansSerif = []
      let serif = []
      let monospace = []
      for(let i = 0 ; i< data.items.length; i++){
        if (data.items[i].category === "sans-serif"){
          sansSerif.push(data.items[i].family);
        }
        else if (data.items[i].category === "serif"){
          serif.push(data.items[i].family);
        }
        else if (data.items[i].category === "monospace"){
          monospace.push(data.items[i].family);
        }
      }
      fontDict['sans-serif'] = sansSerif;
      fontDict['serif'] = serif;
      fontDict['monospace'] = monospace;
    })
  }

  toggle = async(e) => {
    e.preventDefault();
    // Random pick font
    let sansSerifMax = this.state.dict['sans-serif'].length
    let sansSerifChooseFont = this.state.dict['sans-serif'][Math.round(Math.random() * sansSerifMax - 1, 0)]
    let serifMax = this.state.dict['serif'].length
    let serifChooseFont = this.state.dict['serif'][Math.round(Math.random() * serifMax - 1, 0)]
    let monospaceMax = this.state.dict['monospace'].length
    let monospaceChooseFont = this.state.dict['monospace'][Math.round(Math.random() * monospaceMax - 1, 0)]

    // Random pick color
    var colorLetters = '0123456789ABCDEF';
    var colory = '#';
    for (var i = 0; i < 6; i++ ) {
      colory += colorLetters[Math.floor(Math.random() * 16)];
    }

    this.setState({
      flipped: !this.state.flipped,
      sansSerifFont: sansSerifChooseFont,
      sansSerifFontUrl: "https://fonts.googleapis.com/css?family=" + sansSerifChooseFont,
      serifFont: serifChooseFont,
      serifFontUrl: "https://fonts.googleapis.com/css?family=" + serifChooseFont,
      monospaceFont: monospaceChooseFont,
      monospaceFontUrl: "https://fonts.googleapis.com/css?family=" + monospaceChooseFont,
      color: colory,
    });

  }



  letter(l){
    const titleString = l
    const titleList = titleString.split('')
    let cardClass = ["card"];
    if(this.state.flipped) {
      cardClass.push('flipped');
    }

    return(titleList.map((title) =>
    <div>
      <div className={cardClass.join(' ')}>
        <div className="front">{title}</div>
        <div className="back">{title}</div>
      </div>
    </div>
  ))
}

letterSlow(l){
  const titleString = l
  const titleList = titleString.split('')
  let cardClass = ["card-slow"];
  if(this.state.flipped) {
    cardClass.push('flipped');
  }

  return(titleList.map((title) =>
  <div>
    <div className={cardClass.join(' ')}>
      <div className="front">{title}</div>
      <div className="back">{title}</div>
    </div>
  </div>
))
}

render() {
  return(
    <div >
      <Helmet>
        <link href={this.state.sansSerifFontUrl} rel="stylesheet"></link>
        <link href={this.state.serifFontUrl} rel="stylesheet"></link>
        <link href={this.state.monospaceFontUrl} rel="stylesheet"></link>
      </Helmet>
      <div className="body-container">
        <button className='change-btn' style={{backgroundColor:this.state.color}} onClick={this.toggle.bind(this)}> Yes, Here </button>
        <Row>
          <Col xs={0} md={10} lg={12}>
            <div className='edu-container'>
              <div>
                <p className='sub-title' style={{fontFamily:this.state.serifFont}}>Education</p>
                <p className='sub-desc-title' style={{fontFamily:this.state.monospaceFont}}>Feb 2017 - Dec 2018:</p>
                <p className='sub-desc' style={{fontFamily:this.state.monospaceFont}}>Master of Information Technology</p>
                <p className='sub-desc' style={{fontFamily:this.state.monospaceFont}}>- Post Graduate Industry Experience Winner 2018</p>
                <p className='sub-desc' style={{fontFamily:this.state.monospaceFont}}>Monash University, Melbourne</p>

                <p className='sub-desc-title' style={{fontFamily:this.state.monospaceFont}}>Feb 2010 - Dec 2014:</p>
                <p className='sub-desc' style={{fontFamily:this.state.monospaceFont}}>Bachelor of Industrial Design</p>
                <p className='sub-desc' style={{fontFamily:this.state.monospaceFont}}>University of New South Wales, Sydney</p>
              </div>
            </div>
            <div className='emp-container'>
              <div>
                <p className='sub-title' style={{fontFamily:this.state.serifFont}}>Employment History</p>
                <p className='sub-desc-title' style={{fontFamily:this.state.monospaceFont}}>Jan 2015 - Dec 2017:</p>
                <p className='sub-desc' style={{fontFamily:this.state.monospaceFont}}>Position: Senior Branding Manager and Designer</p>
                <p className='sub-desc-title' style={{fontFamily:this.state.monospaceFont}}>Dec 2017 - Feb 2018:</p>
                <p className='sub-desc' style={{fontFamily:this.state.monospaceFont}}>Summer Research Scholarship (Monash University)</p>
              </div>
            </div>

          </Col>
          <Col xs={24} md={14} lg={12} style={{borderLeft: '1px solid #47525D'}}>
            <div class="circle"></div>
            <div className='self-intro container' style={{backgroundColor:this.state.color,fontFamily:this.state.sansSerifFont}}>
              {this.letter('HI!IAM  ')}
            </div>
            <div className='self-intro container' style={{backgroundColor:this.state.color,fontFamily:this.state.sansSerifFont}}>
              {this.letterSlow('PING    ')}
            </div>
            <div className='self-intro container' style={{backgroundColor:this.state.color,fontFamily:this.state.sansSerifFont}}>
              {this.letter('SONG,   ')}
            </div>
            <div className='self-intro container' style={{backgroundColor:this.state.color,fontFamily:this.state.sansSerifFont}}>
              {this.letterSlow('A       ')}
            </div>
            <div className='self-intro container' style={{backgroundColor:this.state.color,fontFamily:this.state.sansSerifFont}}>
              {this.letter('DESIGNER ')}
            </div>
            <div className='self-intro container' style={{backgroundColor:this.state.color,fontFamily:this.state.sansSerifFont}}>
              {this.letterSlow('WHO     ')}
            </div>
            <div className='self-intro container' style={{backgroundColor:this.state.color,fontFamily:this.state.sansSerifFont}}>
              {this.letter('DRAWS     ')}
            </div>
            <div className='self-intro container' style={{backgroundColor:this.state.color,fontFamily:this.state.sansSerifFont}}>
              {this.letterSlow('AND     ')}
            </div>
            <div className='self-intro container' style={{backgroundColor:this.state.color,fontFamily:this.state.sansSerifFont}}>
              {this.letter('CODES.    ')}
            </div>
            <div className='skill-container'>
              <div>
                <p className='sub-title' style={{fontFamily:this.state.serifFont}}>Skills Summary</p>
                <p className='sub-desc-title' style={{fontFamily:this.state.monospaceFont}}>Language:</p>
                <p className='sub-desc' style={{fontFamily:this.state.monospaceFont}}>Java, Python, JavaScript, HTML, CSS, SQL, REACT, D3.js, Swift, C#, C++, Linux Shell.</p>
                <p className='sub-desc-title' style={{fontFamily:this.state.monospaceFont}}>Design:</p>
                <p className='sub-desc' style={{fontFamily:this.state.monospaceFont}}>Photoshop, Illustrator, After Effect, Sketch, Principle</p>
              </div>
            </div>
            <div className='skill-container'>
              <div>
                <p className='sub-title' style={{fontFamily:this.state.serifFont}}>Highlight Projects</p>
                <p className='sub-desc-title' style={{fontFamily:this.state.monospaceFont}}>React Website Application</p>
                <p className='sub-desc' style={{fontFamily:this.state.monospaceFont}}>Design and determine the workflow and content of the website</p>
                <p className='sub-desc' style={{fontFamily:this.state.monospaceFont}}>Developing the core functions of the website using React</p>
                <p className='sub-desc' style={{fontFamily:this.state.monospaceFont}}>Working with unstructured data geospatial analysis in display</p>
                <p className='sub-desc-skill' style={{fontFamily:this.state.monospaceFont}}>Implemented skill : React.js, Node.js, REST API, HTML, CSS, MongeDB</p>

                <p className='sub-desc-title' style={{fontFamily:this.state.monospaceFont}}>Android Application</p>
                <p className='sub-desc' style={{fontFamily:this.state.monospaceFont}}>Assists Victorian residents with better energy management</p>
                <p className='sub-desc' style={{fontFamily:this.state.monospaceFont}}>Built backend of the system as RESTful web services (including a database) to enable querying and updating the electricity usage data.</p>
                <p className='sub-desc' style={{fontFamily:this.state.monospaceFont}}>Invoking web APIs to provide the weather information for the current location of the residences </p>
                <p className='sub-desc' style={{fontFamily:this.state.monospaceFont}}>Interactive interface design to view energy consumption reports delivering the user with multiple options.</p>
                <p className='sub-desc-skill' style={{fontFamily:this.state.monospaceFont}}>Implemented skill : Java, Database Design, Restful web service, Open-weather API, Google Map API, User Interface Design, HTML, CSS</p>

                <p className='sub-desc-title' style={{fontFamily:this.state.monospaceFont}}>Summer Research Scholarship</p>
                <p className='sub-desc' style={{fontFamily:this.state.monospaceFont}}>Autonomous drawing robot at SensiLab, Monash Uni</p>
                <p className='sub-desc' style={{fontFamily:this.state.monospaceFont}}>Programming the simulated habitat pattern paths for the robots using C++.</p>
                <p className='sub-desc' style={{fontFamily:this.state.monospaceFont}}>3D model design and 3D printing robot shells inline with the robots’ mechanical movements.</p>
                <p className='sub-desc' style={{fontFamily:this.state.monospaceFont}}>Optimise the algorithm to improve turning and rotation efficiency of the robot in order to add fluidity to the drawing motions that the robot makes.</p>
                <p className='sub-desc-skill' style={{fontFamily:this.state.monospaceFont}}>Implemented skill : Algorithm Design, C++, Graphic patterning, 3D modelling</p>

              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={24} md={0} lg={0} style={{borderLeft: '1px solid #47525D'}}>
            <div className='edu-container' style={{marginTop:'20vh'}}>
              <div>
                <p className='sub-title' style={{fontFamily:this.state.serifFont}}>Education</p>
                <p className='sub-desc-title' style={{fontFamily:this.state.monospaceFont}}>Feb 2017 - Dec 2018:</p>
                <p className='sub-desc' style={{fontFamily:this.state.monospaceFont}}>Master of Information Technology</p>
                <p className='sub-desc' style={{fontFamily:this.state.monospaceFont}}>- Post Graduate Industry Experience Winner 2018</p>
                <p className='sub-desc' style={{fontFamily:this.state.monospaceFont}}>Monash University, Melbourne</p>

                <p className='sub-desc-title' style={{fontFamily:this.state.monospaceFont}}>Feb 2010 - Dec 2014:</p>
                <p className='sub-desc' style={{fontFamily:this.state.monospaceFont}}>Bachelor of Industrial Design</p>
                <p className='sub-desc' style={{fontFamily:this.state.monospaceFont}}>University of New South Wales, Sydney</p>
              </div>
            </div>
            <div className='emp-container' style={{marginTop:'20vh'}}>
              <div>
                <p className='sub-title' style={{fontFamily:this.state.serifFont}}>Employment History</p>
                <p className='sub-desc-title' style={{fontFamily:this.state.monospaceFont}}>Jan 2015 - Dec 2017:</p>
                <p className='sub-desc' style={{fontFamily:this.state.monospaceFont}}>Position: Senior Branding Manager and Designer</p>
                <p className='sub-desc-title' style={{fontFamily:this.state.monospaceFont}}>Dec 2017 - Feb 2018:</p>
                <p className='sub-desc' style={{fontFamily:this.state.monospaceFont}}>Summer Research Scholarship (Monash University)</p>
              </div>
            </div>

          </Col>
        </Row>
      </div>

    </div>
  );
}
}

export default App;
