function input(e, type="default") {
    console.log(e.innerHTML.split(/[><]+/)[2], "Type: " + type)
    //this is where it will add to the monitor/screen
};