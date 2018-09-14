import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
    validNumber: '654321',
    invalidNumber: '123456',
    capacityOption: {}
}

const mutations = {
    setValidNumber(state, number) {
        state.validNumber = number
    },
    setInvalidNumber(state, number) {
        state.invalidNumber = number
    },
    setCapacityOption(state, obj) {
        state.capacityOption = obj
    }
}

const getters = {
    validNumber: state => state.validNumber,
    invalidNumber: state => state.invalidNumber,
    capacityArr: state => state.capacityArr,
}

const actions = {
    getImageInfo(context) {
        axios({
            url: '/count/data',
            method: 'get'
        }).then( res => {
            if(res.data.result){
                const data = JSON.parse(res.data.data)
                context.commit('setValidNumber',data.effectiveNumber)
                context.commit('setInvalidNumber',data.invalidNumber)
                const manyNumber = data.manyNumber
                const midNumber = data.midNumber
                const fewNumber = data.fewNumber
                const arr = [
                    { value: manyNumber, name: '高'},
                    { value: midNumber, name: '中'},
                    { value: fewNumber, name: '低'},
                ]
                
                const options = {
                    textStyle: {
                        color: '#fff',
                        fontFamily: '微软雅黑'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'right',
                        data: ['高','中','低'],
                        textStyle: {
                            color: '#fff'
                        },
                        top: '20%'
                    },
                    series : [
                        {
                            name: '负载量',
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            data: arr,
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(255, 255, 255, 0.5)'
                                }
                            }
                        }
                    ]
                }

                context.commit('setCapacityOption',options)
            }   
        })
    },
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})  