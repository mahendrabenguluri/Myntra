function showSection(sectionId, button) {
    document.querySelectorAll('.men, .women, .kids').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'grid';

    document.querySelectorAll('.button').forEach(btn => {
        btn.classList.remove('active');
        // Remove emoji from button text
        btn.innerHTML = btn.innerHTML.replace(/👦🏻|👧🏻|👶🏻/, '');
    });
    button.classList.add('active');
    // Add emoji to button text
    if (sectionId === 'men') {
        button.innerHTML = '👦🏻' + button.innerHTML;
    } else if (sectionId === 'women') {
        button.innerHTML = '👧🏻 ' + button.innerHTML;
    } else if (sectionId === 'kids') {
        button.innerHTML = '👶🏻' + button.innerHTML;
    }
}
