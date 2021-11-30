const express = require("express");
const cors = require("cors");
const repoContext = require("./repository/repository-wrapper");
const { validateSong } = require("./middleware/rerpository-validation");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.listen(3000);

app.get('/api/songs', (req, res) => {
    const allSongs = repoContext.songs.findAllSongs();
    return res.send(allSongs);
});

app.get('/api/songs/:id', (req, res) => {
    const id = req.params.id;
    const song = repoContext.songs.findSongById(id);
    return res.send(song);
});

app.post('/api/songs', [validateSong], (req, res) => {
    const newSong = req.body;
    const addedNewSong = repoContext.songs.createSong(newSong);
    return res.send(addedNewSong);
});

app.put('/api/songs/:id', [validateSong], (req, res) => {
    const id = req.params.id;
    const propertyToUpdate = req.body;
    const updatedSong = repoContext.songs.updateSong(id, propertyToUpdate);
    return res.send(updatedSong);
});