<template>
  <div>
    <div ref="echarts" class="echarts"></div>
  </div>
</template>

<script>
export default {
  methods: {
    echarts() {
      let myEcharts = this.$echarts.init(this.$refs.echarts);
      var data = [];
      for (var i = 0; i <= 360; i++) {
        var t = (i / 180) * Math.PI;
        var r = Math.sin(2 * t) * Math.cos(2 * t);
        data.push([r, i]);
      }
      let option = {
        title: {
          text: "极坐标双数值轴"
        },
        legend: {
          data: ["line"]
        },
        polar: {
          center: ["50%", "54%"]
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          }
        },
        angleAxis: {
          type: "value",
          startAngle: 0
        },
        radiusAxis: {
          min: 0
        },
        series: [
          {
            coordinateSystem: "polar",
            name: "line",
            type: "line",
            showSymbol: false,
            data: data
          }
        ],
        animationDuration: 2000
      };
      myEcharts.setOption(option);
    }
  },
  mounted() {
    this.echarts();
  }
};
</script>

<style lang="scss" scoped>
.echarts {
  width: 800px;
  height: 400px;
  margin: 100px auto;
}
</style>