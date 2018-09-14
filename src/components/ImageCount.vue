<template>
    <div class="image-count-container border-style">
        <Title title="无效图像"/>
        <NumberList :number="invalidNumber"/>
    </div>
</template>
<script>
import Title from './Title'
import NumberList from './NumberList'
import { mapState } from 'vuex'
export default {
    data() {
        return {}
    },
    components: {
        Title,
        NumberList
    },
    computed: {
        ...mapState(['invalidNumber'])
    }
}
</script>
<style>
.image-count-container{
    display: flex;
    flex-direction: row;
    height: 8vh;
    line-height: 0.8rem;
}
</style>