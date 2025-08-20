const materials = [];
let mostExpensive = null;

// Elements
const nameEl = document.getElementById("materialName");
const categoryEl = document.getElementById("category");
const qtyEl = document.getElementById("quantity");
const supplierEl = document.getElementById("supplierName");
const costEl = document.getElementById("costPerUnit");

const btn = document.getElementById("addMaterialBtn");
const errorEl = document.getElementById("error-message");
const table = document.getElementById("materialTable");
const totalEl = document.getElementById("totalProducts");
const expensiveEl = document.getElementById("mostExpensive");

// Clear fields
function clearInputs() {
  nameEl.value = "";
  categoryEl.value = "";
  qtyEl.value = "";
  supplierEl.value = "";
  costEl.value = "";
}

// Add row to table
function addRow(item) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${item.name}</td>
    <td>${item.category}</td>
    <td>${item.qty}</td>
    <td>${item.supplier}</td>
    <td>${item.cost}</td>
  `;
  table.appendChild(tr);
}

// Update stats
function updateStats(item) {
  totalEl.textContent = materials.length;

  if (!mostExpensive || Number(item.cost) > mostExpensive.cost) {
    mostExpensive = { name: item.name, cost: Number(item.cost) };
    expensiveEl.textContent = `${mostExpensive.name} - ${mostExpensive.cost}`;
  }
}

// Button handler
btn.addEventListener("click", () => {
  errorEl.textContent = "";

  const name = nameEl.value.trim();
  const category = categoryEl.value;
  const qty = qtyEl.value;
  const supplier = supplierEl.value.trim();
  const cost = costEl.value;

  if (!name || !category || !qty || !supplier || !cost) {
    errorEl.textContent = "Please fill out all fields!";
    return;
  }

  const item = { name, category, qty, supplier, cost };
  materials.push(item);

  addRow(item);
  updateStats(item);
  clearInputs();
});
