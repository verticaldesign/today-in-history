import { populateTodayTabs } from "./todayTabBuilder.js";
import getTodayInHistory from "./todayInHistoryFetcher.js";

import dateInput from "./dateInputWithTodayButton";

export default () => {
    const searchFormContainer = document.createElement("form");
    const searchButton = document.createElement("button");
    const dateSelector = dateInput();

    searchButton.innerHTML = "Learn Me Good";
    searchFormContainer.classList.add("tih-input-container");

    searchFormContainer.appendChild(dateSelector);
    searchFormContainer.appendChild(searchButton);

    searchFormContainer.addEventListener("submit", e => {
        e.preventDefault();
        let resultContainer = document.querySelector("#tih-result");
        let searchParameters = document.querySelector("#dateInput").value;

        //resultContainer.innerHTML = "";

        getTodayInHistory(searchParameters).then(todayInHistory => {
            console.log(todayInHistory);
            populateTodayTabs(todayInHistory);
        });
    });

    //console.log(searchContainer);
    return searchFormContainer;
};
