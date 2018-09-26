import "../style.css";
import React from "react";
import DateSubmit from "./dateInput";
import ResultContainer from "./todayResults/todayResultsBuilder";
import getTodayInHistory from "./todayInHistoryFetcher.js";

export default class TodayInHistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            histEvents: {
                All: [],
                Events: [],
                Deaths: [],
                Births: []
            },
            loaded: false
        };
    }
    buildAllEvents(newState) {
        let allEvents = Object.values(newState).flat();
        console.log(allEvents[0]);
        allEvents.sort((a, b) => {
            return a.year - b.year;
        });
        return allEvents;
    }
    populateRows() {
        this.state.histEvents = getTodayInHistory().then(histEvents => {
            const newState = histEvents.data;
            newState.All = this.buildAllEvents(newState);
            this.setState({ histEvents: newState, loaded: true });
        });
    }
    render() {
        return (
            <div id="tih-container">
                <DateSubmit onClick={() => this.populateRows()} />
                <ResultContainer histEvents={this.state.histEvents} loaded={this.state.loaded}/>
            </div>
        );
    }
}
//<ResultContainer />
import dateInput from "./dateInput.js";

// export default () => {
//     //let TIHcontrolContainer = document.createElement("div");
//     //let resultsContainer = document.createElement("div");

//     resultsContainer.id = "tih-result";

//     //TIHcontrolContainer.classList.add("tih-container");
//     //TIHcontrolContainer.appendChild(dateInput());
//     //TIHcontrolContainer.appendChild(resultsContainer);

//     //document.querySelector("body").appendChild(TIHcontrolContainer);

//     return (

//     )

// };
