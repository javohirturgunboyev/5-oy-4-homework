function changeStyles(style) {
    var blocks = document.querySelectorAll('.block');

    blocks.forEach(function(block) {
        block.style.backgroundColor = getComputedStyle(document.body).getPropertyValue('--' + style);
    });
}
