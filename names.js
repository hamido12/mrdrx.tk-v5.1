var names = {};

names.nameList = [
    
    "ＭＲＤＲＸ.ＴＫ🐅",
  


];

names.getRandomName = function() {
    return names.nameList[Math.floor((Math.random() * names.nameList.length))];
};

module.exports = names;
