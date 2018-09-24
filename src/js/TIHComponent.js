import "../style.css";
import dateInput from "./dateInput.js";

export default () => {
    let TIHcontrolContainer = document.createElement("div");
    let resultsContainer = document.createElement("div");

    TIHcontrolContainer.appendChild(dateInput());

    //TIHcontrolContainer.classList.add("tih-container");
    //TIHcontrolContainer.appendChild(resultsContainer);

    resultsContainer.id = "tih-result";

    document.querySelector("body").appendChild(TIHcontrolContainer);
};
