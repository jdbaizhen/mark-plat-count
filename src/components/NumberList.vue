<template>
    <ul class="number-list">
        <li v-for="(item, index) in changetoArr" :key="index">
            <span class="font-size-color">{{item}}</span>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['number'],
    data() {
        return {
            
        }
    }, 
    computed: {
        changetoArr: function() {
            let number = this.number.toString();
            let arr = [...number];
            return arr;
        }
    }
}
</script>

<style scoped>
.number-list{
    display: flex;
    flex-direction: row;
    margin: 0 0 0 0.4rem;
    padding: 0;
    height: 0.8rem;
}
.number-list li{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0.2rem;
    list-style: none;
    width: 0.6rem;
    height: 0.8rem;
    background: rgba(23,102,131,0.4); 
    font-size: 0.5rem;
    font-weight: 600;
}
</style>
