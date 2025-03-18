// Calendar Data
const upcomingVideos = [
    { date: '2024-03-23', title: 'Minecraft Hardcore: Der gefährlichste erste Tag!', type: 'Minecraft' },
    { date: '2024-03-28', title: 'Fortnite Mythos: Ist das wirklich möglich?!', type: 'Fortnite' },
    { date: '2024-03-31', title: 'Minecraft Osterevent: Das geheime Ei?', type: 'Minecraft' },
    { date: '2024-04-03', title: 'Fortnite: Die krasseste Runde EVER?!', type: 'Fortnite' },
    { date: '2024-04-06', title: 'Minecraft 100 Days: So OP war ich noch nie!', type: 'Minecraft' },
    { date: '2024-04-09', title: 'Fortnite vs. Minecraft: Wer ist der bessere Speedrunner?', type: 'Mix' }
];


// Populate Calendar
function populateCalendar() {
    const calendarGrid = document.querySelector('.calendar-grid');
    upcomingVideos.forEach(video => {
        const event = document.createElement('div');
        event.className = 'calendar-event';
        const date = new Date(video.date).toLocaleDateString('de', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        event.innerHTML = `
            <h3>${video.title}</h3>
            <p>${date}</p>
            <p>Art: ${video.type}</p>
        `;
        calendarGrid.appendChild(event);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populateCalendar();
    new BlockCatcher();
});