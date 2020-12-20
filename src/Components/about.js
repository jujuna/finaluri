import React, { Component } from 'react';

import '../App.css';


const about=["ვარ 21 წლის", "ვცხოვრობ  თბილისში", "ვსწავლობ BTU-ში" , "მომწონს ვებ პროგრამირება"]

export class About extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
        }
    }

    Plus=()=>{
       
        if(this.state.count<about.length-1)
           this.setState({count:this.state.count+1})
           console.log(this.state.count)
       }

   Minus=()=>{
    this.setState({count:this.state.count-1})
    console.log(this.state.count)
    }   
    


    render(){
        
        return(


            <div className="about">
                <button onClick={this.Plus} className="plus">+</button>

                <p>{about[this.state.count]}</p>

                <button onClick={this.Minus} className="minus">-</button>

            </div>
            )
    }
}

export default About