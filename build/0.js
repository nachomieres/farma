webpackJsonp([0],{

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutaPageModule", function() { return RutaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ruta__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RutaPageModule = (function () {
    function RutaPageModule() {
    }
    return RutaPageModule;
}());
RutaPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__ruta__["a" /* RutaPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ruta__["a" /* RutaPage */]),
        ],
    })
], RutaPageModule);

//# sourceMappingURL=ruta.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RutaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_posicion_posicion__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RutaPage = (function () {
    function RutaPage(navCtrl, navParams, geolocation, toastCtrl, posicion) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.toastCtrl = toastCtrl;
        this.posicion = posicion;
        this.geoOptions = {
            maximumAge: 1000,
            timeout: 20000,
            enableHighAccuracy: true
        };
        this.destino = this.navParams.get('destino');
        console.log(this.destino);
    }
    RutaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.posicion.getCoordenadas(this.destino).subscribe(function (data) {
            console.log(data);
            _this.destino = data.results[0].formatted_address;
            console.log(_this.destino);
        });
        this.geolocation.getCurrentPosition(this.geoOptions)
            .then(function (datos) {
            _this.loadMap(datos.coords.latitude, datos.coords.longitude);
            _this.startNavigating(datos);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    RutaPage.prototype.loadMap = function (latitud, longitud) {
        var latLng = new google.maps.LatLng(latitud, longitud);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    };
    RutaPage.prototype.startNavigating = function (datos) {
        var _this = this;
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        directionsDisplay.setMap(this.map);
        //directionsDisplay.setPanel(this.directionsPanel.nativeElement);
        directionsService.route({
            //origin: {lat: datos.coords.latitude, lng: datos.coords.longitude},
            origin: new google.maps.LatLng(datos.coords.latitude, datos.coords.longitude),
            destination: this.destino.toString(),
            //destination: 'Mieres',
            travelMode: google.maps.TravelMode['WALKING']
        }, function (res, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(res);
                var toast = _this.toastCtrl.create({
                    message: 'Distancia: ' + res.routes[0].legs[0].distance.text,
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
                console.log(res);
            }
            else {
                console.warn(status);
            }
        });
    };
    return RutaPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
], RutaPage.prototype, "mapElement", void 0);
RutaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-ruta',template:/*ion-inline-start:"C:\temp\farmacias\src\pages\ruta\ruta.html"*/'<!--\n  Generated template for the RutaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>ruta</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div #map id="map"></div> \n</ion-content>\n'/*ion-inline-end:"C:\temp\farmacias\src\pages\ruta\ruta.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__providers_posicion_posicion__["a" /* PosicionProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_posicion_posicion__["a" /* PosicionProvider */]) === "function" && _f || Object])
], RutaPage);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=ruta.js.map

/***/ })

});
//# sourceMappingURL=0.js.map