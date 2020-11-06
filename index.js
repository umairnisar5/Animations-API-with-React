var cloudElement = document.getElementById("cloud-div");


 var  animatedElem = cloudElement.animate([
    { transform: "translate(0 , 0 )" },
    { transform:  "translate(600px , 0)"  },


], {
    duration: 5000,
    iterations: Infinity,
    playbackRate: -4,
})