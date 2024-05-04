import { createBrowserHistory } from 'history'

const history = createBrowserHistory({
    basename: '/news',
    forceRefresh: true
})

window.h = history

window.unListen = window.h.listen((location, action) => {
    console.log('location', location)
    console.log('地址发生了变化。')
})

