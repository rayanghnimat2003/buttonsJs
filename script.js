document.getElementById('increaseButton').addEventListener('click', function() {
    increaseFontSize(30);
});

document.getElementById('decreaseButton').addEventListener('click', function() {
    decreaseFontSize(10);
});

function increaseFontSize(f) {
    var content = document.getElementById('content');
    content.style.fontSize = f + 'px';
}
function decreaseFontSize(f) {
    var content = document.getElementById('content');
    content.style.fontSize = f + 'px';
}