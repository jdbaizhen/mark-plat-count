<template>
    <div class="capacity-container border-style">
        <Title title="衣物负载量"/>
        <div id="capacity" ref="capacity"></div>
    </div>
</template>
<script>
import Echarts from 'echarts'
import Title from './Title'
import { mapState } from 'vuex'
export default {
    data() {
        return {}
    },
    components: {
        Title
    },
    computed: {
        ...mapState(['capacityOption'])
    },
    mounted() {
        setTimeout(() => {
            this.showChart()
        },1000)
    },
    methods: {
        showChart() {
            let myChart = Echarts.init(document.getElementById('capacity'));
            myChart.setOption(this.capacityOption);
        }
    }
}
</script>
<style>
.capacity-container{
    height: 25vh;
}
#capacity{
    margin-top: -0.3rem;
    width: 100%;
    height: 100%;
}
</style>
