/**
 * @author pj
 * @func 根据path 判断是否在数组配置中
 * @params {path string} 
 * @returns {boolean}
 */
export const isPathPartlyExisted = (path) => {
    const pathRes = path.split('/')
    const arr = ['','home','entertainment','subscribe','news','mine']
    if (pathRes[1] && arr.includes(pathRes[1])) 
        return false
    
    return true
}

// export const isPathPartlyExisted = (path) => {
//     const arr = ['/ideadetail', '/information', '/search', '/more'];
//     // 任何情况 结果数组第二项都是arr里匹配的单项
//     let pathRes = path.split('/')
//     if (pathRes[1] && arr.indexOf(`/${
//         pathRes[1]
//     }`) != -1)
//         return true
//     return false
// }
