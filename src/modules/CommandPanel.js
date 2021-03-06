import React, { Component } from 'react';

class  CommandPanel extends Component{
        constructor(props){
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.startSimulation = this.startSimulation.bind(this);
            this.stopSimulation = this.stopSimulation.bind(this);
        }
         
        handleChange(){
            this.props.onChange();
        }

       startSimulation(){
           this.props.startSimulation();
       }

       stopSimulation(){
           this.props.stopSimulation();
       }


	render(){
		var codeArea = <p><p></p><p></p><p></p><p></p><p></p><textarea className='code-input' onChange={this.handleChange}  rows="4" cols="50">{this.props.code}</textarea></p>
		
		if (this.props.type == "parrot3d")
		{
			codeArea = <input type = "text" className='code-input' onChange={this.handleChange} value = {this.props.code} />
		}
		

		return (
		    <div>
		        <div>
		            Code:
		        </div>
			    {codeArea}
		        <div>
		            <button type="button" className="btn btn-primary" onClick={this.startSimulation}>Start simulation</button>
		            <button type="button" className="btn btn-success" onClick={this.stopSimulation}>Stop simulation</button>
		        </div>
				<div>
		            Supported commands:
		            <ol>
		                <li>Parrot1-&gt;flyForward(10);</li>
			            <li>Parrot1-&gt;turnLeft(10);</li>
			            <li>Parrot1-&gt;turnRight(10);</li>
			            <li>Parrot1-&gt;jump(10);</li>
		             </ol>
		         </div>
            </div>	
		 )
	};
}

export default CommandPanel;
