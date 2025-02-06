var eesnimi = "Juku";
var vanus = 18;
console.log("abc");
console.log("Tere, " + eesnimi);
if (vanus < 7) {
    console.log("Tasuta");
}
else {
    if (vanus < 18) {
        console.log("Osta lapsepiletpilet");
    }
    else {
        console.log("Osta täispilet");
    }
    //Teata, kas tuleb osta lapsepilet või täispilet
}
var symbolid = [];
for (var i = 0; i < vanus; i++) {
    symbolid.push("*");
}
console.log(symbolid.join(""));
