# react-native-echarts-component

1.基于`echarts`本身功能订制化成`react-native端`, 功能完全兼容

2.对比`native-echarts`组件

2.1 支持 `Map类型`地图图表

2.2 解决`android tpl.html文件`引入问题

3.`组件式调用`，相对于配置的方式更符合 react 的开发习惯

# 安装

```sh
npm install react-native-echarts-component
```

## 使用

```js
import {Echart, Components, Theme} from 'react-native-echarts-component'

const {dark, shine, infographic, macarons, roma, vintage} = Theme
const {XAxis, YAxis, Series} = Components

class Example extends React.Component {
    render() {
        return (
            <Echart>
                <YAxis type="value" />
                <XAxis type="category" data={['1', '2', '3', '4', '5', '6', '7']} />
                <Series type="line" smooth={true} data={[820, 932, 901, 934, 1290, 1330, 1320]} />
            </Echart>
        )
    }
}
```

## 组件

-   Echart 根组件
-   others 配置子组件

```js
// option
const option = {
    title: {
        text: '未来一周气温变化',
        subtext: '纯属虚构'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['最高气温', '最低气温']
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} °C'
        }
    },
    series: [
        {
            name: '最高气温',
            type: 'line',
            data: [10, 11, 13, 11, 12, 12, 9],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [{type: 'average', name: '平均值'}]
            }
        },
        {
            name: '最低气温',
            type: 'line',
            data: [1, -2, 2, 5, 3, 2, 0],
            markPoint: {
                data: [{name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'},
                    [
                        {
                            symbol: 'none',
                            x: '90%',
                            yAxis: 'max'
                        },
                        {
                            symbol: 'circle',
                            label: {
                                position: 'start',
                                formatter: '最大值'
                            },
                            type: 'max',
                            name: '最高点'
                        }
                    ]
                ]
            }
        }
    ]
}

// 组件
<Echart>
    <Title text="未来一周气温变化" subtext="纯属虚构" />
    <Tooltip trigger="axis" />
    <Legend data={['最高气温', '最低气温']} />
    <Toolbox show={true}>
        <Feature 
            dataView={{readOnly: false}}
            magicType={{type: ['line', 'bar']}} 
            restore={{}}
        >
            <DataZoom yAxisIndex="none" />
            <SaveAsImage />
        </Feature>
    </Toolbox>
    <XAxis 
        type="category" 
        boundaryGap={false} 
        data={['周一', '周二', '周三', '周四', '周五', '周六', '周日']} 
    />
    <YAxis type="value">
        <AxisLabel formatter="{value} °C" />
    </YAxis>
    <Series 
        name="最高气温" 
        type="line" 
        data={[10, 11, 13, 11, 12, 12, 9]}
    >
        <MarkPoint
            data={[
                {type: 'max', name: '最大值'}, 
                {type: 'min', name: '最小值'}
            ]}
        />
        <MarkLine 
            data={[
                {type: 'average', name: '平均值'}
            ]} />
    </Series>
    <Series 
        name="最低气温" 
        type="line" 
        data={[1, -2, 2, 5, 3, 2, 0]}
    >
        <MarkPoint 
            data={[
                {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
            ]}/>
        <MarkLine
            data={[
                {type: 'average', name: '平均值'},
                [
                    {
                        symbol: 'none', 
                        x: '90%', 
                        yAxis: 'max'
                    },
                    {
                        symbol: 'circle', 
                        label: {
                            position: 'start', formatter: '最大值'
                        }, 
                        type: 'max', 
                        name: '最高点'
                    },
                ]
            ]}
        />
    </Series>
</Echart>
```

## `Echart` 样式属性

themeName
    -- 主题色 string类型 详见Theme枚举值

width
    -- 宽

height
    -- 高

background
    背景色

更多属性查看 https://www.echartsjs.com/option.html

## LICENSE

MIT @[MrSandManSy](https://github.com/MrSandManSy)
