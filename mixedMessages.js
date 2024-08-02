const beg = [
    'It is said',
    'To live a better life',
    'Happiness starts with'
]

const mid = [
    'reflection',
    'forgetting',
    'jumping'
]

const end = [
    'is next to godliness.',
    'helps no one.',
    'is for losers.'
]

const randBeg = beg[Math.floor(Math.random() * beg.length)];
const randMid = mid[Math.floor(Math.random() * mid.length)];
const randEnd = end[Math.floor(Math.random() * end.length)];

const full = `${randBeg} ${randMid} ${randEnd}`;

console.log(full);