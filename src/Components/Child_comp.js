import React, { Component } from 'react'

export default class Child_comp extends Component {
    
    render() {

        console.log(this.props,this.props.child_style.color)

        return (
            <div className="Child_comp" style={{backgroundColor:this.props.child_style.color}}>

                
            </div>
        )
    }
}