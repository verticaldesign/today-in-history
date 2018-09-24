import "../style.css";
import dateInput from "./dateInput.js";

export default () => {
    let TIHcontrolContainer = document.createElement("div");
    let resultsContainer = document.createElement("div");

    TIHcontrolContainer.appendChild(dateInput());
    resultsContainer.id = "tih-result";

    //TIHcontrolContainer.classList.add("tih-container");
    TIHcontrolContainer.appendChild(resultsContainer);

    document.querySelector("body").appendChild(TIHcontrolContainer);
};
