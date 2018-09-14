<template>
    <div class="nav-bar">
        <img :src="logo" alt="">
        <span class="font-size-color font-family-chinese">标注平台统计</span>
        <p class="font-size-color font-family-number">{{nowTime}}</p>
    </div>
</template>
<script>
import logo from '../assets/logo.png'
export default {
    data() {
        return {
            logo: logo,
            nowTime: '2008年8月8日 20:00:00'
        }
    },
    mounted() {
        setInterval(() => {
            this.getNowDate()
        },1000)
    },
    methods: {
        getNowDate () {
            let time = new Date();
            let year = time.getFullYear(),
                mouth = time.getMonth()+1,
                data = time.getDate(),
                hour = time.getHours(),
                minute = time.getMinutes(),
                second = time.getSeconds();
            /*格式化时间*/
            let years = year.toString().length===1?'0'+year:year;
            let mouths = mouth.toString().length===1?'0'+mouth:mouth;
            let datas = data.toString().length===1?'0'+data:data;
            let hours = hour.toString().length===1?'0'+hour:hour;
            let minutes = minute.toString().length===1?'0'+minute:minute;
            let seconds = second.toString().length===1?'0'+second:second;
            let nowTime = `${years}年${mouths}月${datas}日  ${hours}:${minutes}:${seconds}`
            this.nowTime = nowTime
        }
    }
}
</script>
<style scrop>
    .nav-bar{
        position: relative;
        width: 100%;
        height: 1.2rem;
        text-align: center;
        color: #fff;
        background-image: url('../assets/nav-bar-bg.png');
        background-size: 100% 100%;
    }
    .nav-bar img{
        position: absolute;
        top: 10px;
        left: 15px;
        width: 1.75rem;
        height: 0.45rem;
    }
    .nav-bar span{
        position: relative;
        top: -0.2rem;
        left: 0.1rem;
        letter-spacing: 0.12rem;
        font-size: 0.42rem;
        font-family: '微软雅黑';
        font-weight: 600;
    }
    .nav-bar p{
        position: absolute;
        top: 15px;
        right: 0.3rem;
        margin: 0;
        font-size: 0.25rem;
    }
</style>
