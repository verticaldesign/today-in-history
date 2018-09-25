import "../style.css";
import dateInput from "./dateInput.js";

export default () => {
    let TIHcontrolContainer = document.createElement("div");
    let resultsContainer = document.createElement("div");

    resultsContainer.id = "tih-result";

    TIHcontrolContainer.classList.add("tih-container");
    TIHcontrolContainer.appendChild(dateInput());
    TIHcontrolContainer.appendChild(resultsContainer);

    document.querySelector("body").appendChild(TIHcontrolContainer);
};
