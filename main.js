const backGroundColorBase = '#2A5420';
const damageColorBelow30 = '#7d7618';
const damageColorBelow10 = '#c73920';
const damageColorBelow0 = '#ff0505';

const randNumGen = (maxNum, minNum = 1) => Math.floor(Math.random() * maxNum) + minNum;
const funcDamageBelowNum = (health, healthCSS, num, cssProp, color) => {
  if (health <= num) {
    healthCSS[cssProp] = color;
    return healthCSS;
  }
};
Vue.component('todo-item', {
  props: ['count'],
  template: '<button>{{count}}</button>',
});

const app = new Vue({
  el: '#app',
  data: {
    yourHealth: 100,
    monsterHealth: 100,
    gameOn: false,
    gameOver: false,
    displayDamage: [],
    yourHealthCSS: {
      'background-color': backGroundColorBase,
      width: '100%',
    },
    monsterHealthCSS: {
      'background-color': backGroundColorBase,
      width: '100%',
    },
  },
  methods: {
    toggleGameOn() {
      this.gameOn = !this.gameOn;
      return this.gameOn;
    },
    startNewGame() {
      this.yourHealth = 100;
      this.monsterHealth = 100;
      this.displayDamage = [];
      this.yourHealthCSS.width = '100%';
      this.yourHealthCSS = {
        'background-color': backGroundColorBase,
        width: '100%',
      };
      this.monsterHealthCSS = {
        'background-color': backGroundColorBase,
        width: '100%',
      };
    },
    attackMonster() {
      let yourDamage;
      let monsterDamage;
      if (this.monsterHealth > 0) {
        monsterDamage = randNumGen(15);
        this.monsterHealth -= monsterDamage;
        this.monsterHealthCSS.width = `${this.monsterHealth}%`;
        this.displayDamage.unshift({
          message: `Monster damages Player with ${monsterDamage} points`,
        });
      }
      if (this.yourHealth > 0) {
        yourDamage = randNumGen(15);
        this.yourHealth -= yourDamage;
        this.yourHealthCSS.width = `${this.yourHealth}%`;
        this.displayDamage.unshift({
          message: `Player damages Monster with ${yourDamage} points`,
        });
      }
      funcDamageBelowNum(
        this.monsterHealth,
        this.monsterHealthCSS,
        30,
        'background-color',
        damageColorBelow30,
      );
      funcDamageBelowNum(
        this.monsterHealth,
        this.monsterHealthCSS,
        10,
        'background-color',
        damageColorBelow10,
      );
      funcDamageBelowNum(
        this.monsterHealth,
        this.monsterHealthCSS,
        0,
        'background-color',
        damageColorBelow0,
      );
      funcDamageBelowNum(
        this.yourHealth,
        this.yourHealthCSS,
        30,
        'background-color',
        damageColorBelow30,
      );
      funcDamageBelowNum(
        this.yourHealth,
        this.yourHealthCSS,
        10,
        'background-color',
        damageColorBelow10,
      );
      funcDamageBelowNum(
        this.yourHealth,
        this.yourHealthCSS,
        0,
        'background-color',
        damageColorBelow0,
      );
      this.checkWinner();
    },
    specialAttack() {
      let yourSpecialRandNum;
      let monsterDamage;
      if (this.monsterHealth > 0) {
        monsterDamage = randNumGen(15, 8);
        this.monsterHealth -= monsterDamage;
        this.monsterHealthCSS.width = `${this.monsterHealth}%`;
        this.displayDamage.unshift({
          message: `Monster damages Player with ${monsterDamage} points`,
        });
      }
      if (this.yourHealth > 0) {
        yourSpecialRandNum = randNumGen(5);
        this.yourHealth -= yourSpecialRandNum;
        this.yourHealthCSS.width = `${this.yourHealth}%`;
        this.displayDamage.unshift({
          message: `Player damages Monster with ${yourSpecialRandNum} points`,
        });
      }
      funcDamageBelowNum(
        this.monsterHealth,
        this.monsterHealthCSS,
        30,
        'background-color',
        damageColorBelow30,
      );
      funcDamageBelowNum(
        this.monsterHealth,
        this.monsterHealthCSS,
        10,
        'background-color',
        damageColorBelow10,
      );
      funcDamageBelowNum(
        this.monsterHealth,
        this.monsterHealthCSS,
        0,
        'background-color',
        damageColorBelow0,
      );
      funcDamageBelowNum(
        this.yourHealth,
        this.yourHealthCSS,
        30,
        'background-color',
        damageColorBelow30,
      );
      funcDamageBelowNum(
        this.yourHealth,
        this.yourHealthCSS,
        10,
        'background-color',
        damageColorBelow10,
      );
      funcDamageBelowNum(
        this.yourHealth,
        this.yourHealthCSS,
        0,
        'background-color',
        damageColorBelow0,
      );
      this.checkWinner();
    },
    heal() {
      if (this.yourHealth < 100) {
        this.yourHealth += randNumGen(5);
        this.yourHealthCSS.width = `${this.yourHealth}%`;
        if (this.yourHealth > 100) {
          this.yourHealth = 100;
        }
      }
    },
    checkWinner() {
      if (this.yourHealth <= 0 || this.monsterHealth <= 0) {
        this.gameOver = true;
        this.gameOn = false;
        if (this.yourHealth === this.monsterHealth) {
          alert("IT'S A DRAW :p");
        } else if (this.yourHealth > this.monsterHealth) {
          alert('YOU WON :)');
        } else {
          alert('YOU LOST :(');
        }
      }
    },
  },
  computed: {
    displayYourHealth() {
      return this.yourHealth;
    },
    displayMonsterHealth() {
      return this.monsterHealth;
    },
    yourHealthStyles() {
      return this.yourHealthCSS;
    },
    monsterStyles() {
      return this.monsterHealthCSS;
    },
  },
});
