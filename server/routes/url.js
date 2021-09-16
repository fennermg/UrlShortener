const express = require("express");
const router = express.Router();
const validUrl = require("valid-url");
const shortId = require("shortid");
const config = require("config");

const Url = require("../models/Url");

//@route    POST /api/url/shorten
//@desc     Create Short URL

router.post("/shorten", async (req, res) => {
  const { longUrl } = req.body;
  const baseUrl = config.get("baseUrl");

  if (!validUrl.isUri(baseUrl)) {
    return res.status(401).json({ msg: "Invalid base URL" });
  }

  const urlCode = shortId.generate();

  if (!validUrl.isUri(longUrl)) {
    try {
      let url = await Url.findOne({ longUrl });
      if (url) {
        res.json(url);
      } else {
        const shortUrl = baseUrl + "/" + urlCode;
        url = new Url({
          longUrl,
          shortUrl,
          urlCode,
          visits: false,
          date: new Date(),
        });

        await url.save();

        res.json(url);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Server error" });
    }
  } else {
    res.status(401).json({ msg: "Invalid URL" });
  }
});

module.exports = router;
