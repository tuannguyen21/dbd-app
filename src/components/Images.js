export var perks=[];

for (let i=0; i<80; i++) {
  var path = require("../../public/perks/perk" + i + ".png");
  var perk = {pathVar: path, valueVar: i};
  perks.push(perk);
}