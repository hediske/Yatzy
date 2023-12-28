'use strict mode';

////////////////////DATA
let n = 3;
let scorep1 = 0;
let scorep2 = 0;
let player = 'p1';
let sets = [];
let playedelemp1 = [];
let playedelemp2 = [];
let tabMinsp1 = [0, 0, 0, 0, 0, 0]; //to store the values of minis(1-2-3-4-5-6)
let tabMinsp2 = [0, 0, 0, 0, 0, 0]; //to store the values of minis(1-2-3-4-5-6)
let selecteddices = [];
let selectedElem = null;
let toursNum = 26;
window.playedelemp1 = playedelemp1;
window.playedelemp2 = playedelemp2;
window.tabMinsp1 = tabMinsp1;
window.tabMinsp2 = tabMinsp2;
window.scorep1 = scorep1;
window.scorep2 = scorep2;

// initialMove = function () {
//   const freqSum = [0, 0, 0, 0, 0, 0, 0];
//   // TODO: hethiiii mohema
// };

/////////////functions for cases
extractElement = function (el) {
  return Number(el.id[0]);
};
freqFill = function (freqSum) {
  const iterator = sets.values();
  for (const i of iterator) {
    freqSum[Number(i)]++;
  }
};
sumelem = function (j) {
  let x = 0;
  for (let i = 0; i < 5; i++) {
    sets[i] === j ? (x += j) : null;
  }
  return x;
};

sumbonus = function () {
  let x = 0;
  for (let i = 0; i < tabMins.length; i++) {
    x += tabMins[i];
  }
  return x;
};

calcMaxi = function () {
  let freqSum = [0, 0, 0, 0, 0, 0, 0];
  freqFill(freqSum);
  console.log(freqSum);
  let ok3 = false;
  let ok4 = false;
  let ok2 = false;
  let ok5 = false;
  let sum = 0;
  for (let i = 1; i <= 6; i++) {
    sum = sum + Number(freqSum[i]) * i;
    if (freqSum[i] === 2 && !ok2) ok2 = true;
    if (freqSum[i] === 3 && !ok3) ok3 = true;
    if (freqSum[i] === 4 && !ok4) ok4 = true;
    if (freqSum[i] === 5 && !ok5) ok5 = true;
  }
  const fulhou = ok2 && ok3;
  const smalstrig = Boolean(
    (freqSum[1] && freqSum[2] && freqSum[3] && freqSum[4]) ||
      (freqSum[2] && freqSum[3] && freqSum[4] && freqSum[5]) ||
      (freqSum[3] && freqSum[4] && freqSum[5] && freqSum[6])
  );
  const fulstrig = Boolean(
    (freqSum[1] && freqSum[2] && freqSum[3] && freqSum[4] && freqSum[5]) ||
      (freqSum[2] && freqSum[3] && freqSum[4] && freqSum[5] && freqSum[6])
  );
  if (!ok3 && !ok4) return [0, 0, fulhou, smalstrig, fulstrig, ok5, sum];
  else if (ok3) return [Number(sum), 0, fulhou, smalstrig, fulstrig, ok5, sum];
  else return [sum, sum, fulhou, smalstrig, fulstrig, ok5, sum];
};

playturn = function () {
  for (let i = 0; i < 5; i++) {
    if (selecteddices.indexOf(i + 1) === -1) {
      /// if it is not selected
      let j = Math.floor(Math.random() * 6) + 1;
      sets[i] = j;
    }
  }
};
showDices = function () {
  for (let i = 1; i <= 5; i++) {
    if (selecteddices.indexOf(i) === -1) {
      /// if it is not selected
      const el = document.getElementById(`${i}dice`);
      el.src = `./assets/dice-${sets[i - 1]}.svg`;
    }
  }

  console.log(sets);
};
changeDice = function (el) {
  el.src.indexOf('grey') >= 0
    ? (el.src = el.src.replace('-grey', ''))
    : (el.src = el.src.replace('.svg', '-grey.svg'));
  const x = extractElement(el);
  const y = selecteddices.indexOf(x);
  if (y == -1) {
    selecteddices.push(x);
  } else {
    selecteddices.splice(y, 1);
  }
};

resetSelectorsToZero = function () {
  let el;
  for (let i = 1; i <= 6; i++) {
    el = document.getElementById(`p1-${i}`);
    el.textContent = 0;
    el.classList.remove('clicked');
    el.classList.remove('selected');
    el = document.getElementById(`p2-${i}`);
    el.textContent = 0;
    el.classList.remove('clicked');
    el.classList.remove('selected');
  }

  el = document.getElementById(`p1-3X`);
  el.textContent = 0;
  el.classList.remove('clicked');
  el.classList.remove('selected');

  el = document.getElementById(`p2-3X`);
  el.textContent = 0;
  el.classList.remove('clicked');
  el.classList.remove('selected');

  el = document.getElementById(`p1-4X`);
  el.textContent = 0;
  el.classList.remove('clicked');
  el.classList.remove('selected');

  el = document.getElementById(`p2-4X`);
  el.textContent = 0;
  el.classList.remove('clicked');
  el.classList.remove('selected');

  el = document.getElementById(`p1-FH`);
  el.textContent = 0;
  el.classList.remove('clicked');
  el.classList.remove('selected');

  el = document.getElementById(`p2-FH`);
  el.textContent = 0;
  el.classList.remove('clicked');
  el.classList.remove('selected');

  el = document.getElementById(`p1-SS`);
  el.textContent = 0;
  el.classList.remove('clicked');
  el.classList.remove('selected');

  el = document.getElementById(`p2-SS`);
  el.textContent = 0;
  el.classList.remove('clicked');
  el.classList.remove('selected');

  el = document.getElementById(`p1-LS`);
  el.textContent = 0;
  el.classList.remove('clicked');
  el.classList.remove('selected');

  el = document.getElementById(`p2-LS`);
  el.textContent = 0;
  el.classList.remove('clicked');
  el.classList.remove('selected');

  el = document.getElementById(`p1-YAT`);
  el.textContent = 0;
  el.classList.remove('clicked');
  el.classList.remove('selected');

  el = document.getElementById(`p2-YAT`);
  el.textContent = 0;
  el.classList.remove('clicked');
  el.classList.remove('selected');

  el = document.getElementById(`p1-CH`);
  el.textContent = 0;
  el.classList.remove('clicked');
  el.classList.remove('selected');

  el = document.getElementById(`p2-CH`);
  el.textContent = 0;
  el.classList.remove('clicked');
  el.classList.remove('selected');
  el = document.querySelector('.cumulp1');
  el.textContent = '0';
  el = document.querySelector('.cumulp2');
  el.textContent = '0';

  el = document.getElementById('p1-bonus');
  el.classList.remove('succbon');
  el.textContent = '0';
  el = document.getElementById('p2-bonus');
  el.classList.remove('succbon');
  el.textContent = '0';

  el = document.querySelector('.sp1');
  el.textContent = '0';
  el = document.querySelector('.sp2');
  el.textContent = '0';
};
resetSelectors = function () {
  for (let i = 1; i <= 6; i++) {
    const id = `${player}-${i}`;
    if (window['playedelem' + player].indexOf(id) === -1) {
      const el = document.getElementById(id);
      el.textContent = 0;
    }
  }
  if (window['playedelem' + player].indexOf(`${player}-3X`) === -1) {
    document.getElementById(`${player}-3X`).textContent = 0;
  }

  if (window['playedelem' + player].indexOf(`${player}-4X`) === -1) {
    document.getElementById(`${player}-4X`).textContent = 0;
  }

  if (window['playedelem' + player].indexOf(`${player}-FH`) === -1) {
    document.getElementById(`${player}-FH`).textContent = 0;
  }

  if (window['playedelem' + player].indexOf(`${player}-SS`) === -1) {
    document.getElementById(`${player}-SS`).textContent = 0;
  }

  if (window['playedelem' + player].indexOf(`${player}-LS`) === -1) {
    document.getElementById(`${player}-LS`).textContent = 0;
  }

  if (window['playedelem' + player].indexOf(`${player}-YAT`) === -1) {
    document.getElementById(`${player}-YAT`).textContent = 0;
  }

  if (window['playedelem' + player].indexOf(`${player}-CH`) === -1) {
    document.getElementById(`${player}-CH`).textContent = 0;
  }
};

updateSelectors = function () {
  for (let i = 1; i <= 6; i++) {
    const id = `${player}-${i}`;
    console.log('comparaison');
    if (window['playedelem' + player].indexOf(id) === -1) {
      const el = document.getElementById(id);
      el.textContent = sumelem(i);
      el.style.cursor = 'pointer';
    }
  }
  const res = calcMaxi();

  if (window['playedelem' + player].indexOf(`${player}-3X`) === -1) {
    document.getElementById(`${player}-3X`).textContent = res[0];
    document.getElementById(`${player}-3X`).style.cursor = 'pointer';
  }

  if (window['playedelem' + player].indexOf(`${player}-4X`) === -1) {
    document.getElementById(`${player}-4X`).textContent = res[1];
    document.getElementById(`${player}-4X`).style.cursor = 'pointer';
  }

  if (window['playedelem' + player].indexOf(`${player}-FH`) === -1) {
    document.getElementById(`${player}-FH`).textContent = 25 * Number(res[2]);
    document.getElementById(`${player}-FH`).style.cursor = 'pointer';
  }

  if (window['playedelem' + player].indexOf(`${player}-SS`) === -1) {
    document.getElementById(`${player}-SS`).textContent = 30 * Number(res[3]);
    document.getElementById(`${player}-SS`).style.cursor = 'pointer';
  }

  if (window['playedelem' + player].indexOf(`${player}-LS`) === -1) {
    document.getElementById(`${player}-LS`).textContent = 40 * Number(res[4]);
    document.getElementById(`${player}-LS`).style.cursor = 'pointer';
  }

  if (window['playedelem' + player].indexOf(`${player}-YAT`) === -1) {
    document.getElementById(`${player}-YAT`).textContent = 50 * Number(res[5]);
    document.getElementById(`${player}-YAT`).style.cursor = 'pointer';
  }

  if (window['playedelem' + player].indexOf(`${player}-CH`) === -1) {
    document.getElementById(`${player}-CH`).textContent = res[6];
    document.getElementById(`${player}-CH`).style.cursor = 'pointer';
  }
};

ignoreBut = function (el) {
  document.querySelector(`.${el}`).style.backgroundColor = '#bfb2b2';
  document.querySelector(`.${el}`).style.cursor = 'auto';
  document.querySelector(`.${el}`).classList.add('hidehover');
};

unignoreBut = function (el) {
  const x = el === 'butplac' ? '#5C8AC0' : '#ce4b33';
  document.querySelector(`.${el}`).style.backgroundColor = x;
  document.querySelector(`.${el}`).style.cursor = 'pointer';
  document.querySelector(`.${el}`).classList.remove('hidehover');
};

desactbuttons = function () {
  const elements = document.querySelectorAll('.buttons-set > img');
  elements.forEach(elem => (elem.style.cursor = 'auto'));
};
activateBut = function () {
  const elements = document.querySelectorAll('.buttons-set > img');
  elements.forEach(elem => (elem.style.cursor = 'pointer'));
};

updateScore = function () {
  document.querySelector('.s' + player).textContent = window['score' + player];
};
initialTurn = function () {
  resetSelectors();
  const ancientPl = player;
  if (player === 'p1') player = 'p2';
  else player = 'p1';
  document.querySelector('.gamzone').classList.remove('player' + ancientPl[1]);
  document.querySelector('.gamzone').classList.add('player' + player[1]);
  document.getElementById('scb' + player).classList.remove('hidden');
  document.getElementById('scb' + player).textContent = 'PLAYER ' + player[1];
  document.getElementById('scb' + ancientPl).classList.add('hidden');
  document.getElementById('scb' + ancientPl).textContent = '';
  n = 3;
  unignoreBut('butrepl');
  selecteddices = [];
  selectedElem = null;
  ignoreBut('butplac');
  desactbuttons();
  sets = [];
  for (let i = 1; i <= 5; i++) {
    const el = document.getElementById(`${i}dice`);
    el.src = `./assets/no-dice.svg`;
  }
  // TODO: hethiiii mohema
};

gameEnded = function () {
  document.querySelector('.endgame').classList.remove('hide');
  document.getElementById('scp1').textContent = window['scorep1'];
  document.getElementById('scp2').textContent = window['scorep2'];
};

checkBonus = function () {
  const arr = window[`tabMins${player}`];
  const sum = arr.reduce((accum, curv) => accum + curv);
  return sum;
};

updateBonus = function () {
  const s = checkBonus();
  const el = document.querySelector('.cumul' + player);
  const curBon = el.textContent;
  if (curBon < 63) {
    if (curBon < s) {
      el.textContent = s;
    }
    if (s >= 63) {
      window['score' + player] += 35;
      document.getElementById(player + '-bonus').classList.add('succbon');
      document.getElementById(player + '-bonus').textContent = '+35';
    }
  }
};

///////////script of the  game
ignoreBut('butplac');
document.getElementById('scbp2').textContent = '';
desactbuttons();

//enter to the game;

document.querySelector('.butrepl').addEventListener('click', () => {
  if (n === 3) {
    unignoreBut('butplac');
    activateBut();
  }
  if (n != 0) {
    playturn();
    showDices();
    updateSelectors();
    if (selectedElem) {
      document.getElementById(selectedElem).classList.remove('clicked');
      selectedElem = null;
    }
    n--;
    if (n == 0) {
      const x = 'butrepl';
      ignoreBut(x);
    }
  }
  console.log(calcMaxi());
});
for (let i = 1; i <= 5; i++) {
  let el = document.getElementById(`${i}dice`);
  el.addEventListener('click', () => {
    if (n !== 3) changeDice(el);
  });
}

const sel = document.querySelectorAll('.RepZone');
sel.forEach(zone => {
  zone.addEventListener('click', () => {
    const valid =
      zone.id.substring(0, 2) === player &&
      n !== 3 &&
      zone.id.indexOf('bonus') === -1 &&
      window['playedelem' + player].indexOf(zone.id) === -1;
    if (valid) {
      if (selectedElem)
        document.getElementById(selectedElem).classList.remove('clicked');
      if (selectedElem !== zone.id) {
        selectedElem = zone.id;
        document.getElementById(selectedElem).classList.add('clicked');
      } else {
        selectedElem = null;
      }
    }
  });
});

document.querySelector('.butplac').addEventListener('click', () => {
  console.log(selectedElem);
  if (selectedElem) {
    document.getElementById(selectedElem).classList.remove('clicked');
    document.getElementById(selectedElem).classList.add('selected');
    const x = `playedelem${player}`;
    console.log(window);
    window[x].push(selectedElem);
    console.log(window[x]);
    const i = selectedElem.substring(3);
    if (Number(i))
      window['tabMins' + player][Number(i) - 1] = Number(
        document.getElementById(selectedElem).textContent
      );
    console.log(window['tabMins' + player]);
    window['score' + player] += Number(
      document.getElementById(selectedElem).textContent
    );
    toursNum--;
    console.log(`remaining tours are : ${toursNum}`);
    updateBonus();
    updateScore();
    if (!toursNum) setTimeout(gameEnded, 500);
    else initialTurn();
  }
});

document.querySelector('.butres').addEventListener('click', () => {
  document.querySelector('.reset').classList.remove('hide');
});

document.querySelector('.OVRES').addEventListener('click', () => {
  document.querySelector('.reset').classList.add('hide');
});

document.getElementById('NORES').addEventListener('click', () => {
  document.querySelector('.reset').classList.add('hide');
});

document.getElementById('YYRES').addEventListener('click', () => {
  n = 3;
  scorep1 = 0;
  scorep2 = 0;
  player = 'p1';
  sets = [];
  playedelemp1 = [];
  playedelemp2 = [];
  tabMinsp1 = [0, 0, 0, 0, 0, 0];
  tabMinsp2 = [0, 0, 0, 0, 0, 0];
  selecteddices = [];
  selectedElem = null;
  toursNum = 26;
  resetSelectorsToZero();
  ignoreBut('butplac');
  document.getElementById('scbp1').textContent = 'PLAYER 1';
  document.getElementById('scbp1').classList.remove('hidden');
  document.getElementById('scbp2').textContent = '';
  document.getElementById('scbp2').classList.add('hidden');
  document.querySelector('.gamzone').classList.remove('player2');
  document.querySelector('.gamzone').classList.add('player1');
  desactbuttons();
  for (let i = 1; i <= 5; i++) {
    const el = document.getElementById(`${i}dice`);
    el.src = `./assets/no-dice.svg`;
  }
  document.querySelector('.reset').classList.add('hide');
});
