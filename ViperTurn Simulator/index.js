var lastKey = null;
var count = 0;
function input(e, type="default") {
    if(lastKey != e.innerHTML.split(/[><]+/)[2]){
        lastKey = e.innerHTML.split(/[><]+/)[2];
        var Repeat = false;
    } else {
        Repeat = true;
        count++;
        if(count == 2){
            Repeat = false;
            count = 0;
        }
    }
    console.log("| Key:", e.innerHTML.split(/[><]+/)[2], "Type:", type, "Repeat: ", Repeat, '|');
};