$(function(){ 
    var myImage = document.getElementById('swagBunny');
    myImage.onclick = function() {
        var mySrc = myImage.getAttribute('src');
        var line = document.getElementById("line");
        if(mySrc === 'images/large.jpg') {
            myImage.setAttribute ('src','images/images.jpg');
            line.innerHTML("Or you'll be slippin' and trippin' on my lippen rage");
        } else {
            myImage.setAttribute ('src','images/large.jpg');
            line.innerHTML("Best be using caution when trying to bid in my auction");
        }
    };
});

