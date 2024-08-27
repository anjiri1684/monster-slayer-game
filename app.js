const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 1000,
    };
  },
});

app.mount("#game");
