import React from "react";

export default class DateSubmit extends React.Component {
    render() {
        return (
            <div className="tih-input-container">
                <button onClick={this.props.onClick}>What is up Today</button>
            </div>
        );
    }
}
