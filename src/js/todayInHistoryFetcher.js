export default date => {
    const searchDate = new Date(date);
    const dd = searchDate.getDate();
    const mm = searchDate.getMonth() + 1;
    //const URL = `http://history.muffinlabs.com/date/${mm}/${dd}`;
    const URL = `http://history.muffinlabs.com/date`;
    const proxyURL = `https://sheltered-bayou-48245.herokuapp.com/`;
    return fetch(proxyURL).then(res => res.json());
    // return fetch(URL, { mode: "cors" })
    //     .then(todayInHistory => {
    //         console.log(todayInHistory);
    //         todayInHistory.body;
    //     })
    //     .catch(console.error("Nothing Happened today"));

    const fetchDateInfo = () => {
        const url = `https://sheltered-bayou-48245.herokuapp.com/`;
        return fetch(url).then(res => res.json());
    };
};
