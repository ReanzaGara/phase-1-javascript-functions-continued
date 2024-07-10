// code your solution here
function saturdayFun(activity = 'roller-skate') {
    if(activity) {
        return (`This Saturday, I want to ${activity}!`);
    }
    else {
        return ('This Saturday, I want to bathe my dog!');
    }
}

function mondayWork(activity = 'go to the office') {
    if(activity) {
        return (`This Monday, I will ${activity}.`);
    }
    else {
        return (`This Monday, I will work from home.`);
    }
}

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    }

}