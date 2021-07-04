$(window).on("load", function () {
  $(".loader").fadeOut(1000);
  $(".content").fadeIn(1000);
});

$(document).ready(function () {
  $(".btn").click(function () {
    $(".items").toggleClass("show");
    $("ul li").toggleClass("hide");
  });
});
const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function () {
  scrollBtn.classList.toggle("active", window.scrollY > 500);
});

scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

window.Apex = {
  chart: {
    foreColor: "#ccc",
    toolbar: {
      show: false,
    },
  },
  stroke: {
    width: 3,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    theme: "dark",
  },
  grid: {
    borderColor: "#535A6C",
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
};

var spark1 = {
  chart: {
    id: "spark1",
    group: "sparks",
    type: "line",
    height: 80,
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 2,
      opacity: 0.2,
    },
  },
  series: [
    {
      data: [6, 9, 12, 23, 42, 26],
    },
  ],
  stroke: {
    curve: "smooth",
  },
  markers: {
    size: 0,
  },
  grid: {
    padding: {
      top: 20,
      bottom: 10,
      left: 110,
    },
  },
  colors: ["#fff"],
  tooltip: {
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function formatter(val) {
          return "";
        },
      },
    },
  },
};

var spark2 = {
  chart: {
    id: "spark2",
    group: "sparks",
    type: "line",
    height: 80,
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 2,
      opacity: 0.2,
    },
  },
  series: [
    {
      data: [33, 53, 60, 55, 51, 61, 51, 42, 44],
    },
  ],
  stroke: {
    curve: "smooth",
  },
  grid: {
    padding: {
      top: 20,
      bottom: 10,
      left: 110,
    },
  },
  markers: {
    size: 0,
  },
  colors: ["#fff"],
  tooltip: {
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function formatter(val) {
          return "";
        },
      },
    },
  },
};

var spark3 = {
  chart: {
    id: "spark3",
    group: "sparks",
    type: "line",
    height: 80,
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 2,
      opacity: 0.2,
    },
  },
  series: [
    {
      data: [28, 37, 36],
    },
  ],
  stroke: {
    curve: "smooth",
  },
  markers: {
    size: 0,
  },
  grid: {
    padding: {
      top: 20,
      bottom: 10,
      left: 110,
    },
  },
  colors: ["#fff"],
  xaxis: {
    crosshairs: {
      width: 1,
    },
  },
  tooltip: {
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function formatter(val) {
          return "";
        },
      },
    },
  },
};

var spark4 = {
  chart: {
    id: "spark4",
    group: "sparks",
    type: "line",
    height: 80,
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 2,
      opacity: 0.2,
    },
  },
  series: [
    {
      data: [7, 2, 6, 5, 1, 1, 7, 5, 10, 5, 3, 13, 11, 6, 14, 3, 7],
    },
  ],
  stroke: {
    curve: "smooth",
  },
  markers: {
    size: 0,
  },
  grid: {
    padding: {
      top: 20,
      bottom: 10,
      left: 110,
    },
  },
  colors: ["#fff"],
  xaxis: {
    crosshairs: {
      width: 1,
    },
  },
  tooltip: {
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function formatter(val) {
          return "";
        },
      },
    },
  },
};

new ApexCharts(document.querySelector("#spark1"), spark1).render();
new ApexCharts(document.querySelector("#spark2"), spark2).render();
new ApexCharts(document.querySelector("#spark3"), spark3).render();
new ApexCharts(document.querySelector("#spark4"), spark4).render();

var optionsLine = {
  chart: {
    height: 328,
    type: "line",
    zoom: {
      enabled: false,
    },
    dropShadow: {
      enabled: true,
      top: 3,
      left: 2,
      blur: 4,
      opacity: 1,
    },
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  colors: ["#00ff40", "#ff0040"],
  series: [
    {
      name: "Goals",
      data: [
        6, 16, 12, 31, 42, 25, 33, 61, 61, 61, 50, 64, 51, 54, 42, 30, 38, 37,
      ],
    },
    {
      name: "Assist",
      data: [0, 0, 0, 0, 0, 2, 0, 15, 15, 11, 14, 20, 15, 12, 7, 10, 6, 4],
    },
  ],
  title: {
    text: "Goal Contribution",
    align: "left",
    offsetY: 25,
    offsetX: 20,
  },
  subtitle: {
    text: "Statistics",
    offsetY: 55,
    offsetX: 20,
  },
  markers: {
    size: 6,
    strokeWidth: 0,
    hover: {
      size: 9,
    },
  },
  grid: {
    show: true,
    padding: {
      bottom: 0,
    },
  },
  labels: [
    "2003/04",
    "2004/05",
    "2005/06",
    "2006/07",
    "2007/08",
    "2008/09",
    "2009/10",
    "2010/11",
    "2011/12",
    "2012/13",
    "2013/14",
    "2014/15",
    "2015/16",
    "2016/17",
    "2017/18",
    "2018/19",
    "2019/20",
    "2020/21",
  ],
  xaxis: {
    tooltip: {
      enabled: false,
    },
  },
  legend: {
    position: "top",
    horizontalAlign: "right",
    offsetY: -20,
  },
};

var chartLine = new ApexCharts(
  document.querySelector("#line-adwords"),
  optionsLine
);
chartLine.render();

(() => {
  const btn = document.getElementById("fusionexport-btn");
  btn.addEventListener("click", async function () {
    const endPoint =
      "https://www.fusioncharts.com/demos/dashboards/fusionexport-apexcharts/api/export-dashboard";
    const information = {
      dashboardName: "dark",
    };

    this.setAttribute("disabled", true);
    const { data } = await axios.post(endPoint, information, {
      responseType: "blob",
    });
    await download(data, "apexCharts-dark-dashboard.pdf", "application/pdf");
    this.removeAttribute("disabled");
  });
})();
