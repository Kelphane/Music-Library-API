const express = require("express");
const cors = require("cors");
const repoContext = require("./repository/repository-wrapper");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.listen(3000);

app.get('/api/songs', (req, res) => {
    const allSongs = repoContext.songs.findAllSongs();
    return res.send(allSongs);
});

app.get('', () => {
    
});