var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Green", "Blue", "Gray", "Purple", "Yellow", "Red", "Black", "Forest", "Lavender"],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#95a5a6",
        "#9b59b6",
        "#f1c40f",
        "#e74c3c",
        "#34495e",
        "#3a6e50",
        "#938abf"
      ],
      data: [12, 19, 3, 17, 28, 24, 7, 3, 12]
    }]
  }
});