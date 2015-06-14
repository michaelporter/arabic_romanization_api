//
// commented lines are for basic letters that require atypical
// English represenation, TBD
//

// Arabeasy romanization scheme
// https://www.academia.edu/7570158/Arabeasy_a_readable_and_typable_Arabic_transliteration_system_and_its_application_in_learning_Arabic_online
exports.arabEasy = {
  " ": { "name" : "space", "unicode": "\u0020" },
  "a": { "name" : "'alif", "unicode": "\u0627"},
  "b": { "name" : "baa'", "unicode": "\u0628"},
  "t": { "name" : "taa'", "unicode": "\u062A"},
  "S": { "name" : "thaa'", "unicode": "\u062B"},
  "g": { "name" : "jiim", "unicode": "\u062C"},
  "v": { "name" : "Haa'", "unicode": "\u062D"},
  "x": { "name" : "khaa'", "unicode": "\u062E"},
  "d": { "name" : "daal", "unicode": "\u062F"},
  "z": { "name" : "dhaal", "unicode": "\u0630"},
  "r": { "name" : "raa'", "unicode": "\u0631"},
  "j": { "name" : "zaay", "unicode": "\u0632"},
  "s": { "name" : "siin", "unicode": "\u0633"},
  "w": { "name" : "shiin", "unicode": "\u0634"},
  "c": { "name" : "Saad", "unicode": "\u0635"},
  "D": { "name" : "Daad", "unicode": "\u0636"},
  "T": { "name" : "Taa'", "unicode": "\u0637"},
  "Z": { "name" : "DHaa'", "unicode": "\u0638"},
  "o": { "name" : "'ain", "unicode": "\u0639"},
  "G": { "name" : "ghayn'", "unicode": "\u063A"},
  "f": { "name" : "faa'", "unicode": "\u0641"},
  "q": { "name" : "qaaf", "unicode": "\u0642"},
  "k": { "name" : "kaaf", "unicode": "\u0643"},
  "l": { "name" : "laam", "unicode": "\u0644"},
  "m": { "name" : "miim", "unicode": "\u0645"},
  "n": { "name" : "nuun", "unicode": "\u0646"},
  "h": { "name" : "haa'", "unicode": "\u0647"},
  "u": { "name" : "waaw", "unicode": "\u0648"},
  "i": { "name" : "yaa'", "unicode": "\u064A"},
  "y": { "name" : "alifmaqsuuraah", "unicode": "\u0649"},
  "'": { "name" : "hamza", "unicode": "\u0621"},

  "e": { "name" : "taa marbuutah", "unicode": "\u0629"},
  "E": { "name" : "alifmaddah", "unicode": "\u0622"},
  "A": { "name" : "'alif with hamza", "unicode": "\u0623"},
  "U": { "name" : "waaw with hamza", "unicode": "\u0624"},
  "I": { "name" : "'alif with lower hamza", "unicode": "\u0625"},
  "-": { "name" : "shadda", "unicode": "\u0651"},

  // vowels
  "á": { "name" : "fathah", "unicode": "\u064E"},
  "ú": { "name" : "dhamma", "unicode": "\u064F"},
  "í": { "name" : "kasra", "unicode": "\u0650"},


  // unsupported characters
  //"": { "name" : "sukun", "unicode": "\u0652"},
  //"_": { "name" : "tatweel", "unicode": "\u0640"} // extension for emphasis
  //                                            // aesthetic choice
  //"N": { "name" : "fathatan", "unicode": "\u064B"},
  //"Y": { "name" : "farsi yeh", "unicode": "\u06cc"},
};

