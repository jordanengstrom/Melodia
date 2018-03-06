import vue from 'vue';
import vuex from 'vuex';
import $ from 'jquery';
import axios from 'axios'
import router from '../router';

vue.use(vuex);

let iTunesDB = axios.create({
  baseURL: "https://itunes.apple.com/search?term=",
  timeout: 3000
});

let myTunesDB = axios.create({
  baseURL: "http://localhost:3000/api/",
  timeout: 3000
});

var store = new vuex.Store({
  state: {
    myTunes: [],
    results: []
  },
  
  mutations: {
    setResults(state, results){
      // console.log("Setting iTunes results");
      state.results = results;
      console.log(results);
    },
    setMyTunes(state, songs){
      console.log("Setting myTunes results");
      state.myTunes = songs;
    }
  },

  actions: {
    getMusicByArtist({commit, dispatch}, artist) {
      iTunesDB
        .get(artist)
        .then(res =>{
          // console.log("Getting iTunes results");
          commit('setResults', res.data.results);
      })
    },

    getMyTunes({commit, dispatch}){
      //this should send a get request to your server to return the list of saved tunes
      myTunesDB
        .get("songs")
        .then(res => {
            // console.log("getMyTunes data:");
            // console.log(res.data);
            // console.log("mapped data:");
            var sorted = res.data.sort( (a,b) => {
              return b.rating - a.rating;
            });
            console.log(sorted);
            commit("setMyTunes", sorted);
        })
        .catch(err =>{
          console.log(err);
        });
    },

    addToMyTunes({commit, dispatch}, track){
      //this will post to your server adding a new track to your tunes
      console.log("Adding track to myTunes");
      console.log(track);
      myTunesDB
        .post("songs/",track)
        .then(res => {
          console.log(res);
          dispatch("getMyTunes");
        })
        .catch(err => {
          console.log(err);
        });
    },

    removeTrack({commit, dispatch}, trackId){
      //Removes track from the database with delete
      myTunesDB
        .delete("songs/" + trackId)
        .then(res => {
          dispatch("getMyTunes");
        })
        .catch(err => {
          console.log(err)
        });
    },

    // this updates the votes and dispatches getMyTunes which reorders the list
    updateRating({commit, dispatch}, track){
        myTunesDB
          .put("songs/" + track._id, track)
          .then(res => {
          dispatch("getMyTunes");
          })
          .catch(err => {
            console.log(err);
          });
    }
  }
})

export default store;
