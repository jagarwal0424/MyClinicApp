import * as React from 'react';

class GetPatient extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            dob: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    getPatientForm = () => {
        if (!this.props.getPatientClicked)
            return;
        return (
            <form className="form">
                <label className="label">
                    First Name
                    <input type="text" name="fname" className="text" value={this.state.fname} onChange={this.handleChange}/>
                </label>
                <ul/>
                <label className="label">
                    Last Name
                    <input type="text" name="lname" className="text" value={this.state.lname} onChange={this.handleChange}/>
                </label>
                <ul/>
                <label className="label">
                    DOB
                    <input type="date" name="dob" className="text" value={this.state.dob} style={{marginLeft:"48px"}} onChange={this.handleChange}/>
                </label>
                <ul/>
                <input type="submit" value="Submit" className="btn"/>
            </form>
        )
    };
    render() {
        return (
            <div>
                {this.getPatientForm()}
            </div>
        );
    }
}

export default GetPatient