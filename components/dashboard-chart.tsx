"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js"
import { Line } from "react-chartjs-2"

// Register Chart.js components
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

export default function DashboardChart() {
  const { theme } = useTheme()
  const chartRef = useRef<Chart | null>(null)

  // Generate sample data
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  const data = {
    labels,
    datasets: [
      {
        label: "This Year",
        data: [12000, 19000, 15000, 22000, 24000, 18000, 22000, 26000, 23000, 24500, 28000, 29000],
        borderColor: "rgb(147, 51, 234)",
        backgroundColor: "rgba(147, 51, 234, 0.1)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "Last Year",
        data: [8000, 12000, 10000, 14000, 16000, 12000, 15000, 18000, 16000, 17000, 19000, 20000],
        borderColor: "rgb(99, 102, 241)",
        backgroundColor: "rgba(99, 102, 241, 0.1)",
        tension: 0.4,
        fill: true,
      },
    ],
  }

  // Update chart colors based on theme
  useEffect(() => {
    if (chartRef.current) {
      const isDark = theme === "dark"

      chartRef.current.options.scales = {
        x: {
          grid: {
            color: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
          },
          ticks: {
            color: isDark ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.7)",
          },
        },
        y: {
          grid: {
            color: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
          },
          ticks: {
            color: isDark ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.7)",
          },
        },
      }

      chartRef.current.update()
    }
  }, [theme])

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          usePointStyle: true,
          boxWidth: 6,
        },
      },
      tooltip: {
        mode: "index" as const,
        intersect: false,
      },
    },
    hover: {
      mode: "index" as const,
      intersect: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  }

  return <Line ref={chartRef} data={data} options={options} />
}

