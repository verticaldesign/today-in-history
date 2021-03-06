import "./results.css";
export function populateTodayTabs(todayObject) {
    resetContainers();

    const eventSection = document.querySelector("#tih-event");
    const birthSection = document.querySelector("#tih-birth");
    const deathSection = document.querySelector("#tih-death");
    const allSection = document.querySelector("#tih-all");

    let allEvents = Object.values(todayObject.data).flat();
    console.log(allEvents[0]);
    allEvents.sort((a, b) => {
        return a.year - b.year;
    });

    todayObject.data.Events.map(histEvent => {
        eventSection.appendChild(rowBuilder(histEvent));
    });
    todayObject.data.Births.map(histEvent => {
        birthSection.appendChild(rowBuilder(histEvent));
    });
    todayObject.data.Deaths.map(histEvent => {
        deathSection.appendChild(rowBuilder(histEvent));
    });
    allEvents.map(histEvent => {
        allSection.appendChild(rowBuilder(histEvent));
    });
    selectedSection(document.querySelector("#tih-all"));
}

function resetContainers() {
    if (document.querySelector("#tih-tab-container")) {
        document.querySelector("#tih-event").innerHTML = "";
        document.querySelector("#tih-birth").innerHTML = "";
        document.querySelector("#tih-death").innerHTML = "";
        document.querySelector("#tih-all").innerHTML = "";
    } else {
        const tabContainer = document.createElement("div");
        tabContainer.id = "tih-tab-container";

        const sectionContainer = document.createElement("div");
        sectionContainer.id = "tih-section-container";

        sectionBuilder("all", tabContainer, sectionContainer);
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
    className === "all" ? tabItem.classList.add("active") : "";
    tabItem.addEventListener("click", e => {
        const el = e.currentTarget;
        const tabs = document.querySelectorAll(".tab-item");
        tabs.forEach(tab => tab.classList.remove("active"));
        el.classList.add("active");

        const listOfClasses = e.currentTarget.classList;
        // const selectedSection = "";
        listOfClasses.contains("event")
            ? selectedSection(document.querySelector("#tih-event"))
            : "";
        listOfClasses.contains("birth")
            ? selectedSection(document.querySelector("#tih-birth"))
            : "";
        listOfClasses.contains("death")
            ? selectedSection(document.querySelector("#tih-death"))
            : "";
        listOfClasses.contains("all")
            ? selectedSection(document.querySelector("#tih-all"))
            : "";
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

    const yearTag = document.createElement("div");
    yearTag.innerText = event.year;
    yearTag.classList.add("year-tag");
    newRow.appendChild(yearTag);

    const tags = document.createElement("div");
    tags.classList.add("tag-container");
    tags.innerText = "Tags: ";
    event.links.map(tag => {
        const newTag = document.createElement("span");
        newTag.innerText = tag.title;
        newTag.classList.add("tag");
        tags.appendChild(newTag);
    });
    newRow.appendChild(tags);

    return newRow;
}
function selectedSection(section) {
    const eventSection = document.querySelector("#tih-event");
    const deathSection = document.querySelector("#tih-death");
    const birthSection = document.querySelector("#tih-birth");
    const allSection = document.querySelector("#tih-all");

    // if (section === "all") {
    //     eventSection.classList.remove("hidden");
    //     birthSection.classList.remove("hidden");
    //     deathSection.classList.remove("hidden");
    // } else {
    eventSection.classList.add("hidden");
    birthSection.classList.add("hidden");
    deathSection.classList.add("hidden");
    allSection.classList.add("hidden");

    section.classList.remove("hidden");
    //}
}
