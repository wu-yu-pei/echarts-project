<template>
  <div class="box">
    <slot></slot>
    <span class="top-left"></span>
    <span class="top-right"></span>
    <span class="bottom-left"></span>
    <span class="bottom-right"></span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  width: {
    type: String,
    default: '100%',
  },
  height: {
    type: String,
    default: '100%',
  },
});
</script>

<style scoped>
.box {
  position: relative;
  width: v-bind(width);
  height: v-bind(height);
  border: 0.0065vw solid rgba(25, 186, 139, 0.17);
  background: rgba(255, 255, 255, 0.04) url(../images/line1.png);
  background-size: cover;
}
.box .top-left {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 0.7813vw;
  height: 0.7813vw;
  border: 2px solid #02a6b5;
  border-right: transparent;
  border-bottom: transparent;
}
.box .top-right {
  position: absolute;
  display: block;
  top: 0;
  right: 0;
  width: 0.7813vw;
  height: 0.7813vw;
  border: 2px solid #02a6b5;
  border-left: transparent;
  border-bottom: transparent;
}
.box .bottom-left {
  position: absolute;
  display: block;
  top: calc(100% - 0.7813vw);
  left: 0;
  width: 0.7813vw;
  height: 0.7813vw;
  border: 2px solid #02a6b5;
  border-top: transparent;
  border-right: transparent;
}

.box .bottom-right {
  position: absolute;
  display: block;
  top: calc(100% - 0.7813vw);
  right: 0;
  width: 0.7813vw;
  height: 0.7813vw;
  border: 2px solid #02a6b5;
  border-top: transparent;
  border-left: transparent;
}
</style>
