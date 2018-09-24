import "./results.css";
export function populateTodayTabs(todayObject) {
    resetContainers();

    const eventSection = document.querySelector("#tih-event");
    const birthSectoion = document.querySelector("#tih-birth");
    const deathSectoion = document.querySelector("#tih-death");

    todayObject.data.Events.map(histEvent => {
        eventContainer.appendChild(rowBuilder(histEvent));
    });
    todayObject.data.Births.map(histEvent => {
        eventContainer.appendChild(rowBuilder(histEvent));
    });
    todayObject.data.Deaths.map(histEvent => {
        eventContainer.appendChild(rowBuilder(histEvent));
    });
}

function resetContainers() {
    if (document.querySelector("#tih-tab-container")) {
        document.querySelector("#tih-event").innerHTML = "";
        document.querySelector("#tih-birth").innerHTML = "";
        document.querySelector("#tih-death").innerHTML = "";
    } else {
        const tabContainer = document.createElement("div");
        tabContainer.id = "tih-tab-container";

        const sectionContainer = document.createElement("div");
        sectionContainer.id = "tih-section-container";

        sectionBuilder("event", tabContainer, sectionContainer);
        sectionBuilder("birth", tabContainer, sectionContainer);
        sectionBuilder("death", tabContainer, sectionContainer);

        document.querySelector("#tih-result").appendChild(tabContainer);
        document.querySelector("#tih-result").appendChild(sectionContainer);
    }
}

function sectionBuilder(className, tabContainer, sectionContainer) {
    const tabItem = document.createElement("div");
    tabItem.classList.add("tab-item", className);
    tabItem.innerText = className;
    tabContainer.appendChild(tabItem);
    tabItem.addEventListener("click", e => {
        console.log(e.currentTarget.classList);
    });

    const newSection = document.createElement("section");
    newSection.id = `tih-${className}`;
    sectionContainer.appendChild(newSection);
    console.log(sectionContainer);
}

function rowBuilder(event) {
    const newRow = document.createElement("div");
    newRow.classList.add("result-row");

    const headline = document.createElement("div");
    headline.innerText = event.text;
    headline.classList.add("headline");
    newRow.appendChild(headline);
    return newRow;
}
