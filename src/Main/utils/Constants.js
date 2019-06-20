const baseUrl = 'http://127.0.0.1:8000/';
const apiUrl = `${baseUrl}api/`;


export const DashboardConstants = {
    CLOSE_CHAT: "CLOSE_CHAT",
    OPEN_CHAT: "OPEN_CHAT"
};

export default {
    baseUrl: baseUrl,
    apiUrl: apiUrl,
    loginUrl: `${apiUrl}login/`,
    userUrl: `${apiUrl}user/`,
    ticketUrl: `${apiUrl}tickets/`,
    invoiceUrl: `${apiUrl}invoices/`,
    announcementUrl: `${apiUrl}announcements/`,
    consumptionUrl: `${apiUrl}consumptions/`,
    predictionUrl: `${apiUrl}consumptions/predictions`,
    chargeUrl: `${apiUrl}charge/`,
    monthNames: ["JAN", "FEB", "MAR", "APR", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
};