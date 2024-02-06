const names = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman',
    'Aaron',
    'Aaron-James',
    'Aarron',
    'Aaryan',
    'Aaryn',
    'Aayan',
    'Aazaan',
    'Abaan',
    'Abbas',
    'Abdallah',
    'Abdalroof',
    'Abdihakim',
    'Abdirahman',
    'Abdisalam',
    'Abdul',
    'Abdul-Aziz',
    'Abdulbasir',
    'Abdulkadir',
    'Abdulkarem',
    'Smith',
    'Jones',
    'Ze',
    'Zechariah',
    'Zeek',
    'Zeeshan',
    'Zeid',
    'Zein',
    'Zen',
    'Zendel',
    'Zenith',
    'Zennon',
    'Zeph',
    'Zerah',
    'Zhen',
    'Zhi',
    'Zhong',
    'Zhuo',
    'Zi',
    'Zidane',
    'Zijie',
    'Zinedine',
    'Zion',
    'Zishan',
    'Ziya',
    'Ziyaan',
    'Zohaib',
    'Zohair',
    'Zoubaeir',
    'Zubair',
    'Zubayr',
    'Zuriel',
    'Xander',
    'Jared',
    'Courtney',
    'Gillian',
    'Clark',
    'Jared',
    'Grace',
    'Kelsey',
    'Tamar',
    'Alex',
    'Mark',
    'Tamar',
    'Farish',
    'Sarah',
    'Nathaniel',
    'Parker',
  ];

const emails = ['bravemoon38@icloud.com',
'fancytree15@outlook.com',
'eagersky45@yahoo.com',
'elegantbird29@yahoo.com',
'bravestar35@outlook.com',
'fancycat54@icloud.com',
'boldsun92@yahoo.com',
'brightfish91@yahoo.com',
'gentledog40@outlook.com',
'brightdog25@yahoo.com',
'gentlemoon52@outlook.com',
'elegantstar83@yahoo.com',
'happydog77@gmail.com',
'calmfish46@yahoo.com',
'fancydog15@yahoo.com',
'quickstar77@gmail.com',
'calmdog77@outlook.com',
'bravetree88@yahoo.com',
'happycat99@icloud.com',
'fancybird83@outlook.com',
'elegantstar95@yahoo.com',
'elegantdog96@gmail.com',
'quickcat45@yahoo.com',
'bravesky66@gmail.com',
'quickdog13@yahoo.com',
'brightfish26@yahoo.com',
'fancysun95@gmail.com',
'calmsky30@yahoo.com',
'brighttree15@outlook.com',
'fancycat76@yahoo.com',
'calmdog23@icloud.com',
'happyfish56@gmail.com',
'eagerstar20@outlook.com',
'happyfish31@outlook.com',
'boldflower70@icloud.com',
'quickfish99@outlook.com',
'boldmoon82@icloud.com',
'quicktree56@icloud.com',
'fancymoon50@gmail.com',
'boldfish71@gmail.com',
'elegantmoon45@yahoo.com',
'brightsky57@icloud.com',
'gentlemoon11@icloud.com',
'happysky15@icloud.com',
'quickflower82@yahoo.com',
'quicksky62@gmail.com',
'gentletree93@yahoo.com',
'quickstar16@yahoo.com',
'gentlecat34@yahoo.com',
'quickbird38@icloud.com'
]

const thoughts = [
    'Had a great day!',
    'Feeling blessed and content.',
    'Looking forward to the weekend!',
    'Today was really productive.',
    'Just finished a good book.',
    'Had an amazing workout session!',
    'Enjoyed some quality family time.',
    'Finally understood that complex concept!',
    'Took some time to relax and meditate.',
    'Experimented with a new recipe and loved it.',
    'Had a successful meeting at work.',
    'Caught up with an old friend over coffee.',
    'Appreciated the beauty of nature on my walk.',
    'Learned something new today!',
    'Felt inspired by a motivational quote.',
    'Saw a beautiful sunset.',
    'Enjoyed a peaceful and quiet evening.',
    'Helped someone in need and felt good.',
    'Had a refreshing and rejuvenating yoga session.',
    'Listened to my favorite music and relaxed.'
];


const reactions = [
    'Cool!',
    'Awesome!',
    'That sounds amazing!',
    'Way to go!',
    'Incredible!',
    'So happy for you!',
    'Keep it up!',
    'Well done!',
    'You rock!',
    'That is impressive!',
    'Bravo!',
    'Fantastic!',
    'Love this!',
    'Very inspiring!',
    'Great job!',
    'Wonderful!',
    'Super!',
    'Marvelous!',
    'Outstanding!',
    'Fabulous!'
];


const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomEmail = () =>
    `${getRandomArrItem(emails)}`
// Gets a random full name
const usedNames = new Set();

const getRandomName = () => {
  let newName;
  do {
    newName = `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;
  } while (usedNames.has(newName));
  
  usedNames.add(newName);
  return newName;
};

// Gets a random thought
const getRandomReactions = () => `${getRandomArrItem(reactions)}`;
// Gets a random reaction (assuming you want a text response, adjust as needed for your schema)
const getRandomThought = () =>
    `${getRandomArrItem(thoughts)}`;

module.exports = { getRandomName, getRandomEmail, getRandomThought, getRandomReactions };
