import moment from "moment";

function formatDateTime(value) {
    return value ? moment(value).fromNow() : "Not specified"
}

export {
    formatDateTime
}