import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-1">
                        <span style={{fontSize: "20px"}} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                    </div>
                    <div className="col-md-4">
                        <button style={{marginLeft: "20px", fontSize: "15px", fontWeight: "bold"}} onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-success btn-sm">+</button>
                        <button style={{marginLeft: "10px", fontSize: "15px", fontWeight: "bold"}} onClick={() => this.props.onDecrement(this.props.counter)} disabled={this.props.counter.value === 0 ? "disabled" : ""} className="btn btn-primary btn-sm">-</button>
                        <button style={{fontSize: "15px", fontWeight: "bold"}} onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
                    </div>
                </div>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? "Zero" : value;
    }

}
 
export default Counter;