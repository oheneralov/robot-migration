/*
* Copyright © 2016 by Oleksandr Generalov
* All rights reserved.
*/

import React, { Component } from 'react';
import Parrot from './Parrot.js';
import Parrot3d from './Parrot3d.js';
import CommandPanel from './CommandPanel.js';

class Parser extends Component {
  constructor(props) {
  super(props);

    this.state =  {
		code: `
Parrot1->flyForward(10);
`, 
	    elapsedTime: "00:00:00.000",
		Parrot1 : null
	};
  }
  
  handleChange(event) {
	console.log("handleChange");
    this.setState({code: event.target.value});
		console.log(this.state.code);
  }
  
  componentDidMount(){
	  //global variable
	  var ParrotType = this.props.type;
	  if (this.props.type == "parrot2d"){
		  this.setState({Parrot1 : new Parrot("#" + ParrotType)});
	  }
	  else {
		  this.setState({Parrot1 : new Parrot3d(ParrotType)})
	  }
	  
  }
  
  repeatParrotLife(startDate){
	  var interptetedCode = this.convertC2JS(this.state.code);
	  var Parrot1 = this.state.Parrot1;
	  if (interptetedCode){
	      eval(interptetedCode);
	      this.state.Parrot1.lifeduration++;
	  }
	  else {
		  console.log("Code is empty");
	  }
	  
	  var today = new Date();
	  var delta = today - startDate; //in milliseconds
	  this.setState({elapsedTime: this.msToTime(delta)});
  }
  
    convertC2JS(code){
	  var CSymbol = /->/g;
	  var result = code.replace(CSymbol, '.');
	  return result;
  }
  
  //Think about using Date.prototype.getHours(), getMinutes()
  msToTime(duration) {
		var milliseconds = parseInt((duration%1000))
			, seconds = parseInt((duration/1000)%60)
			, minutes = parseInt((duration/(1000*60))%60)
			, hours = parseInt((duration/(1000*60*60))%24);

		return this.addLeadingZero(hours) + ":" + this.addLeadingZero(minutes) + ":" + this.addLeadingZero(seconds) + "." + milliseconds;
	}

	addLeadingZero(number){
		return number > 10 ? number : "0" + number;
	}
 
	 startSimulation(event) {
	     console.log("Starting simulation");
	     var startDate = new Date();
	     this.state.Parrot1.restoreAllStates();
	     this.repeatParrotLife(startDate);
	     this.state.Parrot1.lifeid = setInterval(this.repeatParrotLife, 300, startDate);
    }
	
	stopSimulation(event) {
		clearInterval(this.state.Parrot1.lifeid);
		//$(".btn-success").attr("disabled", true);
    }
	
	rotateLeft(){
		this.state.Parrot1.rotateLeft();
	}
	
	rotateRight(){
		this.state.Parrot1.rotateRight();
	}
	
	rotateCameraUp(){
		this.state.Parrot1.rotateCameraUp();
	}
	
	rotateCameraDown(){
		this.state.Parrot1.rotateCameraDown();
	}
	
	zoomin(){
		this.state.Parrot1.zoomin();
	}
	
    zoomout(){
		this.state.Parrot1.zoomout();
	}
	
	rotateFloor(){
		this.state.Parrot1.rotateFloor();
	}
	
	
  render() {
	
    return (
      <div>
	  <div>{this.state.elapsedTime}</div>
        <form>
		  <p>
		      <div id = {this.props.type}>
			  </div>
		  </p>
		  <CommandPanel handleChange = {this.handleChange.bind(this)}  code = {this.state.code} type = {this.props.type} startSimulation = {this.startSimulation.bind(this)} stopSimulation = {this.stopSimulation.bind(this)}/>
        </form>
      </div>
    );
  }
}

export default Parser;
