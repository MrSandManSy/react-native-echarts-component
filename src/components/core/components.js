'use strict'

import BaseComponent from './baseComponent'
import tagNames from './tags'

export function createComponent(compont) {
    return class extends BaseComponent {
        static displayName = compont
        constructor() {
            super()
            this.name = compont
        }
    }
}

export default tagNames.reduce((memo, next) => Object.assign({
    [next.replace(/^\S/, function(s) {
        return s.toUpperCase()
    })]: createComponent(next)
}, memo), {})
