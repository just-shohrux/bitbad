<template>
  <div class="chart__box">
    <h2>Statistika</h2>
    <apexchart
      width="100%"
      height="310"
      type="bar"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      chartOptions: {
        chart: {
          type: "bar",
          toolbar: {
            show: false,
          },
          fontFamily: "Poppins, sans-serif",
        },
        colors: ["#3A873A", "#F5B5B3"],
        xaxis: {
          categories: this.statistics.map(item => item.product__name),
        },
        plotOptions: {
          bar: {
            borderRadius: 15,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 4,
          colors: ["#C0D9C0"],
        },
      },
      series: [
        {
          name: "Sotilgan mahsulotlar soni",
          data: this.statistics.map(item => item.count),
        },
      ],
    };
  },
  props:['statistics']
};
</script>

<style lang="scss" scoped>
.chart {
  &__box {
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    padding: 30px 40px 30px 25px;
  }
}
h2 {
  font-size: 18px;
  color: #334d6e;
  font-weight: 700;
  padding-left: 15px;
}

@media (max-width: 576px) {
  .chart__box{
    margin-left: 5px;
    margin-right: 5px;
    padding: 15px;
  }
}
</style>