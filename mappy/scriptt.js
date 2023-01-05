'use strict';



const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

/************************************************* USİNG THE GEOLOCATİON API *******************************************************/
// (NOT : NAVİGATOR.GEOLOCATİON.GETCURRENTPOSİTİON 2 TANE FONKSİYON İÇİNE ALIR, İLKİ SUCCESS , İKİNCİ ERROR FONKSİYONUDUR.)

// if(navigator.geolocation){
//     navigator.geolocation.getCurrentPosition(function(position){
//         const latitude = position.coords.latitude;
//         const longitude = position.coords.longitude;
//         console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
//     },function(){
//         alert("Could not get your position");
//     });
// };

/*********************************************** Displaying a Map Using Leaflet Library *********************************************/
// 1) leaflet sitesine gir ve download kısmından link ve script kodlarını al ve html orjinal script üstüne yapıştır.defer ekle.
// 2) overview kısmındaki kodları kopyala ve success function'u içine yapıştır.
// 3) var map'i const map olarak değiştir. const map kısmındaki map içine html'de belirtilen div'in id'si girilecek.(HTML'DE HAZIR VERİLDİ.)
// yani haritayı hangi divin içine yerleştirmek istiyorsak o divin id adı verilecek.
// (NOT :  L.map('map') kısmındaki L, Leaflet namespace'ini temsil ediyor.)
// (ÖNEMLİ NOT : HTML'E 2 TANE SCRİPT BAĞLADIĞIMIZ ZAMAN ALTTA KALAN SCRİPT ÜSTTEKİNE ERİŞEBİLİR ANCAK ÜSTTE OLAN ALTTAKİNE ERİŞEMEZ.)
// (BU YÜZDEN EKLEDİĞİMİZ lEAFLET SCRİPT KODUNU SCRİPT.JS SCRİPT ETİKETİNİN ÜSTÜNE YERLEŞTİRİYORUZ.)
// 4) const coords = [latitude,longitude]; oluştur ve [51.505,-0.09] olan yerleri setView ve marker içini coords olarak değiştir.
// (NOT: SETVİEW İÇİNDEKİ 2.DEĞER (DEFAULT OLARAK 13) ZOOM KISMINI TEMSİL EDER.SAYI ARTTIKÇA YAKINLAŞIR,AZALDIKÇA UZAKLAŞIR.)
// 5) tileLayer içinde verilen 'org' kısmını 'fr/hot' olarak değiştir ve incele.


// if(navigator.geolocation){
//     navigator.geolocation.getCurrentPosition(function(position){
//         const latitude = position.coords.latitude;
//         const longitude = position.coords.longitude;
//         const coords = [latitude,longitude];

//         console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
//         // 3)
//         const map = L.map('map').setView(coords, 13);

//         L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//             attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         }).addTo(map);

//         L.marker(coords).addTo(map)
//         .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//         .openPopup();

//     },function(){
//         alert("Could not get your position");
//     });
// };


/*********************************************** Displaying a Map Marker *********************************************/
// (NOT: Burada oluşturulan map.on methodu javascripte özgü değil Leaflet'e özgü bir method'tur.)
// (NOT: bindPopup(L.popup({...}))) içine gelen değerler Leaflet documentation'dan alınmıştır.
// 1) map.on methodu oluşturuldu ve success Fonksiyonun en sonuna yerleştirildi.
//  L.marker methodu map.on methodunun içine yerleştirildi ve güncellendi.

// if(navigator.geolocation){
//     navigator.geolocation.getCurrentPosition(function(position){
//         const latitude = position.coords.latitude;
//         const longitude = position.coords.longitude;
//         const coords = [latitude,longitude];

//         console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
//         // 3)
//         const map = L.map('map').setView(coords, 13);

//         L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//             attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         }).addTo(map);

    
//         map.on('click',function(mapEvent){

//             const {lat,lng} = mapEvent.latlng;

//             L.marker([lat,lng]).addTo(map)
//             .bindPopup(L.popup({
//                 maxWidth:250,
//                 minWidth:100,
//                 autoClose:false,
//                 closeOnClick:false,
//                 className:'running-popup'
//             }))
//             .setPopupContent('Workout')
//             .openPopup();
//         });

//     },function(){
//         alert("Could not get your position");
//     });
// };


/*********************************************** Rendering Workout Input Form *********************************************/
// 1) map.on içindekileri yorum satırı yaparak başlıyoruz.
// 2) map.on içine form.classList.remove('hidden');inputDistance.focus(); ekle.
// 3) form.addEventListener('submit',function(){ içine yorum satırını yapıştır. })
// 4) map ve mapEvent methodunu global'de tamamla.ardından map.on methodundaki mapEvent'i mapE olarak değiştir.
// ardından map.on methodu içine mapEvent = mapE; yaz.
// 5) form.addEventListener içine e parametresini gönder ve e.preventDefault(); yap.
// 6) form.addEventListener içine inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = ''; ekle.
// 7) inputType.addEventListener('change',function(){
//     inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
//     inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
// }); en sona ekle.


// let map,mapEvent;
// if(navigator.geolocation){
//     navigator.geolocation.getCurrentPosition(function(position){
//         const latitude = position.coords.latitude;
//         const longitude = position.coords.longitude;
//         const coords = [latitude,longitude];

//         console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
//         // 3)
//         map = L.map('map').setView(coords, 13);

//         L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//             attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         }).addTo(map);

    
//         map.on('click',function(mapE){
//             mapEvent = mapE;
//             form.classList.remove('hidden');
//             inputDistance.focus();


            
//         });

//     },function(){
//         alert("Could not get your position");
//     });
// };

// form.addEventListener('submit',function(e){
//     e.preventDefault();

//     inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';

//     const {lat,lng} = mapEvent.latlng;

//     L.marker([lat,lng]).addTo(map)
//     .bindPopup(L.popup({
//         maxWidth:250,
//         minWidth:100,
//         autoClose:false,
//         closeOnClick:false,
//         className:'running-popup'
//     }))
//     .setPopupContent('Workout')
//     .openPopup();
// });

// inputType.addEventListener('change',function(){
//     inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
//     inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
// });


/********************************************* Refactoring for Project Architecture ***********************************************/
// 1) global'in hemen altına App class'ı oluştur ve mapty-architecture-part-1 den eklemen gereken methodları gör ve aynısını yap.
// 2) if(navigator.geolocation) olan kısmı kes ve _getPosition olan kısma yapıştır.
// 3) success fonksiyonunu kes ve _loadMap kısmına yapıştır._loadMap fonksiyonu içine position gönder.
// _getPosition'da success fonksiyonu yerine this._loadMap yaz.
// 4) let app = new App(); oluştur ve constructor içine this._getPosition; yaz.
// 5) class App altına #map; ve #mapEvent; yaz ve class içindeki map ve mapEventsleri # ile güncelle.
// 6) hata alacağız.Bu hata this methodundan kaynaklanıyor.getCurrentPosition içine regular function almış bu yüzden 
// this._loadMap'i this._loadMap.bind() olarak güncelleyeceğiz.
// 7) form.addEventlistener'ı al ve constructor içine yerleştir.ardından fonksiyonu kes ve _newWorkOut içine gönder ve
// _newWorkout'a parametre olarak e gönder. ardından constructor içindeki form.addEventListener('submit',this._newWorkOut); olarak güncelle.
// ardından da _newWorkout içindeki map'leri this.#map olarak güncelle.
// 8) haritaya tıkladığında hata alacaksın constructor içindeki form.addEventListener('submit',this._newWorkOut)'i 
// form.addEventListener('submit',this._newWorkOut.bind(this)); olarak güncelle.
// 9) this.#map.on fonksiyonu içindekileri kes _showForm'a yapıştır._showForm function içine mapE gönder.
// ardından this.#map.on içine de this.#map.on('click',this._showForm.bind(this)); olarak güncelle.
// 10) _newWorkOut içine gel const {lat,lng} = mapEvent.latlng; içini const {lat,lng} = this.#mapEvent.latlng; olarak güncelle.
// 11)inputType.addEventListener kes ve constructor içine yapıştır.inputType içindekileri kes ve _toggleElevationField kısmına yapıştır.
// constructor içindeki inputType'ı inputType.addEventListener('change',this._toggleElevationField); olarak güncelle.
// 12) globaldeki let map,mapEvent kaldır.

// class App{

//     #map;
//     #mapEvent;

//     constructor(){
//         this._getPosition();
//         form.addEventListener('submit',this._newWorkOut.bind(this));
//         inputType.addEventListener('change',this._toggleElevationField);
//     }

//     _getPosition(){
//         if(navigator.geolocation){
//             navigator.geolocation.getCurrentPosition(this._loadMap.bind(this),function(){
//                 alert("Could not get your position");
//             });
//         };
//     }

//     _loadMap(position){
        
//         const latitude = position.coords.latitude;
//         const longitude = position.coords.longitude;
//         const coords = [latitude,longitude];

//         console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
//         // 3)
//         this.#map = L.map('map').setView(coords, 13);

//         L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//             attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         }).addTo(this.#map);

    
//         this.#map.on('click',this._showForm.bind(this));
//     }

//     _showForm(mapE){
//         this.#mapEvent = mapE;
//         form.classList.remove('hidden');
//         inputDistance.focus();
//     }

//     _toggleElevationField(){
//         inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
//         inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
//     }

//     _newWorkOut(e){
//             e.preventDefault();
        
//             inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
        
//             const {lat,lng} = this.#mapEvent.latlng;
        
//             L.marker([lat,lng]).addTo(this.#map)
//             .bindPopup(L.popup({
//                 maxWidth:250,
//                 minWidth:100,
//                 autoClose:false,
//                 closeOnClick:false,
//                 className:'running-popup'
//             }))
//             .setPopupContent('Workout')
//             .openPopup();
//     }

// };

// let app = new App();

/******************************************* Managing Workout Data : Creating Classes *********************************************/
// 1) Mapty-architecture-part-1'e bakarak workout,cycling ve running class'ları oluştur.
// 2) const run1 = new Running([39,-12],5.2,24,178);const cycling1 = new Cycling([39,-12],27,95,523);console.log(run1,cycling1);
// yap incele,ardından yorum satırı yap.

// class Workout{

//     date = new Date();
//     id = (Date.now()+'').slice(-10);

//     constructor(coords,distance,duration){
//         this.coords = coords;
//         this.distance = distance;
//         this.duration = duration;
//     }
// };

// class Running extends Workout{

//     constructor(coords,distance,duration,cadence){
//         super(coords,distance,duration);
//         this.cadence = cadence;
//         this.calcPace();
//     }

//     calcPace(){
//         this.pace = this.duration / this.distance;
//         return this.pace;
//     }

// }

// class Cycling extends Workout{

//     constructor(coords,distance,duration,elevationGain){
//         super(coords,distance,duration);
//         this.eleveationGain = elevationGain;
//         this.calcSpeed();
//     }

//     calcSpeed(){
//         this.speed = this.distance / (this.duration/60);
//         return this.speed;
//     }

// }

// // const run1 = new Running([39,-12],5.2,24,178);
// // const cycling1 = new Cycling([39,-12],27,95,523);
// // console.log(run1,cycling1);


// class App{

//     #map;
//     #mapEvent;

//     constructor(){
//         this._getPosition();
//         form.addEventListener('submit',this._newWorkOut.bind(this));
//         inputType.addEventListener('change',this._toggleElevationField);
//     }

//     _getPosition(){
//         if(navigator.geolocation){
//             navigator.geolocation.getCurrentPosition(this._loadMap.bind(this),function(){
//                 alert("Could not get your position");
//             });
//         };
//     }

//     _loadMap(position){
        
//         const latitude = position.coords.latitude;
//         const longitude = position.coords.longitude;
//         const coords = [latitude,longitude];

//         console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
//         // 3)
//         this.#map = L.map('map').setView(coords, 13);

//         L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//             attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         }).addTo(this.#map);

    
//         this.#map.on('click',this._showForm.bind(this));
//     }

//     _showForm(mapE){
//         this.#mapEvent = mapE;
//         form.classList.remove('hidden');
//         inputDistance.focus();
//     }

//     _toggleElevationField(){
//         inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
//         inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
//     }

//     _newWorkOut(e){
//             e.preventDefault();
        
//             inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
        
//             const {lat,lng} = this.#mapEvent.latlng;
        
//             L.marker([lat,lng]).addTo(this.#map)
//             .bindPopup(L.popup({
//                 maxWidth:250,
//                 minWidth:100,
//                 autoClose:false,
//                 closeOnClick:false,
//                 className:'running-popup'
//             }))
//             .setPopupContent('Workout')
//             .openPopup();
//     }

// };

// let app = new App();


/********************************************** Creating a new Workout *********************************************************/
// 1) _newWorkOut methoduna sırasıyla get data from form,Check if data is valid,If work out running create running object,
// if workout cycling create cycling object,Add new object to workout array,Render workout on map as marker ,Render workout on list yapacağız.
// 2) ardından _workout içindeki kes ve render workout on map as marker kısmına yapıştır.
// 3) get data from form altına const type = inputType.value;const distance = +inputDistance.value;const duration = +inputDuration.value;
// 4) // If work out running create running object içine alttaki kod satırını yaz.
// if(type === 'running'){
//     const cadence = +inputCadence.value;

//     if(!validInputs(distance,duration,cadence) || !allPositive(distance,duration,cadence)){
//         return alert('Inputs have to be positive numbers!');
//     }

//     workout = new Running([lat,lng],distance,duration,cadence);
    
// }
// 5) // If work out cycling create cycling object altına alttaki kod satırını yaz.
// if(type === 'cycling'){
//     const elevation = +inputElevation.value;
//     if(!validInputs(distance,duration,elevation)|| !allPositive(distance,duration)){
//         return alert('Inputs have to be positive numbers!');
//     }
//     workout = new Cycling([lat,lng],distance,duration,elevation);
// };
// 6) get data from form içine let workout; tanımla  buraya çek.
// 7) get data from form üstüne, const validInputs = (...inputs) => inputs.every(input => Number.isFinite(input));
// const allPositive = (...inputs) => inputs.every(input => input>0); yapıştır.
// 8) class App constructor üstüne #workouts = []; yapıştır ve _newWorkOut'ta 
// // Add new object to workout array altına this.#workouts.push(workout); yapıştır.
// 9) _renderWorkOutMarker fonksiyonu dışarda oluştur ve L.marker'lı kısmı onun içine at 
// ve const {lat,lng} = this.#mapEvent.latlng; kısmını get data from form içine çek,
// kestiğin kısma this._renderWorkOutMarker(workout); yaz ve L.marker'ın içine workout.coords olarak güncelle. L.marker(workout.coords)
// ve className:`${workout.type}-popup` olarak güncelle.
// 10) // Render workout on map as marker altına this._renderWorkOutMarker(workout); yaz.
// 11) Running class'ına constructor üstüne type="running" ve cycling class'ına constructor üstüne type="cycling"; yaz.





// class Workout{

//     date = new Date();
//     id = (Date.now()+'').slice(-10);

//     constructor(coords,distance,duration){
//         this.coords = coords;
//         this.distance = distance;
//         this.duration = duration;
//     }
// };

// class Running extends Workout{

//     type = "running";

//     constructor(coords,distance,duration,cadence){
//         super(coords,distance,duration);
//         this.cadence = cadence;
//         this.calcPace();
//     }

//     calcPace(){
//         this.pace = this.duration / this.distance;
//         return this.pace;
//     }

// }

// class Cycling extends Workout{

//     type="cycling";

//     constructor(coords,distance,duration,elevationGain){
//         super(coords,distance,duration);
//         this.eleveationGain = elevationGain;
//         this.calcSpeed();
//     }

//     calcSpeed(){
//         this.speed = this.distance / (this.duration/60);
//         return this.speed;
//     }

// }

// // const run1 = new Running([39,-12],5.2,24,178);
// // const cycling1 = new Cycling([39,-12],27,95,523);
// // console.log(run1,cycling1);


// class App{

//     #map;
//     #mapEvent;
//     #workouts = [];

//     constructor(){
//         this._getPosition();
//         form.addEventListener('submit',this._newWorkOut.bind(this));
//         inputType.addEventListener('change',this._toggleElevationField);
//     }

//     _getPosition(){
//         if(navigator.geolocation){
//             navigator.geolocation.getCurrentPosition(this._loadMap.bind(this),function(){
//                 alert("Could not get your position");
//             });
//         };
//     }

//     _loadMap(position){
        
//         const latitude = position.coords.latitude;
//         const longitude = position.coords.longitude;
//         const coords = [latitude,longitude];

//         console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
//         // 3)
//         this.#map = L.map('map').setView(coords, 13);

//         L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//             attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         }).addTo(this.#map);

    
//         this.#map.on('click',this._showForm.bind(this));
//     }

//     _showForm(mapE){
//         this.#mapEvent = mapE;
//         form.classList.remove('hidden');
//         inputDistance.focus();
//     }

//     _toggleElevationField(){
//         inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
//         inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
//     }

//     _newWorkOut(e){

//             const validInputs = (...inputs) => inputs.every(input => Number.isFinite(input));
//             const allPositive = (...inputs) => inputs.every(input => input>0);

//             // get data from form
//             const type = inputType.value;
//             const distance = +inputDistance.value;
//             const duration = +inputDuration.value;
//             const {lat,lng} = this.#mapEvent.latlng;
//             let workout;

//             // check if data is valid

//             // If work out running create running object,
//             if(type === 'running'){
//                 const cadence = +inputCadence.value;

//                 if(!validInputs(distance,duration,cadence) || !allPositive(distance,duration,cadence)){
//                     return alert('Inputs have to be positive numbers!');
//                 }

//                 workout = new Running([lat,lng],distance,duration,cadence);
                
//             }

//             // If work out cycling create cycling object,

//             if(type === 'cycling'){
//                 const elevation = +inputElevation.value;
//                 if(!validInputs(distance,duration,elevation)|| !allPositive(distance,duration)){
//                     return alert('Inputs have to be positive numbers!');
//                 }
//                 workout = new Cycling([lat,lng],distance,duration,elevation);
//             };

//             // Add new object to workout array
//             this.#workouts.push(workout);

//             // Render workout on map as marker 
//             this._renderWorkOutMarker(workout);
//             e.preventDefault();

                // Render workout on list
        
//             inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
//         }

//         _renderWorkOutMarker(workout){
//             L.marker(workout.coords).addTo(this.#map)
//             .bindPopup(L.popup({
//                 maxWidth:250,
//                 minWidth:100,
//                 autoClose:false,
//                 closeOnClick:false,
//                 className:`${workout.type}-popup`
//             }))
//             .setPopupContent('workout')
//             .openPopup();
//         }
//             
  
// };

// let app = new App();
/********************************************** Rendering WorkOuts *********************************************************/
// 1) render workout on list altına this._renderWorkout(workout); yaz. ve dışarda _renderWorkout(workout) function oluştur.
// 2) html satırındaki yorum satırından li,h2 ve altındaki 2 divi al ve let html diyip içine yapıştır.
// 3) html içi let html = `
//         <li class="workout workout--${workout.type}" data-id="${workout.id} ">
//         <h2 class="workout__title">Running on April 14</h2>
//         <div class="workout__details">
//             <span class="workout__icon">${workout.type === 'running' ? "🏃‍♂️" : "🚴‍♀️"}</span>
//             <span class="workout__value">${workout.distance}</span>
//             <span class="workout__unit">km</span>
//         </div>
//         <div class="workout__details">
//             <span class="workout__icon">⏱</span>
//             <span class="workout__value">${workout.duration}</span>
//             <span class="workout__unit">min</span>
//         </div>
//   `;
// 4) ardından Workout class'ına gel ve _setDescription(){} methodu oluştur.
// _setDescription(){     
// const months = [
//     'January',
//     'February', 
//     'March',
//     'April',
//     'May',
//     'June', 
//     'July', 
//     'August', 
//     'September', 
//     'October', 
//     'November', 
//     'December'];

//     this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`;
// }
// 5) ardından this._setDescription(); kısmını workout constructor'ına değil child'ların constructor'ına yazacağız.
// bunun sebebi ise içeriğindeki type'ın child class'larda ifade edilmiş olmasından dolayıdır.
// 6) ardından tekrar _renderWorkout function'ına gel ve html içinde Running on April 14 yazan kısmı ${workout.description} yap.
// 7) html kodunun altına 
// if(workout.type === 'running'){
//     html += `
//     <div class="workout__details">
//         <span class="workout__icon">⚡️</span>
//         <span class="workout__value">${workout.pace.toFixed(1)}</span>
//         <span class="workout__unit">min/km</span>
//     </div>
//     <div class="workout__details">
//         <span class="workout__icon">🦶🏼</span>
//         <span class="workout__value">${workout.cadence}</span>
//         <span class="workout__unit">spm</span>
//     </div>
//     </li>
//     `;
// }
// 8) tekrar bir if ve alttaki kod satırı şeklinde devam et.
// if(workout.type === 'cycling'){
//     html += `
//     <div class="workout__details">
//         <span class="workout__icon">⚡️</span>
//         <span class="workout__value">${workout.speed.toFixed(1)}</span>
//         <span class="workout__unit">km/h</span>
//     </div>
//     <div class="workout__details">
//         <span class="workout__icon">⛰</span>
//         <span class="workout__value">${workout.elevationGain}</span>
//         <span class="workout__unit">m</span>
//     </div>
//     </li>
//     `;
// }
// 9) _renderWorkout'un en altına form.insertAdjacentHTML('afterend',html); ekle.
// 10) _newWorkOut kısmındaki inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = ''; satırını kes
// ve onun yerine this._hideForm(); yapıştır.
// 11) _showForm function'ının altına _hideForm(){} oluştur ve aşşağıdaki kod satırı gibi yap.
// (NOT: ÖNCE FORM.STYLE.DİSPLAY VE SETTİMEOUT OLMADAN DENE VE OLMADIĞINI GÖR ARDINDAN AŞŞAĞIDAKİ KOD SATIRI GİBİ YAP.)
// _hideForm(){
//     // Empty the inputs
//     inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
//     form.style.display = 'none';
//     form.classList.add('hidden');
//     setTimeout(() => (form.style.display = 'grid'),1000);
// };
// 12) _renderWorkOutMarker(workout) function'ına gel ve setPopupContent içini aşşağıdaki kod satırı yap.
// .setPopupContent(`${workout.type === 'running' ? "🏃‍♂️" : "🚴‍♀️" } ${workout.description}`)

// class Workout{

//     date = new Date();
//     id = (Date.now()+'').slice(-10);

//     constructor(coords,distance,duration){
//         this.coords = coords;
//         this.distance = distance;
//         this.duration = duration;
        
//     }

//     _setDescription(){
        
//         const months = [
//         'January',
//         'February', 
//         'March',
//         'April',
//         'May',
//         'June', 
//         'July', 
//         'August', 
//         'September', 
//         'October', 
//         'November', 
//         'December'];

//         this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`;
//     }
// };

// class Running extends Workout{

//     type = "running";

//     constructor(coords,distance,duration,cadence){
//         super(coords,distance,duration);
//         this.cadence = cadence;
//         this.calcPace();
//         this._setDescription();
//     }

//     calcPace(){
//         this.pace = this.duration / this.distance;
//         return this.pace;
//     }

// }

// class Cycling extends Workout{

//     type="cycling";

//     constructor(coords,distance,duration,elevationGain){
//         super(coords,distance,duration);
//         this.eleveationGain = elevationGain;
//         this.calcSpeed();
//         this._setDescription();
//     }

//     calcSpeed(){
//         this.speed = this.distance / (this.duration/60);
//         return this.speed;
//     }

// }

// // const run1 = new Running([39,-12],5.2,24,178);
// // const cycling1 = new Cycling([39,-12],27,95,523);
// // console.log(run1,cycling1);


// class App{

//     #map;
//     #mapEvent;
//     #workouts = [];

//     constructor(){
//         this._getPosition();
//         form.addEventListener('submit',this._newWorkOut.bind(this));
//         inputType.addEventListener('change',this._toggleElevationField);
//     }

//     _getPosition(){
//         if(navigator.geolocation){
//             navigator.geolocation.getCurrentPosition(this._loadMap.bind(this),function(){
//                 alert("Could not get your position");
//             });
//         };
//     }

//     _loadMap(position){
        
//         const latitude = position.coords.latitude;
//         const longitude = position.coords.longitude;
//         const coords = [latitude,longitude];

//         console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
//         // 3)
//         this.#map = L.map('map').setView(coords, 13);

//         L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//             attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         }).addTo(this.#map);

    
//         this.#map.on('click',this._showForm.bind(this));
//     }

//     _showForm(mapE){
//         this.#mapEvent = mapE;
//         form.classList.remove('hidden');
//         inputDistance.focus();
//     }

//     _hideForm(){
//         // Empty the inputs
//         inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
//         form.style.display = 'none';
//         form.classList.add('hidden');
//         setTimeout(() => (form.style.display = 'grid'),1000);
//     };

//     _toggleElevationField(){
//         inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
//         inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
//     }

//     _newWorkOut(e){

//             const validInputs = (...inputs) => inputs.every(input => Number.isFinite(input));
//             const allPositive = (...inputs) => inputs.every(input => input>0);

//             // get data from form
//             const type = inputType.value;
//             const distance = +inputDistance.value;
//             const duration = +inputDuration.value;
//             const {lat,lng} = this.#mapEvent.latlng;
//             let workout;

//             // check if data is valid

//             // If work out running create running object,
//             if(type === 'running'){
//                 const cadence = +inputCadence.value;

//                 if(!validInputs(distance,duration,cadence) || !allPositive(distance,duration,cadence)){
//                     return alert('Inputs have to be positive numbers!');
//                 }

//                 workout = new Running([lat,lng],distance,duration,cadence);
                
//             }

//             // If work out cycling create cycling object,

//             if(type === 'cycling'){
//                 const elevation = +inputElevation.value;
//                 if(!validInputs(distance,duration,elevation)|| !allPositive(distance,duration)){
//                     return alert('Inputs have to be positive numbers!');
//                 }
//                 workout = new Cycling([lat,lng],distance,duration,elevation);
//             };

//             // Add new object to workout array
//             this.#workouts.push(workout);

//             // Render workout on map as marker 
//             this._renderWorkOutMarker(workout);
//             e.preventDefault();

//             // Render workout on list
//             this._renderWorkOut(workout);
        
//             // Hide form + clear input fields
//             this._hideForm();
//         }

//         _renderWorkOutMarker(workout){
//             L.marker(workout.coords).addTo(this.#map)
//             .bindPopup(L.popup({
//                 maxWidth:250,
//                 minWidth:100,
//                 autoClose:false,
//                 closeOnClick:false,
//                 className:`${workout.type}-popup`
//             }))
//             .setPopupContent(`${workout.type === 'running' ? "🏃‍♂️" : "🚴‍♀️" } ${workout.description}`)
//             .openPopup();
//         }
            
//         _renderWorkOut(workout){
//             let html = `
//             <li class="workout workout--${workout.type}" data-id="${workout.id} ">
//                 <h2 class="workout__title">${workout.description}</h2>
//                 <div class="workout__details">
//                     <span class="workout__icon">${workout.type === 'running' ? "🏃‍♂️" : "🚴‍♀️"}</span>
//                     <span class="workout__value">${workout.distance}</span>
//                     <span class="workout__unit">km</span>
//                 </div>
//                 <div class="workout__details">
//                     <span class="workout__icon">⏱</span>
//                     <span class="workout__value">${workout.duration}</span>
//                     <span class="workout__unit">min</span>
//                 </div>
//             `;
//             if(workout.type === 'running'){
//                 html += `
//                 <div class="workout__details">
//                     <span class="workout__icon">⚡️</span>
//                     <span class="workout__value">${workout.pace.toFixed(1)}</span>
//                     <span class="workout__unit">min/km</span>
//                 </div>
//                 <div class="workout__details">
//                     <span class="workout__icon">🦶🏼</span>
//                     <span class="workout__value">${workout.cadence}</span>
//                     <span class="workout__unit">spm</span>
//                 </div>
//                 </li>
//                 `;
//             }

//             if(workout.type === 'cycling'){
//                 html += `
//                 <div class="workout__details">
//                     <span class="workout__icon">⚡️</span>
//                     <span class="workout__value">${workout.speed.toFixed(1)}</span>
//                     <span class="workout__unit">km/h</span>
//                 </div>
//                 <div class="workout__details">
//                     <span class="workout__icon">⛰</span>
//                     <span class="workout__value">${workout.elevationGain}</span>
//                     <span class="workout__unit">m</span>
//                 </div>
//                 </li>
//                 `;
//             }

//             form.insertAdjacentHTML('afterend',html);


//         }
  
// };

// let app = new App();



/********************************************** Move To Marker On Click *********************************************************/
// 1) App class'ına gel ve constructor içine containerWorkouts.addEventListener('click',this._moveToPopup.bind(this)) yaz;
// 2) App class'ının en sonuna _moveToPopup(){} function'ını oluştur.
// 3) _moveToPopup(e){
//     const workoutEl = e.target.closest('.workout');
//     console.log(workoutEl);
//     if(!workoutEl) return;
//     const workout = this.#workouts.find(work => work.id === workoutEl.dataset.id);
//     this.#map.setView(workout.coords,13,{
//         animate:true,
//         pan:{
//             duration:1
//         }
//     });
//     workout.click();
// }
// 4) Workout class'ına public fields'ta clicks = 0; ekle.
// 5) Workout en altında click(){} function oluştur.
// click(){
//   this.clicks++;
// }

// class Workout{

//     date = new Date();
//     id = (Date.now()+'').slice(-10);
//     clicks = 0;

//     constructor(coords,distance,duration){
//         this.coords = coords;
//         this.distance = distance;
//         this.duration = duration;
        
//     }

//     _setDescription(){
        
//         const months = [
//         'January',
//         'February', 
//         'March',
//         'April',
//         'May',
//         'June', 
//         'July', 
//         'August', 
//         'September', 
//         'October', 
//         'November', 
//         'December'];

//         this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`;
//     }


//     click(){
//         this.clicks++;
//     }

// };

// class Running extends Workout{

//     type = "running";

//     constructor(coords,distance,duration,cadence){
//         super(coords,distance,duration);
//         this.cadence = cadence;
//         this.calcPace();
//         this._setDescription();
//     }

//     calcPace(){
//         this.pace = this.duration / this.distance;
//         return this.pace;
//     }

// }

// class Cycling extends Workout{

//     type="cycling";

//     constructor(coords,distance,duration,elevationGain){
//         super(coords,distance,duration);
//         this.eleveationGain = elevationGain;
//         this.calcSpeed();
//         this._setDescription();
//     }

//     calcSpeed(){
//         this.speed = this.distance / (this.duration/60);
//         return this.speed;
//     }

// }

// // const run1 = new Running([39,-12],5.2,24,178);
// // const cycling1 = new Cycling([39,-12],27,95,523);
// // console.log(run1,cycling1);


// class App{

//     #map;
//     #mapEvent;
//     #workouts = [];

//     constructor(){
//         this._getPosition();
//         form.addEventListener('submit',this._newWorkOut.bind(this));
//         inputType.addEventListener('change',this._toggleElevationField);
//         containerWorkouts.addEventListener('click',this._moveToPopup.bind(this));
//     }

//     _getPosition(){
//         if(navigator.geolocation){
//             navigator.geolocation.getCurrentPosition(this._loadMap.bind(this),function(){
//                 alert("Could not get your position");
//             });
//         };
//     }

//     _loadMap(position){
        
//         const latitude = position.coords.latitude;
//         const longitude = position.coords.longitude;
//         const coords = [latitude,longitude];

//         console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
//         // 3)
//         this.#map = L.map('map').setView(coords, 13);

//         L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//             attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         }).addTo(this.#map);

    
//         this.#map.on('click',this._showForm.bind(this));
//     }

//     _showForm(mapE){
//         this.#mapEvent = mapE;
//         form.classList.remove('hidden');
//         inputDistance.focus();
//     }

//     _hideForm(){
//         // Empty the inputs
//         inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
//         form.style.display = 'none';
//         form.classList.add('hidden');
//         setTimeout(() => (form.style.display = 'grid'),1000);
//     };

//     _toggleElevationField(){
//         inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
//         inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
//     }

//     _newWorkOut(e){

//             const validInputs = (...inputs) => inputs.every(input => Number.isFinite(input));
//             const allPositive = (...inputs) => inputs.every(input => input>0);

//             // get data from form
//             const type = inputType.value;
//             const distance = +inputDistance.value;
//             const duration = +inputDuration.value;
//             const {lat,lng} = this.#mapEvent.latlng;
//             let workout;

//             // check if data is valid

//             // If work out running create running object,
//             if(type === 'running'){
//                 const cadence = +inputCadence.value;

//                 if(!validInputs(distance,duration,cadence) || !allPositive(distance,duration,cadence)){
//                     return alert('Inputs have to be positive numbers!');
//                 }

//                 workout = new Running([lat,lng],distance,duration,cadence);
                
//             }

//             // If work out cycling create cycling object,

//             if(type === 'cycling'){
//                 const elevation = +inputElevation.value;
//                 if(!validInputs(distance,duration,elevation)|| !allPositive(distance,duration)){
//                     return alert('Inputs have to be positive numbers!');
//                 }
//                 workout = new Cycling([lat,lng],distance,duration,elevation);
//             };

//             // Add new object to workout array
//             this.#workouts.push(workout);

//             // Render workout on map as marker 
//             this._renderWorkOutMarker(workout);
//             e.preventDefault();

//             // Render workout on list
//             this._renderWorkOut(workout);
        
//             // Hide form + clear input fields
//             this._hideForm();
//         }

//         _renderWorkOutMarker(workout){
//             L.marker(workout.coords).addTo(this.#map)
//             .bindPopup(L.popup({
//                 maxWidth:250,
//                 minWidth:100,
//                 autoClose:false,
//                 closeOnClick:false,
//                 className:`${workout.type}-popup`
//             }))
//             .setPopupContent(`${workout.type === 'running' ? "🏃‍♂️" : "🚴‍♀️" } ${workout.description}`)
//             .openPopup();
//         }
            
//         _renderWorkOut(workout){
//             let html = `
//             <li class="workout workout--${workout.type}" data-id="${workout.id} ">
//                 <h2 class="workout__title">${workout.description}</h2>
//                 <div class="workout__details">
//                     <span class="workout__icon">${workout.type === 'running' ? "🏃‍♂️" : "🚴‍♀️"}</span>
//                     <span class="workout__value">${workout.distance}</span>
//                     <span class="workout__unit">km</span>
//                 </div>
//                 <div class="workout__details">
//                     <span class="workout__icon">⏱</span>
//                     <span class="workout__value">${workout.duration}</span>
//                     <span class="workout__unit">min</span>
//                 </div>
//             `;
//             if(workout.type === 'running'){
//                 html += `
//                 <div class="workout__details">
//                     <span class="workout__icon">⚡️</span>
//                     <span class="workout__value">${workout.pace.toFixed(1)}</span>
//                     <span class="workout__unit">min/km</span>
//                 </div>
//                 <div class="workout__details">
//                     <span class="workout__icon">🦶🏼</span>
//                     <span class="workout__value">${workout.cadence}</span>
//                     <span class="workout__unit">spm</span>
//                 </div>
//                 </li>
//                 `;
//             }

//             if(workout.type === 'cycling'){
//                 html += `
//                 <div class="workout__details">
//                     <span class="workout__icon">⚡️</span>
//                     <span class="workout__value">${workout.speed.toFixed(1)}</span>
//                     <span class="workout__unit">km/h</span>
//                 </div>
//                 <div class="workout__details">
//                     <span class="workout__icon">⛰</span>
//                     <span class="workout__value">${workout.elevationGain}</span>
//                     <span class="workout__unit">m</span>
//                 </div>
//                 </li>
//                 `;
//             }

//             form.insertAdjacentHTML('afterend',html);


//         }


//         _moveToPopup(e){

//             const workoutEl = e.target.closest('.workout');
//             console.log(workoutEl);

//             if(!workoutEl) return;

//             const workout = this.#workouts.find(
//                 work => work.id === workoutEl.dataset.id
//               );
//             console.log(workout);
            
//             this.#map.setView(workout.coords,13,{
//                 animate:true,
//                 pan:{
//                     duration:1
//                 }
//             });

//             workout.click();
//         }

  
// };

// let app = new App();

/********************************************** Working With LocalStorage *********************************************************/
//(NOT: LOCALSTORAGE'I ÇOK VERİ İÇEREN UYGULAMALARDA KULLANMAMALIYIZ.ÇÜNKÜ UYGULAMAYI YAVAŞLATIR.)
//(NOT: LOCALSTORAGE.SETITEM 2 TANE STRİNG İFADE İÇİNE ALIR.İLKİ KOYMAK İSTEDİĞİMİZ AD,İKİNCİ İSE SAKLAYACAĞIMIZ VERİ.
// ANCAK BU VERİYİ STRİNG'E DÖNÜŞTÜRMEK İÇİN JSON.STRİNGİFY METHODU KULLANILIR.)
// 1) app class'ının en altına // Set localstorage to all workouts kısmı ekle.
// 2) // Set localstorage to all workouts kısmının altına this._setLocalStorage(); ekle.
// 3) app class'ının en altına _setLocalStorage(){} oluştur.
// 4) _setLocalStorage(){
//     localStorage.setItem('workouts',JSON.stringify(this.#workouts));
// }
// 5) uygulamada yeni bir workout oluştur ve console'dan localstorage kısmına gel ve incele.Veriler localstorage'a kaydedilir.
// ancak biz verileri sayfayı yenilediğimizde yine kaybederiz.Sayfayı yenilediğimizde veriler kullanılıp uygulamada gösterilsin istiyoruz.
// 6) app class'ına gel constructor içine this._getLocalStorage(); methodu oluştur.
// 7) app class'ının en sonuna gel ve _getLocalStorage(){} methodu oluştur.
// 8)
// 9) _loadMap methodunun en altına aşağıdaki kod satırını ekliyoruz.
// this.#workouts.forEach(work =>{
//     this._renderWorkOutMarker(work);
//     this._renderWorkOut(work);
// });
// 10)_getLocalStorage(){
//     const data = JSON.parse(localStorage.getItem('workouts'));
//     console.log(data);
//     if(!data) return;
//     this.#workouts = data;
// }
// 11) app class'ının içindeki workout.click(); methodunu yorum satırı yap. (hata alıyoruz.)
// 12)console.log'ları yorum satırı yap.
// 13)app class'ının en altında aşağıdaki kod satırını yaz.
//  reset(){
//     localStorage.removeItem('workouts');
//     location.reload();
// }
// 14) browser console'unu aç ve app.reset() yap ve tüm verileri sil.
 
// class Workout{

//     date = new Date();
//     id = (Date.now()+'').slice(-10);
//     clicks = 0;

//     constructor(coords,distance,duration){
//         this.coords = coords;
//         this.distance = distance;
//         this.duration = duration;
        
//     }

//     _setDescription(){
        
//         const months = [
//         'January',
//         'February', 
//         'March',
//         'April',
//         'May',
//         'June', 
//         'July', 
//         'August', 
//         'September', 
//         'October', 
//         'November', 
//         'December'];

//         this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`;
//     }


//     click(){
//         this.clicks++;
//     }

// };

// class Running extends Workout{

//     type = "running";

//     constructor(coords,distance,duration,cadence){
//         super(coords,distance,duration);
//         this.cadence = cadence;
//         this.calcPace();
//         this._setDescription();
//     }

//     calcPace(){
//         this.pace = this.duration / this.distance;
//         return this.pace;
//     }

// }

// class Cycling extends Workout{

//     type="cycling";

//     constructor(coords,distance,duration,elevationGain){
//         super(coords,distance,duration);
//         this.eleveationGain = elevationGain;
//         this.calcSpeed();
//         this._setDescription();
//     }

//     calcSpeed(){
//         this.speed = this.distance / (this.duration/60);
//         return this.speed;
//     }

// }

// // const run1 = new Running([39,-12],5.2,24,178);
// // const cycling1 = new Cycling([39,-12],27,95,523);
// // console.log(run1,cycling1);


// class App{

//     #map;
//     #mapEvent;
//     #workouts = [];

//     constructor(){
//         this._getPosition();

//         this._getLocalStorage();

//         form.addEventListener('submit',this._newWorkOut.bind(this));
//         inputType.addEventListener('change',this._toggleElevationField);
//         containerWorkouts.addEventListener('click',this._moveToPopup.bind(this));
//     }

//     _getPosition(){
//         if(navigator.geolocation){
//             navigator.geolocation.getCurrentPosition(this._loadMap.bind(this),function(){
//                 alert("Could not get your position");
//             });
//         };
//     }

//     _loadMap(position){
        
//         const latitude = position.coords.latitude;
//         const longitude = position.coords.longitude;
//         const coords = [latitude,longitude];

//         console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
//         // 3)
//         this.#map = L.map('map').setView(coords, 13);

//         L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//             attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         }).addTo(this.#map);

//         this.#map.on('click',this._showForm.bind(this));

//         this.#workouts.forEach(work =>{
//             this._renderWorkOutMarker(work);
//             this._renderWorkOut(work);
//         });
//     }

//     _showForm(mapE){
//         this.#mapEvent = mapE;
//         form.classList.remove('hidden');
//         inputDistance.focus();
//     }

//     _hideForm(){
//         // Empty the inputs
//         inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
//         form.style.display = 'none';
//         form.classList.add('hidden');
//         setTimeout(() => (form.style.display = 'grid'),1000);
//     };

//     _toggleElevationField(){
//         inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
//         inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
//     }

//     _newWorkOut(e){

//             const validInputs = (...inputs) => inputs.every(input => Number.isFinite(input));
//             const allPositive = (...inputs) => inputs.every(input => input>0);

//             // get data from form
//             const type = inputType.value;
//             const distance = +inputDistance.value;
//             const duration = +inputDuration.value;
//             const {lat,lng} = this.#mapEvent.latlng;
//             let workout;

//             // check if data is valid

//             // If work out running create running object,
//             if(type === 'running'){
//                 const cadence = +inputCadence.value;

//                 if(!validInputs(distance,duration,cadence) || !allPositive(distance,duration,cadence)){
//                     return alert('Inputs have to be positive numbers!');
//                 }

//                 workout = new Running([lat,lng],distance,duration,cadence);
                
//             }

//             // If work out cycling create cycling object,

//             if(type === 'cycling'){
//                 const elevation = +inputElevation.value;
//                 if(!validInputs(distance,duration,elevation)|| !allPositive(distance,duration)){
//                     return alert('Inputs have to be positive numbers!');
//                 }
//                 workout = new Cycling([lat,lng],distance,duration,elevation);
//             };

//             // Add new object to workout array
//             this.#workouts.push(workout);

//             // Render workout on map as marker 
//             this._renderWorkOutMarker(workout);
//             e.preventDefault();

//             // Render workout on list
//             this._renderWorkOut(workout);
        
//             // Hide form + clear input fields
//             this._hideForm();

//             // Set localstorage to all workouts
//             this._setLocalStorage();
//         }

//         _renderWorkOutMarker(workout){
//             L.marker(workout.coords).addTo(this.#map)
//             .bindPopup(L.popup({
//                 maxWidth:250,
//                 minWidth:100,
//                 autoClose:false,
//                 closeOnClick:false,
//                 className:`${workout.type}-popup`
//             }))
//             .setPopupContent(`${workout.type === 'running' ? "🏃‍♂️" : "🚴‍♀️" } ${workout.description}`)
//             .openPopup();
//         }
            
//         _renderWorkOut(workout){
//             let html = `
//             <li class="workout workout--${workout.type}" data-id="${workout.id} ">
//                 <h2 class="workout__title">${workout.description}</h2>
//                 <div class="workout__details">
//                     <span class="workout__icon">${workout.type === 'running' ? "🏃‍♂️" : "🚴‍♀️"}</span>
//                     <span class="workout__value">${workout.distance}</span>
//                     <span class="workout__unit">km</span>
//                 </div>
//                 <div class="workout__details">
//                     <span class="workout__icon">⏱</span>
//                     <span class="workout__value">${workout.duration}</span>
//                     <span class="workout__unit">min</span>
//                 </div>
//             `;
//             if(workout.type === 'running'){
//                 html += `
//                 <div class="workout__details">
//                     <span class="workout__icon">⚡️</span>
//                     <span class="workout__value">${workout.pace.toFixed(1)}</span>
//                     <span class="workout__unit">min/km</span>
//                 </div>
//                 <div class="workout__details">
//                     <span class="workout__icon">🦶🏼</span>
//                     <span class="workout__value">${workout.cadence}</span>
//                     <span class="workout__unit">spm</span>
//                 </div>
//                 </li>
//                 `;
//             }

//             if(workout.type === 'cycling'){
//                 html += `
//                 <div class="workout__details">
//                     <span class="workout__icon">⚡️</span>
//                     <span class="workout__value">${workout.speed.toFixed(1)}</span>
//                     <span class="workout__unit">km/h</span>
//                 </div>
//                 <div class="workout__details">
//                     <span class="workout__icon">⛰</span>
//                     <span class="workout__value">${workout.elevationGain}</span>
//                     <span class="workout__unit">m</span>
//                 </div>
//                 </li>
//                 `;
//             }

//             form.insertAdjacentHTML('afterend',html);


//         }


//         _moveToPopup(e){

//             const workoutEl = e.target.closest('.workout');

//             if(!workoutEl) return;

//             const workout = this.#workouts.find(
//                 work => work.id === workoutEl.dataset.id
//               );
            
//             this.#map.setView(workout.coords,13,{
//                 animate:true,
//                 pan:{
//                     duration:1
//                 }
//             });

//             // workout.click();
//         }

//         _setLocalStorage(){
//             localStorage.setItem('workouts',JSON.stringify(this.#workouts));
//         }

//         _getLocalStorage(){
//             const data = JSON.parse(localStorage.getItem('workouts'));
//             if(!data) return;
//             this.#workouts = data;
//         }

//         reset(){
//             localStorage.removeItem('workouts');
//             location.reload();
//         }
  
// };

// let app = new App();
