import React from "react";

export default class AutoCmplText extends React.Component{
    constructor (props){
        super(props);
        this.items = [
            'mayur',
            'arnav',
            'pradnya',
            'rahul',
            'dnyanu',
        ];
    }
    render(){
        return(
            <div>
                <input type="text"/>
                <ul>
        {this.items.map((item) => <li>{item}</li>)}
                </ul>
            </div>
        )
    }
}