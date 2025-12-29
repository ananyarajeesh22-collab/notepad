const noteArea = document.getElementById('note-area');
const saveBtn = document.getElementById('save-btn');
const clearBtn = document.getElementById('clear-btn');

// Load saved note from local storage
noteArea.value = localStorage.getItem('note') || '';

saveBtn.addEventListener('click', () => {
    localStorage.setItem('note', noteArea.value);
    alert('Note saved!');
});

clearBtn.addEventListener('click', () => {
    noteArea.value = '';
    localStorage.removeItem('note');
    alert('Note cleared!');
});