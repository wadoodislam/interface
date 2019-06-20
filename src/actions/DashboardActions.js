import { DashboardConstants } from "../Main/utils/Constants";

export const closeChat = () => ({
    payload:{
        ticket: null
    },
    type: DashboardConstants.CLOSE_CHAT
});


export const openChat = (ticket) => ({
    payload:{
        ticket: ticket
    },
    type: DashboardConstants.OPEN_CHAT
});