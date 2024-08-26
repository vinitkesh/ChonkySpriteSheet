document.querySelectorAll('.Character_sprite_click').forEach(function (character) {
    character.style.position = 'absolute'; // Ensure the character can move freely

    let lastTop = 0; // Use null to indicate that there is no previous top value initially

    character.addEventListener('click', function () {
        // Get the current top value, or default to '0px' if it's not set
        let top = window.getComputedStyle(this).top;
        let numericTop = parseInt(top, 10);

        if (numericTop !== -200) {
            // Store the current top value before changing it
            lastTop = top;
            this.style.top = '-200px';
            this.animation = 'none';
        } else {
            // Restore the previous top value
            this.style.top = lastTop || '0px'; // Fallback to '0px' if lastTop is null
        }
    });
});
