document.getElementById('generate-log').addEventListener('click', () => {
    const practiceDate = new Date(document.getElementById('practice-date').value);
    const startPrayer = document.getElementById('start-prayer').value;    const endPrayer = document.getElementById('end-prayer').value;    const conductor = document.getElementById('conductor').value;    const believerPractice = document.getElementById('believer-practice').value;    const pianist = document.getElementById('pianist').value;    const femaleMembers = document.getElementById('female-members').value.split('\n').join(' ');    const maleMembers = document.getElementById('male-members').value.split('\n').join(' ');    const practiceSongNumbers = document.getElementById('practice-song-numbers').value.split('\n');    const practiceSongTitles = document.getElementById('practice-song-titles').value.split('\n');    const extraSongNumbers = document.getElementById('extra-song-numbers').value.split('\n');    const extraSongTitles = document.getElementById('extra-song-titles').value.split('\n');    const year = practiceDate.getFullYear();
    const month = String(practiceDate.getMonth() + 1).padStart(2, '0');
    const day = String(practiceDate.getDate()).padStart(2, '0');
    const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'][practiceDate.getDay()];

    let outputText = `📝연습일지📝\n`;
    outputText += ` ${year}.${month}.${day} ${dayOfWeek}\n`;
    outputText += `#${year}${month}${day}\n\n`;
    outputText += `시작기도 : ${startPrayer || '-'}\n`;    outputText += `마침기도 : ${endPrayer || '-'}\n`;    outputText += `🙆🏻‍♀참석단원🙆‍♂\n`;    outputText += `- 연습 진행 : ${conductor || '-'}\n`;    outputText += `- 신자 연습: ${believerPractice || '-'}\n`;    outputText += `- 반주 : ${pianist || '-'}\n`;    outputText += `- 여성 : ${femaleMembers || '-'}\n`;    outputText += `- 남성 : ${maleMembers || '-'}\n\n`;    outputText += `🎵 연습곡 🎵\n`;    if (entranceSongNumbers.length > 0 && entranceSongNumbers[0] !== '') {        let entranceOutput = entranceSongNumbers.map((num, i) => `${num} ${entranceSongTitles[i] || ''}`).join('\n         ');        outputText += `입당 : ${entranceOutput}\n`;    }    if (offertorySongNumbers.length > 0 && offertorySongNumbers[0] !== '') {        let offertoryOutput = offertorySongNumbers.map((num, i) => `${num} ${offertorySongTitles[i] || ''}`).join('\n         ');        outputText += `봉헌 : ${offertoryOutput}\n`;    }    if (communionSongNumbers.length > 0 && communionSongNumbers[0] !== '') {        let communionOutput = communionSongNumbers.map((num, i) => `${num} ${communionSongTitles[i] || ''}`).join('\n         ');        outputText += `성체 : ${communionOutput}\n`;    }    if (dismissalSongNumbers.length > 0 && dismissalSongNumbers[0] !== '') {        let dismissalOutput = dismissalSongNumbers.map((num, i) => `${num} ${dismissalSongTitles[i] || ''}`).join('\n         ');        outputText += `파견 : ${dismissalOutput}\n`;    }    if (extraSongNumbers.length > 0 && extraSongNumbers[0] !== '') {
        let extraOutput = extraSongNumbers.map((num, i) => `${num} ${extraSongTitles[i] || ''}`).join('\n         ');
        outputText += `추가 연습곡 : ${extraOutput}\n`;
    }

    if (holyHolyHoly) {
        outputText += `\n거룩하시도다\n`;
    }
    if (kyrie) {
        outputText += `자비송\n`;
    }
    if (agnusDei) {
        outputText += `하느님의 어린양\n`;
    }    document.getElementById('output').textContent = outputText;});
