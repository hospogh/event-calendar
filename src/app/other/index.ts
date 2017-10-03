export const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

export const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
export const allMonthsInfo = [
    {
        name: 'January',
        days: 31
    },
    {
        name: 'February',
        days: 29
    },
    {
        name: 'March',
        days: 31
    },
    {
        name: 'April',
        days: 30
    },
    {
        name: 'May',
        days: 31
    },
    {
        name: 'June',
        days: 30
    },
    {
        name: 'July',
        days: 31
    },
    {
        name: 'August',
        days: 31
    },
    {
        name: 'September',
        days: 30
    },
    {
        name: 'October',
        days: 31
    },
    {
        name: 'November',
        days: 30
    },
    {
        name: 'December',
        days: 31
    }
];

export const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const s4 = () => Math.random().toString(16).slice(-4);
export const createGUID = () => `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;

export const storage = [];
