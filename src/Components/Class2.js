import React, { Component } from 'react';



export class  Ajax2 extends Component{
    constructor(props){
        super(props)
        this.state={
            info2:[]
            
        }
    }

    async componentDidMount(){
        const url="https://jsonplaceholder.typicode.com/posts"
        const res=await fetch(url)
        const data= await res.json()
        this.setState({info2:data})
    }

    
    console.log(this.state.info)
    

    render(){
        const TableStyle={
            position:'absolute',
            background: 'rgb(46,43,91)',
            background: 'linear-gradient(90deg, rgba(46,43,91,1) 0%, rgba(208,156,97,1) 0%, rgba(0,212,255,1) 100%)',
            left:'40%',
            top:'10%',
        }

        
        
        return(
            
            <div>
               {this.state.info2.map((data)=>
                <li>{data.id}</li>
               )}
            </div>
            
            
        )
        
    }
}

export default Ajax2