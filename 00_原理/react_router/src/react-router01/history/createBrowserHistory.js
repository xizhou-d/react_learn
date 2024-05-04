/**
 * 创建一个 history api 的 history 对象
 * @param {*} options 
 */
export default function createBrowserHistory(options = {}) {
    const {
        basename = '',
        forceRefresh = true,
        keyLength = 6,
        getUserConfirmation = (message, callback) => callback(window.confirm(message))
    } = options

    function go(n) {
        window.history.go(n)
    }

    function back() {
        window.history.goBack()
    }

    function forward() {
        window.history.forward()
    }

    /**
     * 向地址栈中加入一个新的地址
     * @param {*} to    新的地址，可以是字符串，也可以是对象
     * @param {*} state 附加的状态数据，如果第一个参数是对象，该参数无效
     */
    function push(to, state) {
        const pathInfo = handlePathAndState(to, state, basename)
        console.log('pathInfo', pathInfo)

        // window.location.href 会丢失 state； 为了防止丢失 state ，需要做处理
        history.action = 'PUSH'
        window.history.pushState({
            key: createKey(keyLength),
            state: pathInfo.state
        }, null, pathInfo.to)
        // push 之后更新 location 的内容
        history.location = createLocation(basename)
        if (forceRefresh) {
            window.location.href = pathInfo.to
        }

        return pathInfo
    }

    function replace(to, state) {
        const pathInfo = handlePathAndState(to, state, basename)

        // window.location.href 会丢失 state； 为了防止丢失 state ，需要做处理
        history.action = 'REPLACE'
        window.history.replaceState({
            key: createKey(keyLength),
            state: pathInfo.state
        }, null, pathInfo.to)
        // push 之后更新 location 的内容
        history.location = createLocation(basename)
        if (forceRefresh) {
            window.location.href = pathInfo.to
        }

        return pathInfo
    }

    const history = {
        action: 'POP',
        length: window.history.length,
        go,
        back,
        forward,
        push,
        replace,
        location: createLocation(basename)
    }

    return history
}

/**
 * 创建一个 location 对象
 */
function createLocation(basename = "") {
    const location = {
        hash: window.location.hostname,
        search: window.location.search,
    }
    // 处理 pathname
    let pathname = window.location.pathname
    let reg = new RegExp(`^${basename}`)
    location.pathname = pathname.replace(reg, '')

    // 处理 state
    let state, historyState = window.history.state
    if (historyState === null) {
        state = undefined
    } else if (typeof historyState !== 'object') {
        state = historyState
    } else {
        if ('key' in historyState) {
            location.key = historyState.key
            state = historyState.state
        } else {
            state = historyState
        }
    }
    location.state = state

    return location
}

/**
 * 根据 to 和 state 得到一个统一的对象格式
 * @param {*} to 
 * @param {*} state 
 */
function handlePathAndState(to, state, basename) {
    if (typeof to === 'string') {
        return {
            to,
            state
        }
    } else if (typeof to === 'object') {
        let { search = '', hash = '' } = to

        if (search.charAt(0) !== '?') {
            search = '?' + search
        }

        if (hash.charAt(0) !== '#') {
            hash = '#' + hash
        }
        let path = basename + to.pathname
        path += search
        path += hash

        return {
            to: path,
            hash,
            search,
            state: to.state,
        }
    } else {
        throw new TypeError('To must be string or object.')
    }
}

/**
 * 产生一个指定长度的随机字符串，随机字符串中可以包含数字和字母
 * @param {*} keyLength 
 */
function createKey(keyLength) {
    return Math.random().toString(36).substr(2, keyLength)
}

window.mh = createBrowserHistory({
    basename: '/news',
    forceRefresh: true
})
