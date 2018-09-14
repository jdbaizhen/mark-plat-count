<template>
  <div id="app">
    <Navbar/>
    <Count/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Count from './pages/Count'

export default {
  name: 'App',
  components: {
    Navbar,
    Count
  }
}
</script>

<style>
#app{
  height: 100%;
  background-image: url('./assets/bg.png');
  background-size: 100% 100%;
}
</style>
