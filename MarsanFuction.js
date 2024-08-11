document.getElementById("changeFbImg").addEventListener("mouseover", overFb);

function overFb(){
    document.getElementById("changeFbImg").src = "FacebookLogo_GrayHovered.png";
}

document.getElementById("changeFbImg").addEventListener("mouseout", outFb);

function outFb(){
    document.getElementById("changeFbImg").src = "FacebookLogo.png";
}



document.getElementById("instagram_hover").addEventListener("mouseover", function overIns(){
    document.getElementById("changeInsImg").src = "InstagramLogo_GrayHovered.png";
});

document.getElementById("instagram_hover").addEventListener("mouseout", function outIns(){
    document.getElementById("changeInsImg").src = "InstagramLogo.png";
});



function overTwt(){
    document.getElementById("changeTwt").src = "TwiterLogo_GrayHovered.png";
}

function outTwt(){
    document.getElementById("changeTwt").src = "TwiterLogo.png";
}




