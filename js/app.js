// temporary mock data
const data = [
  { branch: "QC", forecast: 500000, actual: 450000 },
  { branch: "Cebu", forecast: 700000, actual: 600000 }
];

const tbody = document.getElementById("budgetTable");

data.forEach(row => {
  const variance = row.actual - row.forecast;
  const status = variance <= 0 ? "OK" : "ALERT";

  tbody.innerHTML += `
    <tr>
      <td>${row.branch}</td>
      <td>₱${row.forecast.toLocaleString()}</td>
      <td>₱${row.actual.toLocaleString()}</td>
      <td class="${variance <= 0 ? 'text-success' : 'text-danger'}">
        ₱${variance.toLocaleString()}
      </td>
      <td>
        <span class="badge ${status === 'OK' ? 'bg-success' : 'bg-danger'}">
          ${status}
        </span>
      </td>
    </tr>
  `;
});
