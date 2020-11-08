const express = require("express");
const config = require("config");
const Url = require("../schema/url");

const getShortenUrlRoute = express.Router();
getShortenUrlRoute.get('/:shortUrl', async (req, res) => {
    const shortUrlCode = req.params.shortUrl;
    const url = await Url.findOne({ urlCode: shortUrlCode });

    try {
        if (url) {
            let clickCount = url.clickCount;
            clickCount++;
            await url.update({ clickCount });
            return res.redirect(url.longUrl);
        } else {
            return res.status(400).json("The short url doesn't exists");
        }
    }
    catch (err) {
        return res.status(500).json("Internal Server error.");
    }
})

module.exports = getShortenUrlRoute;