<template>
  <div id="app" class="container-fluid">
    <home></home>
  </div>
</template>

<script>
import Home from './components/Home'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
.container-fluid{
    background: linear-gradient(85deg,rgb(83, 154, 221),rgb(254, 255, 185));
    background-repeat: no-repeat;
  }
</style>
