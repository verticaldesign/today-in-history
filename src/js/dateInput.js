// import { populateTodayTabs } from "./todayResults/todayResultsBuilder.js";
import getTodayInHistory from "./todayInHistoryFetcher.js";
import React from "react";

import dateInput from "./dateInputWithTodayButton";

export default class DateSubmit extends React.Component {
    render() {
        return (
            <div className="tih-input-container">
                <button onClick={this.props.onClick}>What is up Today</button>
            </div>
        );
    }
}

// const populateVals = events => {
//     events = getTodayInHistory().then(data => console.log(data));
// };

//     const searchFormContainer = document.createElement("form");
//     const searchButton = document.createElement("button");
//     const dateSelector = dateInput();

//     searchButton.innerHTML = "What happened?";
//     searchFormContainer.classList.add("tih-input-container");

//     searchFormContainer.appendChild(dateSelector);
//     searchFormContainer.appendChild(searchButton);

//     searchFormContainer.addEventListener("submit", e => {
//         e.preventDefault();
//         let resultContainer = document.querySelector("#tih-result");
//         let searchParameters = document.querySelector("#dateInput").value;

//         //resultContainer.innerHTML = "";

//         getTodayInHistory(searchParameters).then(todayInHistory => {
//             console.log(todayInHistory);
//             populateTodayTabs(todayInHistory);
//         });
//     });

//     //console.log(searchContainer);
//     return searchFormContainer;
// };
