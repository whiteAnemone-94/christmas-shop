const giftsObj = [
  {
    "name": "Bug Magnet",
    "description": "Able to find bugs in code like they were placed there on purpose.",
    "category": "For Work",
    "superpowers": {
      "live": "+500",
      "create": "+500",
      "love": "+200",
      "dream": "+400"
    }
  },

  {
    "name": "Console.log Guru",
    "description": "Uses console.log like a crystal ball to find any issue.",
    "category": "For Work",
    "superpowers": {
      "live": "+500",
      "create": "+500",
      "love": "+200",
      "dream": "+400"
    }
  },

  {
    "name": "Shortcut Cheater",
    "description": "Knows every keyboard shortcut like they were born with them.",
    "category": "For Work",
    "superpowers": {
      "live": "+500",
      "create": "+500",
      "love": "+400",
      "dream": "+200"
    }
  },

  {
    "name": "Merge Master",
    "description": "Merges branches in Git without conflicts, like a wizard during an exam.",
    "category": "For Work",
    "superpowers": {
      "live": "+200",
      "create": "+500",
      "love": "+200",
      "dream": "+300"
    }
  },

  {
    "name": "Async Tamer",
    "description": "Handles asynchronous code and promises like well-trained pets.",
    "category": "For Work",
    "superpowers": {
      "live": "+100",
      "create": "+400",
      "love": "+200",
      "dream": "+300"
    }
  },

  {
    "name": "CSS Tamer",
    "description": "Can make Flexbox and Grid work together like they were always best friends.",
    "category": "For Work",
    "superpowers": {
      "live": "+200",
      "create": "+500",
      "love": "+200",
      "dream": "+300"
    }
  },

  {
    "name": "Time Hacker",
    "description": "Writes code at the last moment but always meets the deadline.",
    "category": "For Work",
    "superpowers": {
      "live": "+500",
      "create": "+500",
      "love": "+500",
      "dream": "+200"
    }
  },

  {
    "name": "Layout Master",
    "description": "Creates perfect layouts on the first try, like they can read the designer's mind.",
    "category": "For Work",
    "superpowers": {
      "live": "+500",
      "create": "+300",
      "love": "+200",
      "dream": "+200"
    }
  },

  {
    "name": "Documentation Whisperer",
    "description": "Understands cryptic documentation as if they wrote it themselves.",
    "category": "For Work",
    "superpowers": {
      "live": "+500",
      "create": "+500",
      "love": "+200",
      "dream": "+100"
    }
  },

  {
    "name": "Feedback Master",
    "description": "Accepts client revisions with the Zen calm of Buddha.",
    "category": "For Work",
    "superpowers": {
      "live": "+300",
      "create": "+500",
      "love": "+300",
      "dream": "+400"
    }
  },

  {
    "name": "Code Minimalist",
    "description": "Writes code so concise that one line does more than a whole file.",
    "category": "For Work",
    "superpowers": {
      "live": "+500",
      "create": "+500",
      "love": "+500",
      "dream": "+200"
    }
  },

  {
    "name": "Pixel-Perfect Magician",
    "description": "Aligns elements to the last pixel, even when the design looks abstract.",
    "category": "For Work",
    "superpowers": {
      "live": "+500",
      "create": "+500",
      "love": "+400",
      "dream": "+400"
    }
  },

  {
    "name": "Posture Levitation",
    "description": "Can sit for hours, but maintains perfect posture like a ballerina.",
    "category": "For Health",
    "superpowers": {
      "live": "+400",
      "create": "+500",
      "love": "+500",
      "dream": "+400"
    }
  },

  {
    "name": "Step Master",
    "description": "Gets 10,000 steps a day even while sitting at the computer.",
    "category": "For Health",
    "superpowers": {
      "live": "+400",
      "create": "+300",
      "love": "+500",
      "dream": "+400"
    }
  },

  {
    "name": "Snack Resister",
    "description": "Ignoring desktop snacks like a strict dietician.",
    "category": "For Health",
    "superpowers": {
      "live": "+400",
      "create": "+100",
      "love": "+200",
      "dream": "+400"
    }
  },

  {
    "name": "Hydration Bot",
    "description": "Drinks the recommended 2 liters of water a day like a health-programmed robot.",
    "category": "For Health",
    "superpowers": {
      "live": "+500",
      "create": "+300",
      "love": "+500",
      "dream": "+500"
    }
  },

  {
    "name": "Sleep Overlord",
    "description": "Sleeps 6 hours but feels like they had 10.",
    "category": "For Health",
    "superpowers": {
      "live": "+400",
      "create": "+500",
      "love": "+500",
      "dream": "+500"
    }
  },

  {
    "name": "Break Guru",
    "description": "Takes a stretch break every hour without forgetting, no matter how focused.",
    "category": "For Health",
    "superpowers": {
      "live": "+300",
      "create": "+300",
      "love": "+300",
      "dream": "+400"
    }
  },

  {
    "name": "Eye Protector",
    "description": "Can work all day at the monitor without feeling like their eyes are on fire.",
    "category": "For Health",
    "superpowers": {
      "live": "+100",
      "create": "+300",
      "love": "+500",
      "dream": "+400"
    }
  },

  {
    "name": "Stress Dodger",
    "description": "Masters meditation right at the keyboard.",
    "category": "For Health",
    "superpowers": {
      "live": "+100",
      "create": "+400",
      "love": "+200",
      "dream": "+400"
    }
  },

  {
    "name": "Yoga Coder",
    "description": "Easily switches from coding to yoga and back.",
    "category": "For Health",
    "superpowers": {
      "live": "+400",
      "create": "+400",
      "love": "+400",
      "dream": "+400"
    }
  },

  {
    "name": "Healthy Snacker",
    "description": "Always picks fruit, even when chocolate is within arm’s reach.",
    "category": "For Health",
    "superpowers": {
      "live": "+400",
      "create": "+300",
      "love": "+200",
      "dream": "+400"
    }
  },

  {
    "name": "Chair Exerciser",
    "description": "Manages to work out without leaving the chair.",
    "category": "For Health",
    "superpowers": {
      "live": "+500",
      "create": "+500",
      "love": "+500",
      "dream": "+400"
    }
  },

  {
    "name": "Caffeine Filter",
    "description": "Drinks coffee at night and still falls asleep with no problem.",
    "category": "For Health",
    "superpowers": {
      "live": "+400",
      "create": "+300",
      "love": "+500",
      "dream": "+200"
    }
  },

  {
    "name": "Joy Charger",
    "description": "Finds joy in the little things—even in a build that finishes unexpectedly fast.",
    "category": "For Harmony",
    "superpowers": {
      "live": "+200",
      "create": "+200",
      "love": "+500",
      "dream": "+500"
    }
  },

  {
    "name": "Error Laugher",
    "description": "Laughs at code errors like they’re jokes instead of getting angry.",
    "category": "For Harmony",
    "superpowers": {
      "live": "+300",
      "create": "+200",
      "love": "+500",
      "dream": "+500"
    }
  },

  {
    "name": "Bug Acceptance Guru",
    "description": "Accepts bugs as part of the journey to perfection — it’s just another task.",
    "category": "For Harmony",
    "superpowers": {
      "live": "+300",
      "create": "+200",
      "love": "+500",
      "dream": "+400"
    }
  },

  {
    "name": "Spontaneous Coding Philosopher",
    "description": "Philosophically accepts any client suggestion after a long refactor.",
    "category": "For Harmony",
    "superpowers": {
      "live": "+300",
      "create": "+200",
      "love": "+500",
      "dream": "+400"
    }
  },

  {
    "name": "Deadline Sage",
    "description": "Remains zen even when the deadline is close and the project manager is stressed.",
    "category": "For Harmony",
    "superpowers": {
      "live": "+200",
      "create": "+200",
      "love": "+300",
      "dream": "+500"
    }
  },

  {
    "name": "Inspiration Maestro",
    "description": "Finds inspiration on an empty screen as if masterpieces are already there.",
    "category": "For Harmony",
    "superpowers": {
      "live": "+300",
      "create": "+200",
      "love": "+400",
      "dream": "+100"
    }
  },

  {
    "name": "Peace Keeper",
    "description": "Maintains inner calm even in moments of intense crisis.",
    "category": "For Harmony",
    "superpowers": {
      "live": "+200",
      "create": "+200",
      "love": "+500",
      "dream": "+500"
    }
  },

  {
    "name": "Empathy Guru",
    "description": "Feels the team’s mood and can lift everyone’s spirits.",
    "category": "For Harmony",
    "superpowers": {
      "live": "+500",
      "create": "+200",
      "love": "+500",
      "dream": "+500"
    }
  },

  {
    "name": "Laughter Generator",
    "description": "Can lighten any tense situation with a joke that even bugs laugh at.",
    "category": "For Harmony",
    "superpowers": {
      "live": "+300",
      "create": "+200",
      "love": "+200",
      "dream": "+500"
    }
  },

  {
    "name": "Pause Master",
    "description": "Knows when to just step back from the keyboard and breathe.",
    "category": "For Harmony",
    "superpowers": {
      "live": "+300",
      "create": "+200",
      "love": "+100",
      "dream": "+100"
    }
  },

  {
    "name": "Coder Healer",
    "description": "Can support a colleague in their darkest hour, even if it’s a 500 error.",
    "category": "For Harmony",
    "superpowers": {
      "live": "+300",
      "create": "+200",
      "love": "+500",
      "dream": "+500"
    }
  },

  {
    "name": "Music Code Curator",
    "description": "Creates work playlists so good, even deadlines follow the rhythm.",
    "category": "For Harmony",
    "superpowers": {
      "live": "+300",
      "create": "+200",
      "love": "+300",
      "dream": "+200"
    }
  }
]

//  ---------------------------------------  //

const giftsForHarmony = [];
const giftsForHealth = [];
const giftsForWork = [];

for (let i = 0; i < giftsObj.length; i++) {
  if (giftsObj[i]["category"] == "For Harmony") {
    giftsForHarmony.push(giftsObj[i])
  } else if (giftsObj[i]["category"] == "For Health") {
    giftsForHealth.push(giftsObj[i])
  } else if (giftsObj[i]["category"] == "For Work") {
    giftsForWork.push(giftsObj[i])
  }
}

//  ---------------------------------------  //

// function shuffleArray() {
//   return giftsObj.sort(() => Math.random() - 0.5);
// }

//  ---------------------------------------  //

let giftsList = document.querySelector('.gifts-list');
giftsList.innerHTML = '';

function addGiftCard(obj) {
  let randomIndexList = [];
  let randomIndex;

  for (let i = 0; i < 12; i++) {
    randomIndex = Math.floor(Math.random() * (36 - 1)) + 1;
    if (randomIndex in randomIndexList) {
      i--;
      continue
    }
    randomIndexList.push(randomIndex);
    createGiftCard(obj[randomIndex]);
  }
}

function addGiftPurposeCard(obj) {
  let randomIndexList = [];
  let randomIndex;

  for (let i = 0; i < 12; i++) {
    randomIndex = Math.floor(Math.random() * (12 - 1)) + 1;
    if (randomIndex in randomIndexList) {
      i--;
      continue
    }
    randomIndexList.push(randomIndex);
    createGiftCard(obj[randomIndex]);
  }
}

function createGiftCard(giftObj) {
  let gift = document.createElement('li');
  gift.className = 'gifts-item';

  giftsList.append(gift);
  gift.append(createGiftImage(giftObj['category']))
  gift.append(createGiftDescription(giftObj['name'], giftObj['category']));
}

function createGiftImage(category) {
  let giftImage = document.createElement('img');
  giftImage.width = "310";
  giftImage.height = "225";
  if (category == "For Harmony") {
    giftImage.src = '../assets/img/gift-for-harmony.png';
    giftImage.classList.add('gift-for-harmony');
  } else if (category == "For Health") {
    giftImage.src = '../assets/img/gift-for-health.png';
    giftImage.classList.add('gift-for-health');
  } else if (category == "For Work") {
    giftImage.src = '../assets/img/gift-for-work.png';
    giftImage.classList.add('gift-for-work');
  }
  return giftImage
}

function createGiftDescription(name, category) {
  let giftDescription = document.createElement('div');
  giftDescription.className = 'gift-description';

  let giftPurpose = document.createElement('span');
  giftPurpose.className = 'gift-purpose';
  if (category == "For Harmony") {
    giftPurpose.classList.add('gift-for-harmony');
  } else if (category == "For Health") {
    giftPurpose.classList.add('gift-for-health');
  } else if (category == "For Work") {
    giftPurpose.classList.add('gift-for-work');
  }
  giftPurpose.innerHTML = category;

  let giftName = document.createElement('h3');
  giftName.className = 'gift-name';
  giftName.innerHTML = name;

  giftDescription.append(giftPurpose);
  giftDescription.append(giftName);

  return giftDescription
}

addGiftCard(giftsObj);

let purposeButtons = document.querySelectorAll('.gift-purpose-button');

purposeButtons.forEach(item => {
  item.addEventListener('click', () => {
    purposeButtons.forEach(item => {
      item.classList.remove('gift-purpose-button_is-active');
      item.disabled = false;
    })
    giftsList.innerHTML = '';
    if (item.id == 'all-gifts') {
      item.classList.add('gift-purpose-button_is-active');
      item.disabled = true;
      addGiftCard(giftsObj);
    } else if (item.id == 'for-work') {
      item.classList.add('gift-purpose-button_is-active');
      item.disabled = true;
      addGiftPurposeCard(giftsForWork);
    } else if (item.id == 'for-health') {
      item.classList.add('gift-purpose-button_is-active');
      item.disabled = true;
      addGiftPurposeCard(giftsForHealth);
    } else if (item.id == 'for-harmony') {
      item.classList.add('gift-purpose-button_is-active');
      item.disabled = true;
      addGiftPurposeCard(giftsForHarmony);
    }
  })
});