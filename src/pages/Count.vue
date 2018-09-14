<template>
    <div class="count-container"> 
        <div class="count-left">
            <Capacity/>
            <ClothesType/>
        </div>
        <div class="count-right">
            <EveryType/>
            <ImageCount/>
        </div>
    </div>  
</template>
<script>
import Capacity from '../components/Capacity'
import ClothesType from '../components/ClothesType'
import ImageCount from '../components/ImageCount'
import EveryType from '../components/EveryType'
import { mapActions } from 'vuex'
export default {
    data() {
        return {
        }
    },
    components: {
        Capacity,
        ClothesType,
        ImageCount,
        EveryType
    },
    mounted() {
        this.getImageInfo()
    },
    methods: {
        ...mapActions(['getCollectionInfo','getSquareInfo','getImageInfo','getMachineInfo'])
    }
}
</script>
<style>
    .count-container{
        display: flex;
        flex-direction: row;
        padding: 0.25rem;
        font-size: 20px;
        color: #fff;
    }
    .count-left{
        display: flex;
        flex-direction: column;
        width: 6rem;
    }
    .count-right{
        display: flex;
        flex-direction: column;
        width: 12.7rem;   
    }
</style>