// var router = require("express").Router();
// var Playlists = require("../models/playlist");
// var Songs = require("../models/song");

// // GET ALL PLAYLISTS
// router.get("/api/playlists", (req, res, next) => {
//     Playlists.find(req.query)
//         .then(playlists => {
//             return res.send(playlists);
//         })
//         .catch(next);
// });

// //GET ONE PLAYLIST
// router.get("/api/playlists/:playlistid", (req, res, next) => {
//     Playlists.findById(req.params.playlistid)
//         .then(playlist => {
//             return res.send(playlist);
//         })
//         .catch(next);
// });

// // CREATE A PLAYLIST
// router.post("/api/playlists/", (req, res, next) => {
//     Playlists.create(req.body)
//         .then(playlist => {
//             res.send(playlist);
//         })
//         .catch(next);
// });

// // DELETE A PLAYLIST
// router.delete("/api/playlists/:playlistid", (req, res, next) => {
//     Playlists.findByIdAndRemove(req.params.playlistid)
//         .then(playlist => {
//             res.send({ message: "Successfully deleted post" });
//         })
//         .catch(next);
// });

// //UPDATE A PLAYLIST
// router.put("/api/playlists/:playlistid", (req, res, next) => {
//     Playlists.findByIdAndUpdate(req.params.playlistid, req.body, { new: true })
//         .then(playlist => {
//             res.send({ message: "Successfully updated playlist", data: playlist });
//         })
//         .catch(next);
// });

// // ADD SONG TO PLAYLIST
// router.post("/api/playlists/:playlistid/songs", (req, res, next) => {
//     Songs.create(req.body)
//         .then(playlist => {
//             res.send(playlist);
//         })
//         .catch(next);
// });

// // DELETE SONG FROM PLAYLIST
// router.delete("/api/playlists/:playlistid/songs/:songid", (req, res, next) => {
//     Songs.findByIdAndRemove(req.params.songid)
//         .then(playlist => {
//             res.send({ message: "Successfully deleted post" });
//         })
//         .catch(next);
// });

// // UPDATE SONG RATING
// router.put("/api/playlists/:playlistid/songs/:songid", (req, res, next) => {
//     Songs.findByIdAndUpdate(req.params.songid, req.body, { new: true })
//         .then(song => {
//             res.send({ message: "Successfully updated song rating", data: song });
//         })
//         .catch(next);
// });


// module.exports = { router };