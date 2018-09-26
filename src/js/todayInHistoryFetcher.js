export default date => {
    const proxyURL = `https://sheltered-bayou-48245.herokuapp.com/`;
    return fetch(proxyURL).then(res => res.json());
};
