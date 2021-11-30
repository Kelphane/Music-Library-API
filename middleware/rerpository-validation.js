
exports.validateSong = (req, res, next) => {
    const data = req.body;

    if( 
        data.hasOwnProperty("title") === true && typeof(data.title) === "string" &&
        data.hasOwnProperty("album") === true && typeof(data.album) === "string" &&
        data.hasOwnProperty("artist") === true && typeof(data.artist) === "string" &&
        data.hasOwnProperty("genre") === true && typeof(data.genre) === "string" &&
        data.hasOwnProperty("releaseDate") === true && typeof(data.releaseDate) === "string"    
    ){
       next();
    }else{
        return res.status(400).send({error:'Missing Properties!'});
    }
};