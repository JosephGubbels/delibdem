// this JS is from https://github.com/compdemocracy/polis-embed-examples/

var convoID = "9rdtdhzjte"
// YGB - 5r7cbwb9cv
// demo - 9rdtdhzjte
var topic = "false"
var description = "false"
var write = "true"
var vote = "true"
var visualization = "true"
var UI_lang = ""
var icon = "https://ndp.ca/sites/all/themes/canadandp.themes/canadandp-polis/blocks/block--polis-page/images/ndp-orange.png"
// my site default = "https://delibdem.com/icon/delib-dem.png"
// NDP convo default = "https://ndp.ca/sites/all/themes/canadandp.themes/canadandp-polis/blocks/block--polis-page/images/ndp-orange.png"
var name = "NDP"

function buildEmbedDiv(xid) {
  return "<div class='polis' data-ucst='" + topic + "' data-ucsd='" + description + "' data-ucsf='false' data-ucsv='" + visualization + "' data-conversation_id='" + convoID + "' data-ucw='" + write + "' data-ucv='" + vote + "' data-xid='" + xid + "' data-ui_lang='" + UI_lang + "' data-x_name='" + name + "' data-x_profile_image_url='" + icon + "'></div>"
}
// documentation for embed paramters: https://compdemocracy.org/embed-code/

if (localStorage.polisUserXID) {
  console.log("Existing polisUserXID found:", localStorage.polisUserXID)
} else {
  var userXID = uuidv4()
  console.log("Assigning new polisUserXID:", userXID)
  localStorage.polisUserXID = userXID
}

var embedScript = document.createElement("script");
embedScript.setAttribute("src", "https://delibdem.com/embed-blue.js")

//default embed: https://pol.is/embed.js
//local default: https://delibdem.com/embed.js
//local orange: https://delibdem.com/embed-orange.js
//local blue: https://delibdem.com/embed-blue.js

var polisContainer = document.getElementById("polis-container")
polisContainer.innerHTML = buildEmbedDiv(localStorage.polisUserXID)
polisContainer.appendChild(embedScript)
