import React from "react";

export default class RowBuilder extends React.Component {
    constructor(props) {
        super(props);
    }
    renderTags() {
        let listofTags = this.props.value.links.map((tag, index) => {
            return <Tag value={tag} key={index} />;
        });
        return listofTags;
    }
    render() {
        return (
            <div className="result-row">
                <div className="year-tag">{this.props.value.year}</div>
                <div className="right-content">
                    <div className="headline">{this.props.value.text}</div>
                    <div className="tag-container">{this.renderTags()}</div>
                </div>
            </div>
        );
    }
}

class Tag extends React.Component {
    render() {
        return <span className="tag">{this.props.value.title}</span>;
    }
}
