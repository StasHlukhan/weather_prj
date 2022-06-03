function get(url) {
    return fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers
    }).then(resp => resp.json());
}

function post(url, data) {
    return fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers,
        body: JSON.stringify({ data: data, value: 22 })
    }).then(resp => resp.json());
}

export const headers = {
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers': 'X-PINGOTHER, Content-Type',
    'Access-Control-Allow-Origin': "*",
    'Access-Control-Allow-Credentials': true,
    mode: 'cors'
};

export function getWeatherByCity(city = '') {
    return get(`http://localhost:8080/getWeather/${city}`)

}

export function postData(data) {
    console.log(data)
    return post(`http://localhost:8080/file`, data)
}