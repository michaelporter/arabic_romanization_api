module.exports = (function() {
  "use strict";

  return {
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
    },

    getLetterMap: function(text, arabicMap, romanMap) {
      var l;
      var i = 0;

      while(l === undefined || l == " ") {
        i++;
        l = text[i];
      }

      var code = l.charCodeAt(0);

      if (code < 1500) {
        return romanMap;
      }

      return arabicMap;
    },

  };
})();

