const list = document.querySelector("#parcel-list");
const status = document.querySelector("#status");
const summary = document.querySelector("#summary");
const scenario = document.querySelector("#scenario");
const loadButton = document.querySelector("#load-button");
const cancelButton = document.querySelector("#cancel-button");
let activeController = null;
let serial = 0;
function setStatus(message, kind = "info") {
  status.textContent = message;
  status.dataset.kind = kind;
}
function renderParcels(items) {
  // TODO 1: выведите карточки доставок через createElement/textContent.
  // Пустой массив должен отображаться сообщением, а не ошибкой.
  list.replaceChildren();
  if (items.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty";
    empty.textContent = "Доставки не найдены.";
    list.appendChild(empty);
    summary.textContent = "Всего доставок: 0";
    return;
  }
  items.forEach((parcel) => {
    const card = document.createElement("article");
    card.className = "parcel-card";
    const id = document.createElement("h3");
    id.textContent = "Номер: " + parcel.id;
    const recipient = document.createElement("p");
    recipient.textContent = "Получатель: " + parcel.recipient;
    const destination = document.createElement("p");
    destination.textContent = "Город: " + parcel.destination;
    const state = document.createElement("p");
    state.textContent = "Статус: " + parcel.state;
    card.append(id, recipient, destination, state);
    list.appendChild(card);
  });
  summary.textContent = "Всего доставок: " + items.length;
}
async function loadParcels() {
  // TODO 2: для каждого запроса создайте новый AbortController, signal и таймер 2500 мс.
  // При новом запросе отменяйте предыдущий; serial поможет игнорировать устаревший ответ.
  // TODO 3: различайте HTTP 503 (response.ok === false), ошибку JSON.parse/response.json(),
  // AbortError (вручную или по тайм-ауту), сетевые ошибки.
  // TODO 4: используйте try/catch/finally, очищайте таймер и возвращайте состояние кнопок.
  setStatus("TODO: реализуйте безопасный запрос");
}
loadButton.addEventListener("click", loadParcels);
cancelButton.addEventListener("click", () => {
  // TODO 5: отмените текущий запрос через activeController.abort().
});
