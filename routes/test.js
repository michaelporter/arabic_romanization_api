var letterMap = require('../lib/letter_map').arabEasy,
    util = require('../lib/util');

module.exports = (function () {
  "use strict";

  return function *() {
    this.set("Access-Control-Allow-Origin", "*");
    this.set("Access-Control-Allow-Methods", "GET");

    let text = util.getParam.apply(this, ["text"]);

    if (text === undefined) {
      this.status = 400;
      this.body = { 
        "error": "You must pass valid text"
      };
      return;
    }

    let result = [];

    for (let i = 0; i < text.length; i++) {
      let map = letterMap[text.charAt(i)];
      if (map) {
        let letterUnicode = map.unicode;
        result.push(letterUnicode);
      } else {
        console.log("missing map for:", text.charAt(i));
      }
    }

    var arabic = result.reverse().join("");
    var unicode  = util.unicodeFromString(arabic).reverse();

    this.body = {
      "original": text,
      "arabic": arabic,
      "unicode": unicode
    };
  };
})();
