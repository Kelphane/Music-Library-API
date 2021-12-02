const express = require("express");
const cors = require("cors");
const repoContext = require("./repository/repository-wrapper");
const { validateSong } = require("./middleware/rerpository-validation");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.listen(3002);

app.get('/api/songs', (req, res) => {
    const allSongs = repoContext.songs.findAllSongs();
    return res.send(allSongs);
});

app.get('/api/songs/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const song = await repoContext.songs.findSongById(id);
        return res.send(song);
    } catch (error) {
        console.log(error.message);
    }
});

app.post('/api/songs', [validateSong], async (req, res) => {
    try {
        const newSong = req.body;
        const addedNewSong = await repoContext.songs.createSong(newSong);
        return res.send(addedNewSong);
    } catch (error) {
        console.log(error.message);
    }
});

app.put('/api/songs/:id', [validateSong], (req, res) => {
    try {
        const id = req.params.id;
        const propertyToUpdate = req.body;
        const updatedSong = repoContext.songs.updateSong(id, propertyToUpdate);
        return res.send(updatedSong);
    } catch (error) {
        console.log(error.message);
    }
});

/* app.delete('/api/songs/:id', (req, res) => {
    const id = req.params.id;
    const deletedSong = repoContext.songs.deleteSong(id);
    return res.send(deletedSong);
}); */