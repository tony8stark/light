const schedule = {
    "Група 1": {
        "Понеділок": [
            { start: 0, end: 1, status: 'maybe' },
            { start: 1, end: 2, status: 'on' },
            { start: 2, end: 4, status: 'off' },
            { start: 4, end: 6, status: 'maybe' },
            { start: 6, end: 10, status: 'on' },
            { start: 10, end: 13, status: 'off' },
            { start: 13, end: 16, status: 'maybe' },
            { start: 16, end: 19, status: 'on' },
            { start: 19, end: 22, status: 'off' },
            { start: 22, end: 24, status: 'maybe' }
        ],
        "Вівторок": [
            { start: 0, end: 3, status: 'on' },
            { start: 3, end: 6, status: 'off' },
            { start: 6, end: 9, status: 'maybe' },
            { start: 9, end: 13, status: 'on' },
            { start: 13, end: 16, status: 'off' },
            { start: 16, end: 19, status: 'maybe' },
            { start: 19, end: 22, status: 'on' },
            { start: 22, end: 24, status: 'off' }
        ],
        "Середа": [
            { start: 0, end: 3, status: 'maybe' },
            { start: 3, end: 7, status: 'on' },
            { start: 7, end: 10, status: 'off' },
            { start: 10, end: 13, status: 'maybe' },
            { start: 13, end: 16, status: 'on' },
            { start: 16, end: 19, status: 'off' },
            { start: 19, end: 22, status: 'maybe' },
            { start: 22, end: 24, status: 'on' }
        ],
        "Четвер": [
            { start: 0, end: 3, status: 'off' },
            { start: 3, end: 6, status: 'maybe' },
            { start: 6, end: 10, status: 'on' },
            { start: 10, end: 13, status: 'off' },
            { start: 13, end: 16, status: 'maybe' },
            { start: 16, end: 19, status: 'on' },
            { start: 19, end: 22, status: 'off' },
            { start: 22, end: 24, status: 'maybe' }
        ],
        "П'ятниця": [
            { start: 0, end: 3, status: 'on' },
            { start: 3, end: 6, status: 'off' },
            { start: 6, end: 9, status: 'maybe' },
            { start: 9, end: 13, status: 'on' },
            { start: 13, end: 16, status: 'off' },
            { start: 16, end: 19, status: 'maybe' },
            { start: 19, end: 22, status: 'on' },
            { start: 22, end: 24, status: 'off' }
        ],
        "Субота": [
            { start: 0, end: 3, status: 'maybe' },
            { start: 3, end: 7, status: 'on' },
            { start: 7, end: 10, status: 'off' },
            { start: 10, end: 13, status: 'maybe' },
            { start: 13, end: 16, status: 'on' },
            { start: 16, end: 19, status: 'off' },
            { start: 19, end: 22, status: 'maybe' },
            { start: 22, end: 24, status: 'on' }
        ],
        "Неділя": [
            { start: 0, end: 3, status: 'off' },
            { start: 3, end: 6, status: 'maybe' },
            { start: 6, end: 10, status: 'on' },
            { start: 10, end: 13, status: 'off' },
            { start: 13, end: 16, status: 'maybe' },
            { start: 16, end: 19, status: 'on' },
            { start: 19, end: 22, status: 'off' },
            { start: 22, end: 24, status: 'maybe' }
        ]
    },
    "Група 2": {
        "Понеділок": [
            { start: 0, end: 2, status: 'maybe' },
            { start: 2, end: 3, status: 'on' },
            { start: 3, end: 5, status: 'off' },
            { start: 5, end: 7, status: 'maybe' },
            { start: 7, end: 10, status: 'on' },
            { start: 10, end: 13, status: 'off' },
            { start: 13, end: 16, status: 'maybe' },
            { start: 16, end: 19, status: 'on' },
            { start: 19, end: 22, status: 'off' },
            { start: 22, end: 24, status: 'maybe' }
        ],
        "Вівторок": [
            { start: 0, end: 1, status: 'maybe' },
            { start: 1, end: 4, status: 'on' },
            { start: 4, end: 7, status: 'off' },
            { start: 7, end: 10, status: 'maybe' },
            { start: 10, end: 13, status: 'on' },
            { start: 13, end: 16, status: 'off' },
            { start: 16, end: 19, status: 'maybe' },
            { start: 19, end: 23, status: 'on' },
            { start: 23, end: 24, status: 'off' }
        ],
        "Середа": [
            { start: 0, end: 1, status: 'off' },
            { start: 1, end: 4, status: 'maybe' },
            { start: 4, end: 7, status: 'on' },
            { start: 7, end: 10, status: 'off' },
            { start: 10, end: 13, status: 'maybe' },
            { start: 13, end: 16, status: 'on' },
            { start: 16, end: 19, status: 'off' },
            { start: 19, end: 22, status: 'maybe' },
            { start: 22, end: 24, status: 'on' }
        ],
        "Четвер": [
            { start: 0, end: 1, status: 'on' },
            { start: 1, end: 4, status: 'off' },
            { start: 4, end: 7, status: 'maybe' },
            { start: 7, end: 10, status: 'on' },
            { start: 10, end: 13, status: 'off' },
            { start: 13, end: 16, status: 'maybe' },
            { start: 16, end: 19, status: 'on' },
            { start: 19, end: 22, status: 'off' },
            { start: 22, end: 24, status: 'maybe' }
        ],
        "П'ятниця": [
            { start: 0, end: 1, status: 'off' },
            { start: 1, end: 4, status: 'on' },
            { start: 4, end: 7, status: 'off' },
            { start: 7, end: 10, status: 'maybe' },
            { start: 10, end: 13, status: 'on' },
            { start: 13, end: 16, status: 'off' },
            { start: 16, end: 19, status: 'maybe' },
            { start: 19, end: 23, status: 'on' },
            { start: 23, end: 24, status: 'off' }
        ],
        "Субота": [
            { start: 0, end: 1, status: 'off' },
            { start: 1, end: 4, status: 'maybe' },
            { start: 4, end: 7, status: 'on' },
            { start: 7, end: 10, status: 'off' },
            { start: 10, end: 13, status: 'maybe' },
            { start: 13, end: 16, status: 'on' },
            { start: 16, end: 19, status: 'off' },
            { start: 19, end: 22, status: 'maybe' },
            { start: 22, end: 24, status: 'on' }
        ],
        "Неділя": [
            { start: 0, end: 1, status: 'on' },
            { start: 1, end: 4, status: 'off' },
            { start: 4, end: 7, status: 'maybe' },
            { start: 7, end: 10, status: 'on' },
            { start: 10, end: 13, status: 'off' },
            { start: 13, end: 16, status: 'maybe' },
            { start: 16, end: 19, status: 'on' },
            { start: 19, end: 22, status: 'off' },
            { start: 22, end: 24, status: 'maybe' }
        ]
    },
    "Група 3": {
        "Понеділок": [
            { start: 0, end: 3, status: 'maybe' },
            { start: 3, end: 4, status: 'on' },
            { start: 4, end: 6, status: 'off' },
            { start: 6, end: 9, status: 'maybe' },
            { start: 9, end: 13, status: 'on' },
            { start: 13, end: 16, status: 'off' },
            { start: 16, end: 19, status: 'maybe' },
            { start: 19, end: 21, status: 'on' },
            { start: 21, end: 24, status: 'off' }
        ],
        "Вівторок": [
            { start: 0, end: 3, status: 'maybe' },
            { start: 3, end: 6, status: 'on' },
            { start: 6, end: 9, status: 'off' },
            { start: 9, end: 12, status: 'maybe' },
            { start: 12, end: 15, status: 'on' },
            { start: 15, end: 18, status: 'off' },
            { start: 18, end: 21, status: 'maybe' },
            { start: 21, end: 24, status: 'on' }
        ],
        "Середа": [
            { start: 0, end: 3, status: 'off' },
            { start: 3, end: 6, status: 'maybe' },
            { start: 6, end: 10, status: 'on' },
            { start: 10, end: 13, status: 'off' },
            { start: 13, end: 16, status: 'maybe' },
            { start: 16, end: 18, status: 'on' },
            { start: 18, end: 21, status: 'off' },
            { start: 21, end: 24, status: 'maybe' }
        ],
        "Четвер": [
            { start: 0, end: 3, status: 'on' },
            { start: 3, end: 6, status: 'off' },
            { start: 6, end: 9, status: 'maybe' },
            { start: 9, end: 13, status: 'on' },
            { start: 13, end: 16, status: 'off' },
            { start: 16, end: 19, status: 'maybe' },
            { start: 19, end: 21, status: 'on' },
            { start: 21, end: 24, status: 'off' }
        ],
        "П'ятниця": [
            { start: 0, end: 3, status: 'maybe' },
            { start: 3, end: 6, status: 'on' },
            { start: 6, end: 9, status: 'off' },
            { start: 9, end: 12, status: 'maybe' },
            { start: 12, end: 15, status: 'on' },
            { start: 15, end: 18, status: 'off' },
            { start: 18, end: 21, status: 'maybe' },
            { start: 21, end: 24, status: 'on' }
        ],
        "Субота": [
            { start: 0, end: 3, status: 'off' },
            { start: 3, end: 6, status: 'maybe' },
            { start: 6, end: 10, status: 'on' },
            { start: 10, end: 13, status: 'off' },
            { start: 13, end: 16, status: 'maybe' },
            { start: 16, end: 18, status: 'on' },
            { start: 18, end: 21, status: 'off' },
            { start: 21, end: 24, status: 'maybe' }
        ],
        "Неділя": [
            { start: 0, end: 3, status: 'on' },
            { start: 3, end: 6, status: 'off' },
            { start: 6, end: 9, status: 'maybe' },
            { start: 9, end: 13, status: 'on' },
            { start: 13, end: 16, status: 'off' },
            { start: 16, end: 19, status: 'maybe' },
            { start: 19, end: 21, status: 'on' },
            { start: 21, end: 24, status: 'off' }
        ]
    },
    "Група 4": {
        "Понеділок": [
            { start: 0, end: 4, status: 'maybe' },
            { start: 4, end: 5, status: 'on' },
            { start: 5, end: 8, status: 'off' },
            { start: 8, end: 10, status: 'maybe' },
            { start: 10, end: 13, status: 'on' },
            { start: 13, end: 16, status: 'off' },
            { start: 16, end: 19, status: 'maybe' },
            { start: 19, end: 22, status: 'on' },
            { start: 22, end: 24, status: 'off' }
        ],
        "Вівторок": [
            { start: 0, end: 2, status: 'off' },
            { start: 2, end: 4, status: 'maybe' },
            { start: 4, end: 7, status: 'on' },
            { start: 7, end: 10, status: 'off' },
            { start: 10, end: 13, status: 'maybe' },
            { start: 13, end: 16, status: 'on' },
            { start: 16, end: 19, status: 'off' },
            { start: 19, end: 22, status: 'maybe' },
            { start: 22, end: 24, status: 'on' }
        ],
        "Середа": [
            { start: 0, end: 1, status: 'on' },
            { start: 1, end: 4, status: 'off' },
            { start: 4, end: 7, status: 'maybe' },
            { start: 7, end: 10, status: 'on' },
            { start: 10, end: 13, status: 'off' },
            { start: 13, end: 16, status: 'maybe' },
            { start: 16, end: 19, status: 'on' },
            { start: 19, end: 22, status: 'off' },
            { start: 22, end: 24, status: 'maybe' }
        ],
        "Четвер": [
            { start: 0, end: 1, status: 'maybe' },
            { start: 1, end: 4, status: 'on' },
            { start: 4, end: 7, status: 'off' },
            { start: 7, end: 10, status: 'maybe' },
            { start: 10, end: 13, status: 'on' },
            { start: 13, end: 16, status: 'off' },
            { start: 16, end: 19, status: 'maybe' },
            { start: 19, end: 22, status: 'on' },
            { start: 22, end: 24, status: 'off' }
        ],
        "П'ятниця": [
            { start: 0, end: 1, status: 'off' },
            { start: 1, end: 4, status: 'maybe' },
            { start: 4, end: 7, status: 'on' },
            { start: 7, end: 10, status: 'off' },
            { start: 10, end: 13, status: 'maybe' },
            { start: 13, end: 16, status: 'on' },
            { start: 16, end: 19, status: 'off' },
            { start: 19, end: 22, status: 'maybe' },
            { start: 22, end: 24, status: 'on' }
        ],
        "Субота": [
            { start: 0, end: 1, status: 'on' },
            { start: 1, end: 4, status: 'off' },
            { start: 4, end: 7, status: 'maybe' },
            { start: 7, end: 10, status: 'on' },
            { start: 10, end: 13, status: 'off' },
            { start: 13, end: 16, status: 'maybe' },
            { start: 16, end: 19, status: 'on' },
            { start: 19, end: 22, status: 'off' },
            { start: 22, end: 24, status: 'maybe' }
        ],
        "Неділя": [
            { start: 0, end: 1, status: 'maybe' },
            { start: 1, end: 4, status: 'on' },
            { start: 4, end: 7, status: 'off' },
            { start: 7, end: 10, status: 'maybe' },
            { start: 10, end: 13, status: 'on' },
            { start: 13, end: 16, status: 'off' },
            { start: 16, end: 19, status: 'maybe' },
            { start: 19, end: 22, status: 'on' },
            { start: 22, end: 24, status: 'off' }
        ]
    },
    "Група 5": {
        "Понеділок": [
            { start: 0, end: 2, status: 'off' },
            { start: 2, end: 5, status: 'maybe' },
            { start: 5, end: 6, status: 'on' },
            { start: 6, end: 9, status: 'off' },
            { start: 9, end: 11, status: 'maybe' },
            { start: 11, end: 16, status: 'on' },
            { start: 16, end: 18, status: 'off' },
            { start: 18, end: 24, status: 'maybe' }
        ],
        "Вівторок": [
            { start: 0, end: 3, status: 'off' },
            { start: 3, end: 6, status: 'maybe' },
            { start: 6, end: 10, status: 'on' },
            { start: 10, end: 13, status: 'off' },
            { start: 13, end: 16, status: 'maybe' },
            { start: 16, end: 19, status: 'on' },
            { start: 19, end: 22, status: 'off' },
            { start: 22, end: 24, status: 'maybe' }
        ],
        "Середа": [
            { start: 0, end: 2, status: 'on' },
            { start: 2, end: 5, status: 'off' },
            { start: 5, end: 8, status: 'maybe' },
            { start: 8, end: 13, status: 'on' },
            { start: 13, end: 16, status: 'off' },
            { start: 16, end: 19, status: 'maybe' },
            { start: 19, end: 21, status: 'on' },
            { start: 21, end: 24, status: 'off' }
        ],
        "Четвер": [
            { start: 0, end: 3, status: 'maybe' },
            { start: 3, end: 6, status: 'on' },
            { start: 6, end: 9, status: 'off' },
            { start: 9, end: 12, status: 'maybe' },
            { start: 12, end: 16, status: 'on' },
            { start: 16, end: 19, status: 'off' },
            { start: 19, end: 22, status: 'maybe' },
            { start: 22, end: 24, status: 'on' }
        ],
        "П'ятниця": [
            { start: 0, end: 3, status: 'off' },
            { start: 3, end: 6, status: 'maybe' },
            { start: 6, end: 10, status: 'on' },
            { start: 10, end: 13, status: 'off' },
            { start: 13, end: 16, status: 'maybe' },
            { start: 16, end: 19, status: 'on' },
            { start: 19, end: 22, status: 'off' },
            { start: 22, end: 24, status: 'maybe' }
        ],
        "Субота": [
            { start: 0, end: 2, status: 'on' },
            { start: 2, end: 5, status: 'off' },
            { start: 5, end: 8, status: 'maybe' },
            { start: 8, end: 13, status: 'on' },
            { start: 13, end: 16, status: 'off' },
            { start: 16, end: 19, status: 'maybe' },
            { start: 19, end: 21, status: 'on' },
            { start: 21, end: 24, status: 'off' }
        ],
        "Неділя": [
            { start: 0, end: 3, status: 'maybe' },
            { start: 3, end: 6, status: 'on' },
            { start: 6, end: 9, status: 'off' },
            { start: 9, end: 12, status: 'maybe' },
            { start: 12, end: 16, status: 'on' },
            { start: 16, end: 19, status: 'off' },
            { start: 19, end: 22, status: 'maybe' },
            { start: 22, end: 24, status: 'on' }
        ]
    },
    "Група 6": {
        "Понеділок": [
            { start: 0, end: 1, status: 'on' },
            { start: 1, end: 3, status: 'off' },
            { start: 3, end: 6, status: 'maybe' },
            { start: 6, end: 7, status: 'on' },
            { start: 7, end: 10, status: 'off' },
            { start: 10, end: 13, status: 'maybe' },
            { start: 13, end: 16, status: 'on' },
            { start: 16, end: 19, status: 'off' },
            { start: 19, end: 22, status: 'maybe' },
            { start: 22, end: 24, status: 'on' }
        ],
        "Вівторок": [
            { start: 0, end: 1, status: 'on' },
            { start: 1, end: 4, status: 'off' },
            { start: 4, end: 7, status: 'maybe' },
            { start: 7, end: 10, status: 'on' },
            { start: 10, end: 13, status: 'off' },
            { start: 13, end: 16, status: 'maybe' },
            { start: 16, end: 19, status: 'on' },
            { start: 19, end: 22, status: 'off' },
            { start: 22, end: 24, status: 'maybe' }
        ],
        "Середа": [
            { start: 0, end: 1, status: 'maybe' },
            { start: 1, end: 4, status: 'on' },
            { start: 4, end: 7, status: 'off' },
            { start: 7, end: 10, status: 'maybe' },
            { start: 10, end: 13, status: 'on' },
            { start: 13, end: 16, status: 'off' },
            { start: 16, end: 19, status: 'maybe' },
            { start: 19, end: 22, status: 'on' },
            { start: 22, end: 24, status: 'off' }
        ],
        "Четвер": [
            { start: 0, end: 1, status: 'off' },
            { start: 1, end: 4, status: 'maybe' },
            { start: 4, end: 7, status: 'on' },
            { start: 7, end: 10, status: 'off' },
            { start: 10, end: 13, status: 'maybe' },
            { start: 13, end: 16, status: 'on' },
            { start: 16, end: 19, status: 'off' },
            { start: 19, end: 22, status: 'maybe' },
            { start: 22, end: 24, status: 'on' }
        ],
        "П'ятниця": [
            { start: 0, end: 1, status: 'on' },
            { start: 1, end: 4, status: 'off' },
            { start: 4, end: 7, status: 'maybe' },
            { start: 7, end: 10, status: 'on' },
            { start: 10, end: 13, status: 'off' },
            { start: 13, end: 16, status: 'maybe' },
            { start: 16, end: 19, status: 'on' },
            { start: 19, end: 22, status: 'off' },
            { start: 22, end: 24, status: 'maybe' }
        ],
        "Субота": [
            { start: 0, end: 1, status: 'maybe' },
            { start: 1, end: 4, status: 'on' },
            { start: 4, end: 7, status: 'off' },
            { start: 7, end: 10, status: 'maybe' },
            { start: 10, end: 13, status: 'on' },
            { start: 13, end: 16, status: 'off' },
            { start: 16, end: 19, status: 'maybe' },
            { start: 19, end: 22, status: 'on' },
            { start: 22, end: 24, status: 'off' }
        ],
        "Неділя": [
            { start: 0, end: 1, status: 'off' },
            { start: 1, end: 4, status: 'maybe' },
            { start: 4, end: 7, status: 'on' },
            { start: 7, end: 10, status: 'off' },
            { start: 10, end: 13, status: 'maybe' },
            { start: 13, end: 16, status: 'on' },
            { start: 16, end: 19, status: 'off' },
            { start: 19, end: 22, status: 'maybe' },
            { start: 22, end: 24, status: 'on' }
        ]
    }
};

function formatTime(hours) {
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
}

function formatDuration(hours) {
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    return `${h}г ${m}хв`;
}

function getPhaseEmoji(status) {
    switch(status) {
        case 'on': return '💡';
        case 'off': return '🕯️';
        case 'maybe': return '❓';
        default: return '';
    }
}

function getCurrentPhase(group, day, currentHour) {
    const daySchedule = schedule[group][day];
    for (let phase of daySchedule) {
        if (currentHour >= phase.start && currentHour < phase.end) {
            const remainingTime = phase.end - currentHour;
            const nextPhase = daySchedule.find(p => p.start === phase.end) || daySchedule[0];
            return {
                current: phase,
                remaining: remainingTime,
                next: nextPhase
            };
        }
    }
    return null;
}

function updateTimeline() {
    const timeline = document.getElementById('timeline');
    timeline.innerHTML = '';
    const currentGroup = document.getElementById('groupSelect').value;
    const currentDay = document.getElementById('daySelect').value;
    const now = new Date();
    const currentHour = now.getHours() + now.getMinutes() / 60;

    schedule[currentGroup][currentDay].forEach(phase => {
        const phaseElement = document.createElement('div');
        phaseElement.className = `phase ${phase.status}`;
        phaseElement.style.left = `${(phase.start / 24) * 100}%`;
        phaseElement.style.width = `${((phase.end - phase.start) / 24) * 100}%`;
        timeline.appendChild(phaseElement);
    });

    const currentTimeElement = document.createElement('div');
    currentTimeElement.className = 'current-time';
    currentTimeElement.style.left = `${(currentHour / 24) * 100}%`;
    timeline.appendChild(currentTimeElement);

    updateCurrentPhase(currentGroup, currentDay, currentHour);
}

function updateCurrentPhase(group, day, currentHour) {
    const currentPhaseElement = document.getElementById('currentPhase');
    const currentPhase = getCurrentPhase(group, day, currentHour);

    if (currentPhase) {
        const { current, remaining, next } = currentPhase;
        const statusText = current.status === 'on' ? 'Світло є' :
                           current.status === 'off' ? 'Світла немає' : 'Можливе включення';
        const nextStatusText = next.status === 'on' ? 'Світло є' :
                               next.status === 'off' ? 'Світла немає' : 'Можливе включення';

        currentPhaseElement.innerHTML = `
            <h3>Поточна фаза: ${getPhaseEmoji(current.status)} ${statusText} буде тривати ще ${formatDuration(remaining)}</h3>
            <div class="progress-bar">
                <div class="progress ${current.status}" style="width: ${((current.end - currentHour) / (current.end - current.start)) * 100}%"></div>
            </div>
            <p>До наступної фази "${getPhaseEmoji(next.status)} ${nextStatusText}": ${formatTime(remaining)}</p>
        `;
    } else {
        currentPhaseElement.innerHTML = '<p>Немає даних про поточну фазу</p>';
    }
}

function initializeApp() {
    const groupSelect = document.getElementById('groupSelect');
    const daySelect = document.getElementById('daySelect');
    
    // Populate group select
    Object.keys(schedule).forEach(group => {
        const option = document.createElement('option');
        option.value = group;
        option.textContent = group;
        groupSelect.appendChild(option);
    });

    // Populate day select
    const daysOfWeek = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота'];
    daysOfWeek.forEach(day => {
        const option = document.createElement('option');
        option.value = day;
        option.textContent = day;
        daySelect.appendChild(option);
    });

    groupSelect.addEventListener('change', updateTimeline);
    daySelect.addEventListener('change', updateTimeline);

    // Set default values
    groupSelect.value = "Група 5";
    const currentDay = daysOfWeek[new Date().getDay()];
    daySelect.value = currentDay;

    updateTimeline();
    setInterval(updateTimeline, 60000); // Update every minute
}

document.addEventListener('DOMContentLoaded', initializeApp);
