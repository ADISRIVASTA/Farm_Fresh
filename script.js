document.addEventListener('DOMContentLoaded', function() {
    // Dynamic behavior for demand forecast chart (chart.js)
    const ctx = document.getElementById('dynamicChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
          label: 'Forecast',
          data: [50, 60, 70, 55, 65],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  });
  