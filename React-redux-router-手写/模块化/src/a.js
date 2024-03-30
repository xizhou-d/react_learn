import { debounce } from 'lodash'

function log() {
    console.log('log function exec.')
}

export const deLog = debounce(log, 3000)