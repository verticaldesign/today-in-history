export function populateTodayTabs(todayObject) {}

function createContainers() {
    if (document.querySelector("#tih-tab-container")) {
        //document.querySelector('#tih-tab-container').innerHTML = ''
        document.querySelector("#tih-events").innerHTML = "";
        document.querySelector("#tih-births").innerHTML = "";
        document.querySelector("#tih-deaths").innerHTML = "";
    } else {
        const tabContainer = document.createElement("div");
        tabContainer.id = "tih-tab-container";

        const eventContainer = document.createElement("div");
        eventContainer.classList.add("event-container event");
        tabContainer.appendChild(eventContainer);

        const birthContainer = document.createElement("div");
        eventContainer.classList.add("event-container birth");
        tabContainer.appendChild(birthContainer);

        const deathContainer = document.createElement("div");
        eventContainer.classList.add("event-container death");
        tabContainer.appendChild(deathContainer);

        document.querySelector("#tih-result").appendChild(tabContainer);
    }
}
