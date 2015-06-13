(function() {
  "use strict";

  var koa = require('koa'),
      router = require('koa-router')(),
      bodyParser = require('koa-body-parser'),
      letterMap = require("./letter_map");

  var app = koa();
  app.use(bodyParser());
  app.use(router.routes());

  var util = {
    getParam: function getParam(param) {
      var body = this.request.body;
      var query = this.query;
      if (body) {
        return body[param];
      }

      if (query) {
       return query[param];
      }
    },
    unicodeFromString: function unicodeFromString(str) {
      var unicodeSet = [];

      for (let i = 0; i < str.length; i++) {

        let unicode = str.charCodeAt(i).toString(16);

        if (unicode.length < 4) {
          while (unicode.length < 4) {
            unicode = "0" + unicode;
          }
        }

        unicodeSet.push(unicode);
      }

      return unicodeSet;
    }
  };

  router.get("/test", function *() {
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
  });

  var server = app.listen(3000, function() {
    console.log("server ready");
  });

})();

