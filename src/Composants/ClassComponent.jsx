import React from "react";
//constructeur: seulement fel classcomponent pas ds le comp fonctionnel
export default class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            val:"Hello val state1",
            obj:{
                valobj:10
            }

        }
    }
    

    render(){
        return (<>
    <h1>Class Component {this.props.name} </h1>
    <p>{this.state.val} & {this.state.val}</p>
    </>)
     }
}
