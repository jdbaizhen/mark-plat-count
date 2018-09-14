<template>
    <div id="clothesTypeLine">

    </div>
</template>

<script>
import Echarts from 'echarts'
import axios from 'axios'
export default {
    data() {
        return{}
    },
    mounted() {
        setTimeout(()=> {
            this.showChart()
        },1000)  
    },
    methods: {
        showChart() {
            let myChart = Echarts.init(document.getElementById('clothesTypeLine'))
            axios({
                url: '/count/machineNumber',
                method: 'get'
            }).then( res => {
                if(res.data.result){
                    let data = JSON.parse(res.data.data)
                    let machine1 = []
                    let machine2 = []
                    let machine3 = []
                    let machine4 = []
                    let machine5 = []
                    data.forEach((value, index) => {
                        if(value.machine == 1){
                            value.weekDataList.forEach((val, ind) => {
                                machine1.push(val.collectNumber)
                            })
                        }else if(value.machine == 2){
                            value.weekDataList.forEach((val, ind) => {
                                machine2.push(val.collectNumber)
                            })
                        }else if(value.machine == 3){
                            value.weekDataList.forEach((val, ind) => {
                                machine3.push(val.collectNumber)
                            })
                        }else if(value.machine == 4){
                            value.weekDataList.forEach((val, ind) => {
                                machine4.push(val.collectNumber)
                            })
                        }else if(value.machine == 5){
                            value.weekDataList.forEach((val, ind) => {
                                machine5.push(val.collectNumber)
                            })
                        }                   
                    })
                    let option = {
                        textStyle: {
                            color: 'rgba(23,102,131,1)'
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            data:['1', '2', '3', '4', '5'],
                            textStyle: {
                                color: 'rgba(23,102,131,1)'
                            },
                        },
                        xAxis: {
                            type: 'category',
                            naem: '时间',
                            boundaryGap: false,
                            data: ['第一周','第二周','第三周','第四周','第五周','第六周','第七周','第八周', '第九周'],
                            axisLine: {
                                lineStyle: {
                                    color: 'rgb(23,101,131)',
                                    width: '3'
                                }
                            }
                        },
                        yAxis: {
                            type: 'value',
                            name: '采集量',
                            scale: true,
                            min: 0,
                            max: 4000,
                            axisLine: {
                                lineStyle: {
                                    color: 'rgb(23,101,131)',
                                    width: '3'
                                },
                            },
                            splitLine: {
                                show: false
                            },
                            axisLabel: {
                                show: false
                            }
                        },
                        series: [
                            {
                                name:'一号机',
                                type:'line',
                                stack: '总量',
                                data:machine1
                            },
                            {
                                name:'二号机',
                                type:'line',
                                stack: '总量',
                                data:machine2
                            },
                            {
                                name:'三号机',
                                type:'line',
                                stack: '总量',
                                data:machine3
                            },
                            {
                                name:'四号机',
                                type:'line',
                                stack: '总量',
                                data:machine4
                            },
                            {
                                name:'五号机',
                                type:'line',
                                stack: '总量',
                                data:machine5
                            }
                        ]
                    }
                      myChart.setOption(option)
                }    
            })
          
        }
    }
}
</script>

<style>
#clothesTypeLine{
    height: 23vh;
}
</style>
