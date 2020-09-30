<template>
  <div id="app">
    <div class="p-grid">
      <div class="p-col-12">
        <Game></Game>
      </div>
      <div class="p-col-12">
        <game-board></game-board>
      </div>
    </div>

  </div>
</template>

<script>

import GameBoard from "@/components/GameBoard";
import Game from "@/pages/Game";
export default {
  name: 'App',
  components: {
    Game,
    GameBoard

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
