This is a (very) barebones proof-of-concept for an Arabic romanization API.

Tentatively supports ArabEasy romanization scheme: [ArabEasy Homepage](http://arabeasy.net/) and [Academic writeup](https://www.academia.edu/7570158/Arabeasy_a_readable_and_typable_Arabic_transliteration_system_and_its_application_in_learning_Arabic_online). ArabEasy was chosen primarily for it's compatibility with typical English-language keyboards, reversible design, and overall simplicity. I highly recommend reading more about it's design in the provided links.

API interface is pre-design.

Welcome!

##To Try It

Start Server

```
npm install; npm start
```

Run Example

```
sh example.js
```

Or execute with cURL directly:

(**N.B. "text" can be either romanized or Arabic script copied from another source**):

```
curl -X GET -v \
-H "Content-Type:application/json" \
http://localhost:3000/test \
-d '{"text": "your text here"}'

curl -X GET -v \
-H "Content-Type:application/json" \
http://localhost:3000/test \
-d '{"text": "با"}'
```

##Notes

* built using Node v0.12.4
* requires ES6 generators and block scoping
* API does not currently support sending characters as the literal Unicode codepoint (i.e. ```-d '{"text": "\u0636"}'```)

