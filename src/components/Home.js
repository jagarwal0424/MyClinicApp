import * as React from 'react';
import AddPatient from "./AddPatient";
import GetPatient from "./GetPatient";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addPatientClicked: false,
            getPatientClicked: false
        };
        this.handleSubmitAdd = this.handleSubmitAdd.bind(this);
        this.handleSubmitGet = this.handleSubmitGet.bind(this);
    }
    handleSubmitAdd(e) {
        e.preventDefault();
        this.setState({addPatientClicked: true, getPatientClicked: false});
        console.log("Add Patient " + this.state.addPatientClicked + " " + this.state.getPatientClicked);
    }
    handleSubmitGet(e) {
        e.preventDefault();
        this.setState({addPatientClicked: false, getPatientClicked: true});
        console.log("Get Patient " + this.state.addPatientClicked + " " + this.state.getPatientClicked);
    }
    render() {
        return (
            <div>
                <div style={{backgroundColor: "#9ddde1"}}>
                    <button className="btn" onClick={this.handleSubmitAdd}>Add Patient</button>
                    <button className="btn" onClick={this.handleSubmitGet}>Get Patient</button>
                </div>
                <AddPatient addPatientClicked = {this.state.addPatientClicked}/>
                <GetPatient getPatientClicked = {this.state.getPatientClicked}/>
            </div>
        )
    }
}

export default Home