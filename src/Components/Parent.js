import React, { Component } from 'react'
import "./style.scss"
import ChildComponent from "./Child_comp"

export default class Parent extends Component {

    state={
        child_style:{
            color:"black"
        }
    }

    

    componentWillMount(){
        let child_style=this.state.child_style
        child_style["color"]="brown"
        this.setState({child_style:child_style},console.log(this.state))

    }

    componentDidMount(){
        setInterval(() => {
            let child_style=this.state.child_style
            child_style["color"]="yellow"
            this.setState({child_style:child_style},console.log(this.state))
        }, 2000);

    }

    componentDidUpdate(){

     
        console.log("componentDidUpdate executed")

    }


    render() {
        return (
            <div className="Parent">
                <h1>Parent </h1>
              
              


                <br />
                <input type="text" onChange={(e)=>{
                    let child_style=this.state.child_style
                    child_style["color"]=e.target.value
                    this.setState({child_style:child_style},console.log(this.state))
                }}  />

                <p>Current color: {this.state.child_style && this.state.child_style.color?this.state.child_style.color:""}</p>
                <br />

                
                <ChildComponent child_style={this.state.child_style}/>

               

            </div>
        )
    }
}