document.getElementById('stateOfExtensionCheckbox').addEventListener('click', function() {
    const checkbox = document.getElementById('stateOfExtensionCheckbox');
    console.log("Is the checkbox checked?");
    console.log(checkbox.checked);
    if (checkbox.checked == true) {
        checkbox.checked = true;
        var stateOfCheckbox = true;
        localStorage.setItem("stateOfExtensionButtonCheckbox", stateOfCheckbox);
        console.log("State of checkbox in local storage:");
        var testingvar = localStorage.getItem("stateOfExtensionButtonCheckbox");
        console.log(testingvar);
    }
    else {
        checkbox.checked = false;
        var stateOfCheckbox = false;
        localStorage.setItem("stateOfExtensionButtonCheckbox", stateOfCheckbox);
        console.log("State of checkbox in local storage:");
        var testingvar = localStorage.getItem("stateOfExtensionButtonCheckbox");
        console.log(testingvar);
    }
    console.log(checkbox.checked);
});



window.onload = function() {
    var checkboxState = localStorage.getItem("stateOfExtensionButtonCheckbox");
    var checkboxStateSetter = document.getElementById('stateOfExtensionCheckbox');
    if (checkboxState == "true") {
        checkboxStateSetter.checked = true;
    }
    else {
        checkboxStateSetter.checked = false;
    }
    console.log("Set state of checkbox to: (onload)");
    console.log(checkboxStateSetter.checked);
}



