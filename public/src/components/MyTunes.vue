<template>
    <div class="my-tunes">
        <div class="row mytunes-title">
            <h1 class="title-two">List of MyTunes</h1>
        </div>
        <div class="row song-row" v-for="song in myTunes">
            <div class="col-sm-1">
                <div class="row">
                        <span class="fa-stack fa-sm">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-inverse fa-stack-1x">{{song.rating}}</i>
                        </span>
                </div>
            </div>
            <div class="col-sm-2">
                <img :src="song.artworkUrl60">
            </div>
            <div class="col-sm-3">
                <audio :src="song.previewUrl" controls></audio>
            </div>
            <div class="col-sm-4">
                {{song.trackName}}
            </div>
            <div class="col-sm-1">
                <i class="fa fas fa-minus" @click="removeSong(song._id)"></i>
            </div>
            <div class="col-sm-1">
                <div class="row">
                    <i class="fa fa-angle-up" @click="upVote(song)"></i>
                </div>
                <div class="row">
                    <i class="fa fa-angle-down" @click="downVote(song)"></i>
                </div>
            </div>
            <!-- <div class="col-sm-2">
                <div class="row">
                        <span class="fa-stack fa-sm">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-inverse fa-stack-1x">{{song.rating}}</i>
                        </span>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
  name: "my-tunes",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getMyTunes");
  },
  computed: {
    myTunes() {
      return this.$store.state.myTunes;
    }
  },
  methods: {
    removeSong(trackId) {
      this.$store.dispatch("removeTrack", trackId);
    },
    upVote(track) {
     if(track.rating < 0){
         track.rating = 0;
     } else {
         track.rating++;
     }
      this.$store.dispatch("updateRating", track);
    },
    downVote(track) {
    if(track.rating <= 0){
         track.rating = 0;
     } else {
         track.rating--;
     }
    //   track.rating--;
      this.$store.dispatch("updateRating", track);
    }
  },

  props: ["song"]
};
</script>

<style>
ul {
  list-style-type: none;
}

li {
  margin: 10px;
}

.row {
  justify-content: center;
}
.song-row {
  align-items: center;
}
.fa:hover {
  cursor: pointer;
}

.fa-minus:hover {
  color: rgb(244, 104, 66);
}
.mytunes-title {
  justify-content: center;
}
.fa-angle-up:hover {
  cursor: pointer;
  color: rgb(163, 163, 163);
}
.fa-angle-down:hover {
  cursor: pointer;
  color: rgb(163, 163, 163);
}
</style>