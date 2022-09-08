<template>
  <div class="content">
    <div class="map1"></div>
    <div class="map2"></div>
    <div class="map3"></div>
  </div>
</template>

<script setup></script>

<style scoped>
.content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.content .map1 {
  position: absolute;
  opacity: 0.3;
  width: 100%;
  height: 100%;
  background: url(../assets/images/map.png) no-repeat center center;
  z-index: 1;
}
.content .map2 {
  opacity: 0.2;
  position: absolute;
  width: 29.2969vw;
  height: 29.2969vw;
  background: url(../assets/images/jt.png) no-repeat center center;
  animation: rotate 10s linear infinite;
  z-index: 2;
}
.content .map3 {
  opacity: 1;
  position: absolute;
  width: 26.0417vw;
  height: 26.0417vw;
  background: url(../assets/images/lbx.png) no-repeat center center;
  animation: rotate2 10s linear infinite;
  z-index: 3;
}
@keyframes rotate {
  0% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(360deg);
  }
}

@keyframes rotate2 {
  0% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(-360deg);
  }
}
</style>
