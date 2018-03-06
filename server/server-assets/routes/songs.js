var router = require("express").Router();
var Songs = require("../models/song")

// GET SONGS  
router.get("/api/songs", (req, res, next) => {
    Songs.find()
        .then(songs => {
            res.send(songs);
        })
        .catch(next)
});

// ADD SONG
router.post("/api/songs", (req, res, next) => {
    Songs.create(req.body)
        .then(playlist => {
            res.send(playlist);
        })
        .catch(next);
});

// DELETE SONG
router.delete("/api/songs/:songid", (req, res, next) => {
    Songs.findByIdAndRemove(req.params.songid)
        .then(playlist => {
            res.send({ message: "Successfully deleted song from playlist" });
        })
        .catch(next);
});

// UPDATE SONG RATING
router.put("/api/songs/:songid", (req, res, next) => {
    Songs.findByIdAndUpdate(req.params.songid, req.body, { new: true })
        .then(song => {
            res.send({ message: "Successfully updated song rating", data: song });
        })
        .catch(next);
});


module.exports = { router };