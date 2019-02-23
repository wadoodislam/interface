export const postRequest = (url, data, auth=false) => {
    const options = {
        body: JSON.stringify(data),
        method: "post",
        headers: auth? {
            "Authorization": "Token " + localStorage.getItem('token'),
            "Content-Type": "application/json"
        } : {
            "Content-Type": "application/json"
        }
    };

    return fetch(url, options).then((response) => response.json());
};


export const getRequest = (url, auth=false) => {
    const options = {
        method: "get",
        headers: auth? {
            "Authorization": "Token " + localStorage.getItem('token'),
            "Content-Type": "application/json"
        } : {
            "Content-Type": "application/json"
        }
    };

    return fetch(url, options).then((response) => response.json());
};