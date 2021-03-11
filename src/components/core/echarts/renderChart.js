'use strict'

import worldJson from './map/worldJson'
import toString from './utils/toString'

export default function renderChart(props, options) {
    return `const eChartsContainer = document.getElementById('main')
        eChartsContainer.style.height = "${props.height || 400}"
        eChartsContainer.style.background = "${props.background || 'white'}"
        echarts.registerMap('world', ${JSON.stringify(worldJson)});
        const myChart = echarts.init(eChartsContainer, ${props.themeName? JSON.stringify(props.themeName):JSON.stringify('roma')})
        myChart.setOption(${toString(options)});
    `
}
