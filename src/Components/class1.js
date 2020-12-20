import React, { Component } from 'react';

import '../App.css';

export class  Ajax1 extends Component{
    constructor(props){
        super(props)
        this.state={
            info:[],
            info2:[]
            
        }
    }

    async componentDidMount(){
        this.info1();
        this.info2();
    }
    async info1(){
        const url="https://jsonplaceholder.typicode.com/users"
        const res=await fetch(url)
        const data= await res.json()
        this.setState({info:data})
    }
    async info2(){
        const url="https://jsonplaceholder.typicode.com/posts"
        const res=await fetch(url)
        const data= await res.json()
        this.setState({info2:data})
    }

    

    

    render(){
        const TableStyle={
            position:'relative',
            background: 'rgb(46,43,91)',
            background: 'linear-gradient(90deg, rgba(46,43,91,1) 0%, rgba(208,156,97,1) 0%, rgba(0,212,255,1) 100%)',
            left:'40%',
            marginTop:'5%',
            marginBottom:'10%',
        }
        console.log(this.state.info2)
        
        
        return(
            
            <div>
               <table className="table1" style={TableStyle}> 
                <tr>
                <th>id</th>
                <th>name</th>
                <th>username</th>
                </tr>
        {this.state.info.map((data) =>
                <tr className="trow"> 
                <td> {data.id} </td> 
                <td> {data.name} </td>
                <td> {data.username} </td>
                                </tr>
                               ) }
                        </table>



                <table className="table2"> 
                <tr>
                <th>UserId</th>
                <th>Id</th>
                <th>Title</th>
                </tr>
        {this.state.info2.map((data) =>
                <tr className="trow"> 
                <td> {data.userId} </td> 
                <td> {data.id} </td>
                <td> {data.title} </td>
                                </tr>
                               ) }
                        </table>
            </div>
            
            
        )
        
    }
}

export default Ajax1