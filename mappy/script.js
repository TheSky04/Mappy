"strict mode";

const form = document.querySelector(".app__form");
const InputType = document.querySelector("#type");
const InputDistance = document.querySelector("#distance");
const InputDuration = document.querySelector("#duration");
const InputPeople = document.querySelector("#people");
const appList = document.querySelector(".app__list");
const appContent = document.querySelector(".app__content");

class Workout {
  id = Math.ceil(Math.random() * 100000000000);
  date = new Date();

  constructor(coords, distance, duration, people, type) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
    this.people = people;
    this.type = type;
    this.description = this.setDescription(type);
  }

  setDescription(type) {
    // prettier-ignore
    const months = ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'];

    const putEmoji = function (type) {
      if (type === "Bar") {
        return "🍻";
      }

      if (type === "Kafe") {
        return "☕";
      }

      if (type === "Halı-saha") {
        return "⚽";
      }

      if (type === "Okey-101") {
        return "🎰";
      }
    };

    return `${putEmoji(type)} ${this.date.getDate()} ${
      months[this.date.getMonth()]
    } ${this.type}`;
  }
}

class App {
  #map;
  #mapEvent;
  #workouts = [];

  constructor() {
    appContent.addEventListener("click", this._moveToPopup.bind(this));
    this._getPosition();
    this._getLocalStorage();
    form.addEventListener("submit", this._newWorkout.bind(this));
  }

  _getPosition() {
    navigator.geolocation.getCurrentPosition(
      this._loadMap.bind(this),
      this._getAlert
    );
  }
  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem("workouts"));
    if (!data) return;
    this.#workouts = data;

    this.#workouts.forEach((workout) => {
      this._renderWorkoutOnList(workout);
    });
  }
  _loadMap(position) {
    const { latitude, longitude } = position.coords;
    const coords = [latitude, longitude];

    this.#map = L.map("map").setView(coords, 13);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on("click", this._showForm.bind(this));

    this.#workouts.forEach((workout) => {
      this._renderWorkoutOnMap(workout);
    });
  }

  _getAlert() {
    alert("Could not get your current position.");
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove("hidden");
    InputDistance.focus();
  }

  _hideForm() {
    form.classList.add("hidden");
    InputDistance.value = InputDuration.value = InputPeople.value = "";
  }

  _newWorkout(e) {
    e.preventDefault();
    // get data from form
    const type = InputType.value;
    const distance = +InputDistance.value;
    const duration = +InputDuration.value;
    const people = +InputPeople.value;
    const { lat, lng } = this.#mapEvent.latlng;
    // create workout object
    if (!(distance > 0 && duration > 0 && people > 0)) {
      return alert("Değerler sayı ve pozitif olmalı.");
    }
    const workout = new Workout([lat, lng], distance, duration, people, type);
    console.log(workout);
    // add workout to workouts
    this.#workouts.push(workout);

    // render workout on map
    this._renderWorkoutOnMap(workout);

    // render workout on list
    this._renderWorkoutOnList(workout);

    // clear Inputs and hide form
    this._hideForm();

    // storage workout in localstorage
    this._setLocalStorage();
  }

  _renderWorkoutOnList(workout) {
    let html = `
    <li class="app__item" id="${workout.id}">
        <p class="app__event">${workout.description}</p>
        <div class="app__details">
          <div class="app__details--box">
            <p class="app__details--emoji">🏃‍♂️</p>
            <p class="app__details--detail">
              <span class="app__details--number">${workout.distance}</span>km
            </p>
          </div>
          <div class="app__details--box">
            <p class="app__details--emoji">⏰</p>
            <p class="app__details--detail">
              <span class="app__details--number">${workout.duration}</span>saat
            </p>
          </div>
          <div class="app__details--box">
            <p class="app__details--emoji">🧍‍♂️</p>
            <p class="app__details--detail">
              <span class="app__details--number">${workout.people}</span>dk/km
            </p>
          </div>
          <div class="app__details--box">
            <p class="app__details--emoji">📐</p>
            <p class="app__details--detail">
              <span class="app__details--number">${(
                workout.distance / workout.duration
              ).toFixed(1)}</span>kbh
            </p>
          </div>
        </div>
    </li>
    `;
    appList.insertAdjacentHTML("afterbegin", html);
  }

  _renderWorkoutOnMap(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          minWidth: 100,
          maxWidth: 250,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(`${workout.description}`)
      .openPopup();
  }

  _setLocalStorage() {
    localStorage.setItem("workouts", JSON.stringify(this.#workouts));
  }

  _moveToPopup(e) {
    const item = e.target.closest(".app__item");
    if (!item) return;
    const itemEl = this.#workouts.find((workout) => workout.id === +item.id);
    console.log(itemEl);

    this.#map.setView(itemEl.coords, 13, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
  }

  reset() {
    localStorage.clear();
    location.reload();
  }
}

const app = new App();
