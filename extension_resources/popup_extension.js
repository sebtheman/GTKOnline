var html = document.createElement('div');
    html.innerHTML = '<button id="clickMe">Change styling to GTK</button>';
document.body.appendChild(html);

document.getElementById('clickMe').addEventListener('click', function() {
    var x = document.getElementById('clickMe');
    if (x.textContent == "Change styling to GTK") {
        document.getElementById('clickMe').textContent="Change styling to Classic";
    }
    else {
        document.getElementById('clickMe').textContent="Change styling to GTK";
    }
});

document.getElementById('testButton').addEventListener('click', function() {
    var x = document.getElementById('testButton');
    x.textContent = "Test worked";
});
/*
document.getElementById('stateOfExtensionCheckbox').addEventListener('click', function() {
    const checkbox = document.getElementById('stateOfExtensionCheckbox');
    console.log("Is the checkbox checked?");
    console.log(checkbox.checked);
    if (checkbox.checked == "true") {
        checkbox.checked = "false";
        var stateOfCheckbox = "false";
        localStorage.setItem("stateOfExtensionButtonCheckbox", stateOfCheckbox);
        console.log("State of checkbox in local storage:");
        var testingvar = localStorage.getItem("stateOfExtensionButtonCheckbox");
        console.log(testingvar);
    }
    else {
        checkbox.checked = "true";
        var stateOfCheckbox = "true";
        localStorage.setItem("stateOfExtensionButtonCheckbox", stateOfCheckbox);
        console.log("State of checkbox in local storage:");
        var testingvar = localStorage.getItem("stateOfExtensionButtonCheckbox");
        console.log(testingvar);
    }
    console.log(checkbox.checked);
});
*/

document.getElementById('stateOfExtensionCheckbox').addEventListener('click', function() {
    var checkboxState = document.getElementById("stateOfExtensionCheckbox").checked;
    console.log("Is the checkbox checked?");
    console.log(checkboxState);
    if (checkboxState === "true") {
        console.log("If statement says checkbox is checked");
    } else {
        console.log("If statement says checkbox is not checked");
    }
});

/*
window.onload = function() {
    var checkboxState = localStorage.getItem("stateOfExtensionButtonCheckbox");
    checkboxStateSetter = document.getElementById('stateOfExtensionCheckbox');
    if (checkboxState == "checked") {
        checkboxStateSetter.checked = "true";
    }
    else {
        checkboxStateSetter.checked = "false";
    }
    console.log("Set state of checkbox to: (onload)");
    console.log(checkboxStateSetter.checked);
}
*/


