//import { populateRepoList } from "./populateRepoList.js";
//import dataFetch from "./dataFetcher.js";

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
        let resultContainer = document.querySelector("#resultDiv");
        let searchParameters = document.querySelector("#searchInput").value;

        resultContainer.innerHTML = "";
        dataFetch(searchParameters).then(repoList => {
            resultContainer.appendChild(populateRepoList(repoList));
        });
    });

    //console.log(searchContainer);
    return searchFormContainer;
};
