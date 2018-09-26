import React from "react";
import "./results.css";
import HitoryRow from "../historyRowBuilder";

export default class ResultContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            selectedTab: "all",
            sectionShowing: {
                all: "",
                events: "hidden",
                deaths: "hidden",
                births: "hidden"
            }
        };
        this.setSelectedTab = this.setSelectedTab.bind(this);
    }
    renderRows(arr) {
        let list = arr.map((row, index) => {
            return <HitoryRow value={row} key={index} />;
        });
        return list;
    }
    setSelectedTab(selectedTab) {
        if (this.props.loaded) {
            const newState = { ...this.state.sectionShowing };
            Object.entries(newState).forEach(([key, value]) => {
                newState[key] = "hidden";
            });

            newState[selectedTab] = "";
            this.setState(state => {
                return {
                    selectedTab: selectedTab,
                    sectionShowing: newState
                };
            });
        }
    }
    render() {
        return (
            <div id="tih-result">
                <div
                    id="tih-tab-container"
                    className={this.props.loaded ? "loaded" : "not-loaded"}
                >
                    <div
                        className={
                            this.state.selectedTab === "all"
                                ? "tab-item active"
                                : "tab-item"
                        }
                        onClick={() => this.setSelectedTab("all")}
                    >
                        All
                    </div>
                    <div
                        className={
                            this.state.selectedTab === "events"
                                ? "tab-item active"
                                : "tab-item"
                        }
                        onClick={() => this.setSelectedTab("events")}
                    >
                        Events
                    </div>
                    <div
                        className={
                            this.state.selectedTab === "births"
                                ? "tab-item active"
                                : "tab-item"
                        }
                        onClick={() => this.setSelectedTab("births")}
                    >
                        Births
                    </div>
                    <div
                        className={
                            this.state.selectedTab === "deaths"
                                ? "tab-item active"
                                : "tab-item"
                        }
                        onClick={() => this.setSelectedTab("deaths")}
                    >
                        Deaths
                    </div>
                </div>
                <div id="tih-section-container">
                    <section
                        id="tih-all"
                        className={this.state.sectionShowing.all}
                    >
                        {this.renderRows(this.props.histEvents.All)}
                    </section>
                    <section
                        id="tih-event"
                        className={this.state.sectionShowing.events}
                    >
                        {this.renderRows(this.props.histEvents.Events)}
                    </section>
                    <section
                        id="tih-birth"
                        className={this.state.sectionShowing.births}
                    >
                        {this.renderRows(this.props.histEvents.Births)}
                    </section>
                    <section
                        id="tih-death"
                        className={this.state.sectionShowing.deaths}
                    >
                        {this.renderRows(this.props.histEvents.Deaths)}
                    </section>
                </div>
            </div>
        );
    }
}
