import { pathToRegexp } from 'path-to-regexp'

/**
 * example:
 * 
 * /news/:id/:page
 * 
 * /^\/news(?:\/([^\/#\?]+?))(?:\/([^\/#\?]+?))[\/#\?]?$/i
 */


/**
 * 得到匹配结果，匹配结果是一个对象，如果不能匹配，返回 undefined
 * 如果可以匹配，匹配结果是一个对象，该对象中的属性名对应路径规则中的关键字
 * @param {*} path 路径规则
 * @param {*} pathName 真实地址
 * @param {*} options 相关配置，是一个对象，内容中可以出现：exact(精确匹配)、sensitive(区分大小写)、strict
 */
export default function pathMatch(path, pathName, options) {
    const keys = []
    const regexp = pathToRegexp(path, keys, getOptions(options))

    const result = regexp.exec(pathName)

    // 没有匹配
    if (!result) return null
    // 有匹配
    let groups = Array.from(result)
    groups = groups.slice(1)

    const params = getParams(groups, keys)
    return {
        params,
        path: path,
        url: result[0], // 这个是匹配到的第一项，而不是 pathName
        isExact: pathName === result[0]
    }
}

/**
 * 将传入的 react-router 配置，转换为 path-to-regexp 配置
 */
function getOptions(options = {}) {
    const defaultOptions = {
        exact: false,
        strict: false,
        sensitive: false
    }

    const opts = { ...defaultOptions, ...options }

    return {
        sensitive: opts.sensitive,
        strict: opts.strict,
        end: opts.exact
    }
}

function getParams(groups, keys) {
    const obj = {}
    for (let i = 0; i < groups.length; i++) {
        const value = groups[i]
        const name = keys[i].name
        console.log('name, value', name, value)

        obj[name] = value
    }

    return obj
}
