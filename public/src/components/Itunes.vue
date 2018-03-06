<template>
    <div class="itunes">
        <div class="row itunes-title">
            <h1>iTunes Search</h1>
        </div>
        <div class="row row-items" v-for="song in songs">
            <div class="col-sm-3">
                <img :src="song.artworkUrl60">
            </div>
            <div class="col-sm-3">
                <audio :src="song.previewUrl" controls></audio>
            </div>
            <div class="col-sm-5">
                {{song.trackName}}
            </div>
            <div class="col-sm-1">
                <i class="fas fa-plus" @click="addSong(song)"></i>
            </div>
        </div>
    </div>

</template>

<script>
export default {
  name: "itunes",
  data() {
    return {};
  },
  computed: {
    songs() {
      return this.$store.state.results;
    }
  },
  methods: {
    addSong(track) {
      return this.$store.dispatch("addToMyTunes", track);
    }
  }
  // props: ['artist']
};
</script>

<style>
audio {

  width: 65px;
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
}
ol {
  margin-left: 30px;
}

li {
  margin: 10px;
}

.row-items {
    align-items: center;
}

.row {
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
}

.fa-plus {
  background-color: rgba(100, 100, 100, 0);
  color: rgb(162, 170, 162);
}

.fa-plus:hover {
  cursor: pointer;
  color: rgb(103, 216, 131);
}
.itunes-title {
  justify-content: center !important;
}
</style>