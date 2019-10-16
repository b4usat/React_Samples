import React, { Component } from 'react';

class SimpleForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullName: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
    }

    handleSubmitForm(event) {
        alert("Full Name: " + this.state.fullName);
        event.preventDefault();
    }

    handleChange(event) {
        var value = event.target.value;
        this.setState({
            fullName: value
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmitForm} className="form-horizontal" >
                <div className="form-group form-inline col-sm-12 p-3">
                    <label lassName="form-controcontrol-label col-m-10">
                        Full Name:
                    </label>
                    
                    <input className="form-control mx-3 " type="text" placeholder="Enter name" value={this.state.fullName} onChange={this.handleChange} />
                    </div>
                <div className="form-group p-3">
                    <input type="submit" value="Submit" className="btn btn-primary" />
                </div>
               <p className="form-control-static p-3 mx-5"> {` You entered: ${this.state.fullName}`}</p>
            </form>
        );
    }
}

export default SimpleForm
