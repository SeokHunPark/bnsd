document.getElementById('generate-log').addEventListener('click', () => {
    const practiceDate = new Date(document.getElementById('practice-date').value);
    const startPrayer = document.getElementById('start-prayer').value;    const endPrayer = document.getElementById('end-prayer').value;    const conductor = document.getElementById('conductor').value;    const believerPractice = document.getElementById('believer-practice').value;    const pianist = document.getElementById('pianist').value;    const femaleMembers = document.getElementById('female-members').value.split('\n').join(' ');    const maleMembers = document.getElementById('male-members').value.split('\n').join(' ');    const entranceSongNumbers = document.getElementById('entrance-song-numbers').value.split('\n');
    const entranceSongTitles = document.getElementById('entrance-song-titles').value.split('\n');
    const offertorySongNumbers = document.getElementById('offertory-song-numbers').value.split('\n').slice(0, 3);
    const offertorySongTitles = document.getElementById('offertory-song-titles').value.split('\n').slice(0, 3);
    const communionSongNumbers = document.getElementById('communion-song-numbers').value.split('\n').slice(0, 3);
    const communionSongTitles = document.getElementById('communion-song-titles').value.split('\n').slice(0, 3);
    const communionSpecialSong = document.getElementById('communion-special-song').value;
    const dismissalSongNumbers = document.getElementById('dismissal-song-numbers').value.split('\n');
    const dismissalSongTitles = document.getElementById('dismissal-song-titles').value.split('\n');
    const extraSongNumbers = document.getElementById('extra-song-numbers').value.split('\n');
    const extraSongTitles = document.getElementById('extra-song-titles').value.split('\n');
