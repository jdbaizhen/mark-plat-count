<template>
    <div class="font-family-chinese">
        <h3>{{title}}</h3>
    </div>
</template>

<script>
export default {
    data() {
        return{}
    },
    props: ['title']

}
</script>

<style scoped>
    h3{
        color: #fff;
        margin: 0;
        padding: 0;
        font-size: 0.22rem;
        font-weight: 500;
        letter-spacing: 0.03rem;
    }
</style>
