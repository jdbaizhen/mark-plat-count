<template>
    <div class="every-type-container border-style">
        <div class="number-show">
            <Title title="有效图像"/>
            <NumberList :number="validNumber"/>
        </div>       
        <div id="everyType"></div>
    </div>
</template>
<script>
import Title from './Title'
import NumberList from './NumberList'
import Echarts from 'echarts'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
    data() {
        return{}
    },
    components: {
        Title,
        NumberList
    },
    mounted() {
        setTimeout( () => {
            this.showChart()
        },1000)
    },
    computed: {
        ...mapState(['validNumber'])
    },
    methods: {
        showChart() {
            let myChart = Echarts.init(document.getElementById('everyType'))
            myChart.showLoading()
            axios({
                url: '/count/squareNumber',
                method: 'get'
            }).then( res => {
                if(res.data.result){
                    let data = JSON.parse(res.data.data)
                    let types = []
                    let square = []
                    let ploygon = []
                    data.forEach((value, index) => {
                        types.push(value.clothesType)
                        square.push(value.squareNumber/10000)
                        ploygon.push(value.polygonNumber/10000)
                    })
                    let option = {
                        textStyle: {
                            color: 'rgba(23,102,131,1)'
                        },
                        legend: {
                            orient: 'vertical',
                            left: 'right',
                            data: ['矩形','多边形'],
                            textStyle: {
                                color: '#fff'
                            }
                        },
                        xAxis: {
                            type: 'category',
                            name: '衣物类型',
                            data: types,
                            axisLine: {
                                lineStyle: {
                                    color: 'rgb(23,101,131)',
                                    width: '3'
                                }
                            }
                        },
                        yAxis: {
                            type: 'value',
                            name: '数量 (万)',
                            scale: true,
                            max: 12,
                            min: 0,
                            splitNumber:12,
                            boundaryGap: [0.2, 0.2],
                            splitLine: {
                                show: false
                            },
                            axisLine: {
                                lineStyle: {
                                    color: 'rgb(23,101,131)',
                                    width: '3'
                                }
                            }
                        },
                        series: [
                            {   
                                name: '矩形',
                                type: 'bar',
                                itemStyle: {
                                    normal: {
                                        color: new Echarts.graphic.LinearGradient(
                                            0, 0, 0, 1,
                                            [
                                                {offset: 0, color: 'rgba(23,102,131,0.9)'},
                                                {offset: 0.5, color: 'rgba(23,102,131,0.6)'},
                                                {offset: 1, color: 'rgba(23,102,131,0.1)'}
                                            ]
                                        )
                                    },
                                    emphasis: {
                                        color: new Echarts.graphic.LinearGradient(
                                            0, 0, 0, 1,
                                            [
                                                {offset: 0, color: 'rgba(23,102,131,0.1)'},
                                                {offset: 0.7, color: 'rgba(23,102,131,0.6)'},
                                                {offset: 1, color: 'rgba(23,102,131,0.9)'}
                                            ]
                                        )
                                    }
                                },
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'top'
                                    }
                                },
                                barWidth: '35%',
                                data: square
                            },
                            {
                                name: '多边形',
                                type: 'bar',
                                itemStyle: {
                                    normal: {
                                        color: new Echarts.graphic.LinearGradient(
                                            0, 0, 0, 1,
                                            [
                                                {offset: 0, color: 'rgba(235,91,50,0.9)'},
                                                {offset: 0.5, color: 'rgba(235,91,50,0.6)'},
                                                {offset: 1, color: 'rgba(235,91,50,0.1)'}
                                            ]
                                        )
                                    },
                                    emphasis: {
                                        color: new Echarts.graphic.LinearGradient(
                                            0, 0, 0, 1,
                                            [
                                                {offset: 0, color: 'rgba(235,91,50,0.1)'},
                                                {offset: 0.7, color: 'rgba(235,91,50,0.6)'},
                                                {offset: 1, color: 'rgba(235,91,50,0.9)'}
                                            ]
                                        )
                                    }
                                },
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'top'
                                    }
                                },
                                barWidth: '35%',
                                data: ploygon
                            }
                        ]
                    }
                    myChart.setOption(option)
                    myChart.hideLoading()
                }
            })
           
        }
    }
}
</script>
<style>
.every-type-container{
    height: 62vh;
}
#everyType{
    height: 58vh;
    width: 100%;
}
.number-show{
    height: 0.8rem;
    display: flex;
    flex-direction: row;
    line-height: 0.8rem;
}
</style>