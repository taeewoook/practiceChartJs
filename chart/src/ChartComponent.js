import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

const ChartComponent = () => {
  const lineChartRef = useRef(null);
  const barChartRef = useRef(null);
  const [showLineChart, setShowLineChart] = useState(false);
  const [showBarChart, setShowBarChart] = useState(false);

  useEffect(() => {
    if (showLineChart) {
      const lineCtx = lineChartRef.current.getContext("2d");
      new Chart(lineCtx, {
        type: "line",
        data: {
          labels: [
            "김태욱",
            "이강우",
            "함석준",
            "이선기",
            "이태경",
            "임지빈",
            "박주영",
            "윤태영",
            "최지현",
            "정다슬",
            "이동빈",
            "김혜지",
            "오현우",
            "김성연",
            "김영훈",
            "황석호",
            "강희정",
          ],
          datasets: [
            {
              label: "Ages",
              data: [
                24, 31, 27, 28, 27, 28, 26, 32, 28, 30, 29, 26, 26, 31, 29, 36,
                26,
              ],
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              type: "linear",
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [showLineChart]);

  useEffect(() => {
    if (showBarChart) {
      const barCtx = barChartRef.current.getContext("2d");
      new Chart(barCtx, {
        type: "bar",
        data: {
          labels: [
            "김태욱",
            "이강우",
            "함석준",
            "이선기",
            "이태경",
            "임지빈",
            "박주영",
            "윤태영",
            "최지현",
            "정다슬",
            "이동빈",
            "김혜지",
            "오현우",
            "김성연",
            "김영훈",
            "황석호",
            "강희정",
          ],
          datasets: [
            {
              label: "Ages",
              data: [
                24, 31, 27, 28, 27, 28, 26, 32, 28, 30, 29, 26, 26, 31, 29, 36,
                26,
              ],
              backgroundColor: [
                "RGB(0, 0, 128) ",
                "RGB(0, 255, 255)",
                "RGB(0, 128, 0)",
                "RGB(255, 0, 0)",
                "RGB(0, 0, 255)",
                "RGB(128, 0, 128)",
                "RGB(255, 255, 0)",
                "RGB(255, 165, 0)",
                "RGB(255, 192, 203)",
                "RGB(165, 42, 42) ",
                "RGB(128, 128, 128)",
                "RGB(0, 0, 0)",
                "RGB(0, 128, 128)",
                "RGB(0, 255, 0)",
                "RGB(128, 0, 0)",
                "RGB(255, 0, 255)",
                "RGB(128, 128, 0)",
                "RGB(250, 128, 114) ",
              ],
              borderWidth: 1,
            },
          ],
        },
      });
    }
  }, [showBarChart]);

  const handleShowLineChart = () => {
    setShowLineChart(true);
    setShowBarChart(false);
  };

  const handleShowBarChart = () => {
    setShowLineChart(false);
    setShowBarChart(true);
  };

  return (
    <div>
      <button onClick={handleShowLineChart}>Show Line Chart</button>
      {showLineChart && <canvas ref={lineChartRef} />}
      <button onClick={handleShowBarChart}>Show Bar Chart</button>
      {showBarChart && <canvas ref={barChartRef} />}
    </div>
  );
};

export default ChartComponent;
