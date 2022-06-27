
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

function getStatusColour(status) {
    switch (status) {
        case "NotStarted":
            return '#F0F0F0'
        case "InProgress":
            return '#f9f9a0'
        case "Completed":
            return '#a9ffa9'
        default:
            return '#FFFFFF'
        }
}

function getStatusIcon(status) {
    switch (status) {
        case "NotStarted":
            return solid('circle-exclamation')
        case "InProgress":
            return solid('circle-pause')
        case "Completed":
            return solid('circle-check')
        default:
            return solid('circle-question')
        }
}

export {
    getStatusColour,
    getStatusIcon
}