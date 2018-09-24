export default () => {
    const todayOption = document.createElement("button");
    const inputContainer = document.createElement("div");
    const searchInput = document.createElement("input");

    todayOption.innerHTML = "Today";

    searchInput.setAttribute("type", "date");
    searchInput.setAttribute("id", "dateInput");

    inputContainer.appendChild(todayOption);
    inputContainer.appendChild(searchInput);

    todayOption.addEventListener("click", e => {
        e.preventDefault();
        const today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        mm < 10 ? (mm = `0${mm}`) : "";
        dd < 10 ? (dd = `0${dd}`) : "";
        const yyyy = today.getFullYear();

        searchInput.value = `${yyyy}-${mm}-${dd}`;
    });

    return inputContainer;
};
