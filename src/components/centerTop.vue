<template>
  <div class="panel">
    <ul class="panel-top">
      <li>{{ centerTopOneCount }}</li>
      <li></li>
      <li>{{ centerTopTwoCount }}</li>
    </ul>
    <ul class="panel-bottom">
      <li>前端需求人数</li>
      <li>市场供应人数</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const centerTopOneCount = ref(Math.floor(Math.random() * 10000));
const centerTopTwoCount = ref(Math.floor(Math.random() * 10000));
setInterval(() => {
  centerTopOneCount.value += Math.floor(Math.random() * 50 - 25);
  centerTopTwoCount.value += Math.floor(Math.random() * 50 - 25);
}, 1000);
</script>

<style scoped>
.panel-top {
  display: flex;
  justify-content: space-between;
  border: 1px solid rgba(25, 186, 139, 0.17);
}
.panel-top li {
  text-align: center;
  width: 21.1725vw;
  height: 4.1204vw;
  line-height: 4.1204vw;
  font-size: 3.2552vw;
  color: #ffff00;
  font-family: electronicFont;
}
.panel-top li:nth-child(2) {
  width: 1px;
  height: 2.1204vw;
  margin-top: 1.1204vw;
  border-left: 0.0651vw solid #ccc;
}
.panel-bottom {
  margin-top: 0.651vw;
  display: flex;
  justify-content: space-around;
  font-size: 0.7813vw;
  font-family: electronicFont;
}
</style>
