var html = document.createElement('div');
    html.innerHTML = '<button id="clickMe">Change styling to GDK</button>';
document.body.appendChild(html);

document.getElementById('clickMe').addEventListener('click', function() {
    var x = document.getElementById('clickMe');
    if (x.textContent == "Change styling to GDK") {
        document.getElementById('clickMe').textContent="Change styling to Classic";
    }
    else {
        document.getElementById('clickMe').textContent="Change styling to GDK";
    }
});