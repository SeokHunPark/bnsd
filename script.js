document.getElementById('generate-log').addEventListener('click', () => {
    console.log('Button clicked!'); // Diagnostic log

    try {
        const practiceDateValue = document.getElementById('practice-date').value;
        const practiceDate = practiceDateValue ? new Date(practiceDateValue) : null;

        const startPrayer = document.getElementById('start-prayer').value;
        const endPrayer = document.getElementById('end-prayer').value;
        const conductor = document.getElementById('conductor').value;
        const believerPractice = document.getElementById('believer-practice').value;
        const pianist = document.getElementById('pianist').value;
        const femaleMembers = document.getElementById('female-members').value.split('\n').join(' ');
        const maleMembers = document.getElementById('male-members').value.split('\n').join(' ');

        const entranceSongNumbers = document.querySelector('#entrance-song-numbers').value;
        const entranceSongTitles = document.querySelector('#entrance-song-titles').value;

        const offertorySongNumbers = [
            document.getElementById('offertory-song-number-1').value,
            document.getElementById('offertory-song-number-2').value,
            document.getElementById('offertory-song-number-3').value
        ];
        const offertorySongTitles = [
            document.getElementById('offertory-song-title-1').value,
            document.getElementById('offertory-song-title-2').value,
            document.getElementById('offertory-song-title-3').value
        ];

        const communionSongNumbers = [
            document.getElementById('communion-song-number-1').value,
            document.getElementById('communion-song-number-2').value,
            document.getElementById('communion-song-number-3').value
        ];
        const communionSongTitles = [
            document.getElementById('communion-song-title-1').value,
            document.getElementById('communion-song-title-2').value,
            document.getElementById('communion-song-title-3').value
        ];
        const communionSpecialSong = document.getElementById('communion-special-song').value;

        const dismissalSongNumbers = document.querySelector('#dismissal-song-numbers').value;
        const dismissalSongTitles = document.querySelector('#dismissal-song-titles').value;

        const extraSongs = document.getElementById('extra-songs').value.split('\n');

        let year = '-';
        let month = '-';
        let day = '-';
        let dayOfWeek = '-';

        if (practiceDate && !isNaN(practiceDate)) {
            year = practiceDate.getFullYear();
            month = String(practiceDate.getMonth() + 1).padStart(2, '0');
            day = String(practiceDate.getDate()).padStart(2, '0');
            dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'][practiceDate.getDay()];
        }

        let outputText = `📝연습일지📝\n`;
        outputText += ` ${year}.${month}.${day} ${dayOfWeek}\n`;
        outputText += `#${year}${month}${day}\n\n`;
        outputText += `시작기도 : ${startPrayer || '-'}\n`;
        outputText += `마침기도 : ${endPrayer || '-'}\n`;
        outputText += `🙆🏻‍♀참석단원🙆‍♂\n`;
        outputText += `- 연습 진행 : ${conductor || '-'}\n`;
        outputText += `- 신자 연습: ${believerPractice || '-'}\n`;
        outputText += `- 반주 : ${pianist || '-'}\n`;
        outputText += `- 여성 : ${femaleMembers || '-'}\n`;
        outputText += `- 남성 : ${maleMembers || '-'}\n\n`;
        outputText += `🎵 연습곡 🎵\n`;

        if (entranceSongNumbers || entranceSongTitles) {
            outputText += `입당 : ${entranceSongNumbers} ${entranceSongTitles}\n`;
        }

        let offertoryOutput = [];
        for (let i = 0; i < 3; i++) {
            if (offertorySongNumbers[i] || offertorySongTitles[i]) {
                offertoryOutput.push(`${offertorySongNumbers[i] || ''} ${offertorySongTitles[i] || ''}`);
            }
        }
        if (offertoryOutput.length > 0) {
            outputText += `봉헌 : ${offertoryOutput.join('\n         ')}\n`;
        }

        let communionOutput = [];
        for (let i = 0; i < 3; i++) {
            if (communionSongNumbers[i] || communionSongTitles[i]) {
                communionOutput.push(`${communionSongNumbers[i] || ''} ${communionSongTitles[i] || ''}`);
            }
        }
        if (communionOutput.length > 0) {
            outputText += `성체 : ${communionOutput.join('\n         ')}\n`;
        }
        if (communionSpecialSong) {
            outputText += `         ${communionSpecialSong}\n`;
        }

        if (dismissalSongNumbers || dismissalSongTitles) {
            outputText += `파견 : ${dismissalSongNumbers} ${dismissalSongTitles}\n`;
        }

        if (extraSongs.length > 0 && extraSongs[0] !== '') {
            outputText += `그 외 추가 할 내용 : ${extraSongs.join('\n         ')}\n`;
        }

        document.getElementById('output').textContent = outputText;
    } catch (error) {
        console.error('Error generating log:', error);
        document.getElementById('output').textContent = '오류 발생: ' + error.message;
    }
});

document.getElementById('copy-log').addEventListener('click', () => {
    const outputText = document.getElementById('output').textContent;
    navigator.clipboard.writeText(outputText).then(() => {
        alert('연습 일지 결과가 클립보드에 복사되었습니다!');
    }).catch(err => {
        console.error('클립보드 복사 실패:', err);
        alert('클립보드 복사에 실패했습니다. 수동으로 복사해주세요.');
    });
});