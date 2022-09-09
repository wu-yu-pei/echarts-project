// 获取指定范围的随机整数
export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
