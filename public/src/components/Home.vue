<template>
  <div class="home">
    <div>
      <span class="title">melodia</span>
    </div>
    <div class="row form-row">
      <form class="form-inline" @submit.prevent='songSearch'>
        <div class="form-group">
          <input type="text" v-model="artist" placeholder="Artist Name" />
          <button type="submit" class="btn btn-info" id="get-music-button">Get Music</button>
        </div>
      </form>
    </div>
    <div class="row">
      <div class="col-sm-5 itunes-background">
        <itunes class="itunes"></itunes>
      </div>
      <div class="col-sm-5 my-tunes-background">
        <my-tunes class="my-tunes"></my-tunes>
      </div>
    </div>
  </div>
</template>

<script>
  import MyTunes from './MyTunes.vue'
  import Itunes from './Itunes.vue'
  export default {
    name: 'home',
    data() {
      return {
        artist: ''
      }
    },
    components: {
      Itunes,
      MyTunes
    },
    methods: {
      songSearch() {
        return this.$store.dispatch('getMusicByArtist', this.artist);
      }
    }
  }
</script>


<style>
  h1 {
    text-align: center;
    font-family: 'Muli', sans-serif;
  }

  .title {
    font-family: 'Monoton', cursive;
    letter-spacing: 50px;
    display: block;
    font-size: 6rem;
    text-align: center;
    margin-bottom: 35px;
  }

  .form-row {
    justify-content: center !important;
    margin: 20px;
  }

  input {
    margin-right: 10px;
    width: 300px;
  }

  .my-tunes-background {
    /* display: inline-block; */
    background: rgba(252, 255, 175, 0.2);
    border-radius: 50px;
    min-height: 500px;
    min-width: 40%;
    margin: 30px;
    padding: 10px 75px;
  }

  .itunes-background {
    /* display: inline-block; */
    background: rgba(169, 229, 213, 0.2);
    border-radius: 50px;
    min-height: 500px;
    min-width: 40%;
    margin: 30px;
    padding: 10px 75px;
    

  }

  ::-webkit-input-placeholder {
    text-align: center;
  }
</style>