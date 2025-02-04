let header = document.querySelector('#intro');
let anim = [
    { t: "[ ]", ms: 200 },
    { t: "[_]", ms: 200 },
    { t: "[ ]", ms: 200 },
    { t: "[_]", ms: 200 },
    { t: "[A_]", ms: 100 },
    { t: "[AL_]", ms: 100 },
    { t: "[ALE_]", ms: 100 },
    { t: "[ALEX_]", ms: 100 },
    { t: "[ALEX _]", ms: 100 },
    { t: "[ALEX W_]", ms: 100 },
    { t: "[ALEX WA_]", ms: 100 },
    { t: "[ALEX WAR_]", ms: 100 },
    { t: "[ALEX WARW_]", ms: 100 },
    { t: "[ALEX WARWI_]", ms: 100 },
    { t: "[ALEX WARWIC_]", ms: 100 },
    { t: "[ALEX WARWICK_]", ms: 200 },
    { t: "[ALEX WARWICK ]", ms: 200 },
    { t: "[ALEX WARWICK_]", ms: 200 },
    { t: "[ALEX WARWICK ]", ms: 200 },
    { t: "[ALEX WARWICK_]", ms: 200 },
    { t: "[ALEX WARWICK]", ms: 200 },
    { t: "[ALEX WARWICK]", ms: 200 },
];
let stepDenominator = 1;
if (window.localStorage.stepDenominator)
    stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let update = () => {
    let step = anim[i];
    header.innerText = step.t;
    i++;

    if (i < anim.length)
        setTimeout(update, step.ms / stepDenominator);
    else {
        header.classList.add('top');
        setTimeout(() => {
            document.getElementById('main').style.opacity = 1;
            initGlobe();
        }, 500);
        window.localStorage.stepDenominator = 2;
    }
}
update();