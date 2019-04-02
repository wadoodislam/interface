const baseUrl = 'http://127.0.0.1:8000/';
const apiUrl = `${baseUrl}api/`;


export default {
    baseUrl: baseUrl,
    apiUrl: apiUrl,
    loginUrl: `${apiUrl}login/`,
    userUrl: `${apiUrl}user/`,
    ticketUrl: `${apiUrl}tickets/`,
    announcementUrl: `${apiUrl}announcements/`,
    consumptionUrl: `${apiUrl}consumptions/`,
    predictionUrl: `${apiUrl}consumptions/predictions`,
    chargeUrl: `${apiUrl}charge/`,
};