<template>
  <header>
    <h1>可视化展板-ECharts</h1>
    <div>当前时间:2022年9月8-9时46分22秒</div>
  </header>
  <section>
    <div class="left">
      <div class="left-one">
        <baseShape>
          <div ref="leftOne"></div>
        </baseShape>
      </div>
      <div class="left-two">
        <baseShape>
          <div ref="leftTwo"></div>
        </baseShape>
      </div>
      <div class="left-there">
        <baseShape>
          <div ref="leftThere"></div>
        </baseShape>
      </div>
    </div>
    <div class="center">
      <div class="center-top">
        <CenterTop></CenterTop>
      </div>
      <div class="center-content">
        <CenterContent></CenterContent>
      </div>
    </div>
    <div class="right">
      <div class="right-one">
        <baseShape>
          <div ref="rightOne"></div>
        </baseShape>
      </div>
      <div class="right-two">
        <baseShape>
          <div ref="rightTwo"></div>
        </baseShape>
      </div>
      <div class="right-there">
        <baseShape>
          <div ref="rightThere"></div>
        </baseShape>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts/core';
import { GridComponent, TooltipComponent, TitleComponent, LegendComponent } from 'echarts/components';
import { BarChart, LineChart, PieChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

import baseShape from './components/baseShape.vue';
import CenterTop from './components/centerTop.vue';
import CenterContent from './components/centerContent.vue';

echarts.use([
  GridComponent,
  BarChart,
  LineChart,
  PieChart,
  CanvasRenderer,
  TooltipComponent,
  TitleComponent,
  LegendComponent,
]);

const leftOne = ref(null);
const leftTwo = ref(null);
const leftThere = ref(null);

onMounted(() => {
  // left-one
  const leftOneEcharts = echarts.init(leftOne.value);
  const leftOneEchartsOptions = {
    title: {
      text: '柱状图-就业行业',
      textStyle: {
        color: '#fff',
        fontSize: 14,
      },
      top: 10,
      left: 10,
    },
    xAxis: {
      type: 'category',
      data: ['旅游行业', '教育培训', '游戏行业', '医疗行业', '电商行业', '社交行业', '金融行业'],
      // 刻度
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
    },
    yAxis: {
      show: true,
      type: 'value',
      axisLine: {
        show: false,
        lineStyle: {
          color: '#ccc',
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          // 使用深浅的间隔色
          color: 'rgba(255,255,255,0.1)',
        },
      },
    },
    tooltip: {
      show: true,
    },
    grid: {
      top: '20%',
      left: '13%',
      bottom: '15%',
    },
    legend: {
      data: ['2019', '2020'],
      top: '10',
      right: '10',
      selected: {
        2019: true,
        2020: false,
      },
      itemWidth: 0,
      itemHeight: 0,
      textStyle: {
        color: '#fff',
        fontSize: '14',
      },
    },
    series: [
      {
        name: '2019',
        data: [200, 300, 300, 900, 1500, 1200, 600],
        type: 'bar',
        showBackground: true,
        // 背景颜色
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.0)',
        },
        barWidth: '30%',
        // 圆角
        itemStyle: {
          borderRadius: 5,
        },
      },
      {
        name: '2020',
        data: [100, 1100, 500, 1000, 900, 400, 200],
        type: 'bar',
        showBackground: true,
        // 背景颜色
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.0)',
        },
        barWidth: '30%',
        // 圆角
        itemStyle: {
          borderRadius: 5,
        },
      },
    ],
  };
  leftOneEchartsOptions && leftOneEcharts.setOption(leftOneEchartsOptions);
  // left-two
  const leftTwoEcharts = echarts.init(leftTwo.value);
  const leftTwoEchartsOptions = {
    title: {
      text: '折线图-人员变化',
      textStyle: {
        color: '#fff',
        fontSize: 14,
      },
      top: 10,
      left: 10,
    },
    xAxis: {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    },
    yAxis: {
      type: 'value',
      splitLine: {
        show: true,
        lineStyle: {
          // 使用深浅的间隔色
          color: 'rgba(255,255,255,0.1)',
        },
      },
    },
    grid: {
      top: '20%',
      left: '13%',
      bottom: '15%',
    },
    legend: {
      data: ['新增粉丝', '新增游客'],
      top: '10',
      right: '10',
      textStyle: {
        color: '#fff',
        fontSize: '14',
      },
    },
    series: [
      {
        name: '新增粉丝',
        data: [820, 932, 901, 934, 1290, 1330, 1320, 400, 200, 2000, 800, 1300],
        type: 'line',
        smooth: true,
      },
      {
        name: '新增游客',
        data: [1820, 2932, 9101, 9034, 5290, 2330, 320, 4000, 1200, 200, 1800, 1300],
        type: 'line',
        smooth: true,
      },
    ],
  };
  leftTwoEchartsOptions && leftTwoEcharts.setOption(leftTwoEchartsOptions);
  // left-there
  const leftThereEcharts = echarts.init(leftThere.value);
  const leftThereEchartsOptions = {
    title: {
      text: '饼形图-年龄分布',
      textStyle: {
        color: '#fff',
        fontSize: 14,
      },
      top: 10,
      left: 10,
    },
    tooltip: {
      trigger: 'item',
    },
    grid: {
      top: '20%',
      left: '13%',
      bottom: '15%',
    },
    legend: {
      bottom: '0',
      right: '0',
      left: '0',
      textStyle: {
        color: '#fff',
        fontSize: '12',
      },
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: '0岁' },
          { value: 735, name: '20-29岁' },
          { value: 580, name: '30-39岁' },
          { value: 484, name: '40-49岁' },
          { value: 300, name: '50↑' },
        ],
      },
    ],
  };
  leftThereEchartsOptions && leftThereEcharts.setOption(leftThereEchartsOptions);
  window.addEventListener('resize', () => {
    leftOneEcharts.resize();
    leftTwoEcharts.resize();
  });
});
</script>

<style scoped>
header {
  position: relative;
  height: 5.1504vw;
  background: url(./assets/images/head_bg.png) no-repeat;
  background-size: cover;
}

header h1 {
  text-align: center;
  height: 4.1204vw;
  line-height: 4.1204vw;
  color: #ffff;
  font-size: 1.9531vw;
}
header div {
  position: absolute;
  top: 50%;
  right: 1.3021vw;
  transform: translateY(-50%);
  color: #ffff;
}
section {
  display: flex;
  justify-content: space-between;
  padding: 0.515vw;
}
section .left,
section .right {
  width: 26.4147vw;
  height: 50.3477vw;
  color: #ffff;
}
section .left .left-one,
section .right .right-one {
  width: 26.4147vw;
  height: 15.9661vw;
  margin-bottom: 0.7726vw;
}
section .left .left-one div,
section .right .right-one div {
  width: 100%;
  height: 100%;
}
section .left .left-two,
section .right .right-two {
  width: 26.4147vw;
  height: 15.9661vw;
  margin-bottom: 0.7726vw;
}
section .left .left-two div,
section .right .right-two div {
  width: 100%;
  height: 100%;
}
section .left .left-there,
section .right .right-there {
  width: 26.4147vw;
  height: 15.9661vw;
  margin-bottom: 0.7726vw;
}
section .left .left-there div,
section .right .right-there div {
  width: 100%;
  height: 100%;
}
section .center {
  width: 44.0592vw;
  height: 49.5755vw;
  color: #ffff;
}
section .center .center-top {
  height: 7.8548vw;
  background: rgba(101, 132, 226, 0.1);
  padding: 0.7726vw;
}
section .center .center-content {
  height: calc(100% - 7.8548vw);
}
</style>
