<template>
    <div class="clothes-type-container border-style">
        <Title title="衣物组合"/>
        <div id="clothesType"></div>
        <ClothesTypeLine/>
    </div>
</template>
<script>
import Echarts from 'echarts'
import Title from './Title'
import axios from 'axios'
import ClothesTypeLine from './ClothesTypeLine'
export default {
    data() {
        return {}
    },
    components: {
        Title,
        ClothesTypeLine
    },
    mounted() {
        setTimeout(() => {
            this.showCharts()
        },1000)
    },
    methods: {
        showCharts() {
            let myChart = Echarts.init(document.getElementById('clothesType'))
            myChart.showLoading()
            axios({
                url: '/count/collectNumber',
                method: 'get'
            }).then( res => {
                if(res.data.result){
                     let data = JSON.parse(res.data.data)
                     let machineArr = []
                     let imagesArr = []
                     data.forEach((value, index) => {
                        machineArr.push(value.machine)
                        imagesArr.push(value.collectNumber/100)
                     })
                     let options = {
                        textStyle: {
                            color: 'rgba(23,102,131,1)'
                        },
                        xAxis: {
                            name: '编号',
                            type: 'category',
                            data: machineArr,
                            axisLine: {
                                lineStyle: {
                                    color: 'rgb(23,101,131)',
                                    width: '3'
                                }
                            }
                        },
                        yAxis: {
                            type: 'value',
                            name: '数量 (百)',
                            scale: true,
                            max: 40,
                            min: 0,
                            splitNumber:5,
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
                                barWidth: '70%',
                                data: imagesArr
                            }
                        ]
                    }
                    myChart.setOption(options)
                    myChart.hideLoading()
                }
            })

           
        }
    }
}
</script>
<style>
.clothes-type-container{
    height: 45vh;
}
#clothesType{
    width: 100%;
    height: 22vh;
}
</style>
