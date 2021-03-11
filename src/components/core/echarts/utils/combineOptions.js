'use strict'

export default function(oldOption, newOption, name) {
    if (oldOption) {
        if (Array.isArray(oldOption)) {
            return oldOption.concat(newOption)
        } else {
            if (oldOption.__rechartId !== newOption.__rechartId) {
                return [oldOption, newOption]
            }
        }
    }
    if(name == 'series') {
        let rs = oldOption? oldOption:[]
        rs.push(newOption)
        return rs
    }
    return newOption
}
