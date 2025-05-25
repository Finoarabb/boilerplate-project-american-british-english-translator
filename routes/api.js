"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
    const { text, locale } = req.body;
    // Validator
    if (text===undefined||!locale) return res.send({ error: "Required field(s) missing" });
    if (!text) return res.send({ error: "No text to translate" });
    if(locale!=='american-to-british'&&locale!=='british-to-american') 
      return res.send({ error: "Invalid value for locale field"});

    // Exec
    const result = translator.translate(text, locale);
    return res.send(result);
  });
};
