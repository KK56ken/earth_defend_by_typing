var moji = ""
document.onkeydown = function(e) {
    var key = false;
 
    if (e) Event = e;
 
    if (Event) {
        if (Event.key) {
            key = Event.key;
        } else if (Event.which) {
            key = Event.which;
        }
    }
    getkey(key)
    jude()
};

function getkey(k) {
    moji = k
}e(
function jude(){
    if(moji === "h") {
        document.getElementById("test").innerHTML = "H"
    console.log("test")
    };
}