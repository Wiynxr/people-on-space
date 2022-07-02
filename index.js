window.addEventListener("DOMContentLoaded", () => {
  const table = document.querySelector("table");
  fetch("http://api.open-notidfy.org/astros.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // ТВОЕ РЕШЕНИЕ
      const count = document.getElementById("count");
      count.append(data.number);
      console.log(count);

      
      const peoples = data.people;
      peoples.forEach((e, i) => {

        const tr = document.createElement("tr");

        const number = document.createElement("td");
        const place = document.createElement("td");
        const name = document.createElement("td");

        number.textContent = i + 1;
        place.textContent = e.craft;
        name.textContent = e.name;

        tr.append(number, place, name)

        table.append(tr);
      });
    })
    .catch((e) => {
      // ОБРАБОТКА ОШИБОК
      count.textContent = 'Неизвестно'
      let errorDiv = document.createElement('div')
      errorDiv.textContent = e
      errorDiv.style.color = 'red';
      table.replaceWith(errorDiv);
      console.log(e);
    });
});
