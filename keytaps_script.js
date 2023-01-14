var keycaps = document.getElementsByClassName("keycaps");
var i;

var perspectiveValue = 0;
var keyboardStyleValue = 0;

var sceneBackgrounds = [
    "linear-gradient(to right, #050505 , #1c1c1c)",
    "rgba(240,240,240,1)",
    "rgba(228,240,255,1)",
    "lightpink",
    "radial-gradient(circle, rgba(255,222,141,1) 30%, rgba(234,214,55,1) 100%)"
];

var keyboardColors = [
    "rgb(10, 10, 10)",
    "white",
    "#a6daff",
    "#ffccd5",
    "#FFFFE0"
];

var regularKeycapsColors = [
    "rgb(26, 26, 26)",
    "lightgray",
    "#d6eeff",
    "#FFC0CB",
    "khaki"
];

var bigKeycapsColors = [
    "rgb(56, 56, 56)",
    "gray",
    "lightblue",
    "#ffa1a1",
    "yellow"
];

var keycapsShadows = [
    "rgba(0, 0, 0, 0.2) 0px 12px 12px",
    "rgba(0, 0, 0, 0.2) -10px 8px 12px",
    "rgba(0, 0, 0, 0.2) -4px -4px 12px",
    "rgba(0, 0, 0, 0.2) 12px 4px 10px"
];

var keycapsShadowsPressed = [
    "rgba(255, 255, 255, 0.03) 0px 0px 6px",
    "rgba(255, 255, 255, 0.03) -6px 6px 6px",
    "rgba(255, 255, 255, 0.03) -6px 6px 6px",
    "rgba(255, 255, 255, 0.03) -6px 6px 6px"
];
var perspectivesKeyboard = [
    "rotateX(64deg) translateX(-50%) translateY(-50%)",
    "rotateX(74deg) rotateY(4deg) rotateZ(-60deg) translateY(-100%)",
    "rotateZ(-180deg) translateX(100%) translateY(50%)",
    "rotateX(26deg) rotateY(-60deg) rotateZ(18deg) translateX(-50%)"
];

var introTransforms = [
    "translateX(-50%) translateY(-114%)",
    "translateX(-80%) translateY(-100%)",
    "translateX(10%) translateY(-50%)",
    "translateX(-80%) translateY(-110%)"
];

document.addEventListener('keydown', function(event) {
    PressKey(event.code);
});

document.addEventListener('keyup', function(event) {
    ReleaseKey(event.code);
});

function PressKey(key) {
    document.getElementById(key).style.transform = "translateZ(-6px)";
    document.getElementById(key).style.boxShadow = "rgba(255, 255, 255, 0.03) 0px 0px 6px";
    document.getElementById(key).style.backgroundColor = "rgba(255, 99, 71, 1)";
}

function ReleaseKey(key) {
    document.getElementById(key).style.transform = "translateZ(0px)";
    document.getElementById(key).style.boxShadow = keycapsShadows[perspectiveValue];

    if (document.getElementById(key).classList.contains("regular_keys")) {
        document.getElementById(key).style.backgroundColor = regularKeycapsColors[keyboardStyleValue];
    } else {
        document.getElementById(key).style.backgroundColor = bigKeycapsColors[keyboardStyleValue];
    }
}

function doPerspective(update) {
    perspectiveValue += update;
    if (perspectiveValue == 4) {
        perspectiveValue = 0;
    }
    document.getElementById("keyboard_bottom").style.transform = perspectivesKeyboard[perspectiveValue];
    document.getElementById("intro").style.transform = introTransforms[perspectiveValue];

    for (i = 0; i < keycaps.length; i++) {
        keycaps[i].style.boxShadow = keycapsShadows[perspectiveValue];
    }
}

function doKeyboardStyle(update) {
    keyboardStyleValue += update;
    if (keyboardStyleValue == 5) {
        keyboardStyleValue = 0;
    }
    document.getElementById("scene").style.background = sceneBackgrounds[keyboardStyleValue];
    document.getElementById("keyboard_bottom").style.backgroundColor = keyboardColors[keyboardStyleValue];

    document.getElementById("mainTitle").style.color = keyboardColors[keyboardStyleValue];
    document.getElementById("mainTitle").style.textShadow = bigKeycapsColors[keyboardStyleValue] + " 6px 6px 0px, " + bigKeycapsColors[keyboardStyleValue] + " 0px 0px 3px";

    for (i = 0; i < 74; i++) {
        if (keycaps[i].classList.contains("regular_keys")) {
            keycaps[i].style.backgroundColor = regularKeycapsColors[keyboardStyleValue];
        } else {
            keycaps[i].style.backgroundColor = bigKeycapsColors[keyboardStyleValue];
        }
    }

    for (i = 0; i < 2; i++) {
        document.getElementsByClassName("toggles")[i].style.backgroundColor = keyboardColors[keyboardStyleValue];
    }
}

function firsts() {
    doKeyboardStyle(0);
    setTimeout(animateIn, 6000);
}

function animateIn() {
    document.getElementById("creatorTag").style.opacity = "1";
    document.getElementById("intro").style.opacity = "1";
    document.getElementById("menu").style.opacity = "1";
    document.getElementById("helloworld").style.display = "none";
    doPerspective(0);
}