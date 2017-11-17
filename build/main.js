webpackJsonp([1],{

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/ruta/ruta.module": [
		270,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_posicion_posicion__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_farmacia_farmacia__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datos_codigos__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl, posicion, farmacia, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.posicion = posicion;
        this.farmacia = farmacia;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.localidad = "";
        this.fecha = new Date();
    }
    HomePage.prototype.getPosicion = function () {
        var _this = this;
        try {
            var loader_1 = this.loadingCtrl.create({
                content: "Buscando ubicación...",
            });
            loader_1.present();
            this.posicion.getLocalidad().then(function (datos) {
                datos.subscribe(function (data) {
                    console.log(data);
                    var localidad = data.results[2].address_components[0].long_name;
                    var codigo = __WEBPACK_IMPORTED_MODULE_4__datos_codigos__["a" /* LISTA_LOCALIDADES */].indexOf(localidad.toLowerCase());
                    console.log(codigo + ' ' + localidad);
                    _this.farmacia.getFarmacia(_this.fecha, codigo).subscribe(function (data) {
                        console.log(data);
                        _this.listaFarmacias = data;
                        _this.fechaGuardia = data[0].fecha;
                        _this.localidad = localidad.toLocaleUpperCase();
                        //console.log (data);*/
                        loader_1.dismiss();
                    });
                });
                /*this.muestraToast ('CODIGO:' + datos.codigo);
                this.farmacia.getFarmacia (this.fecha, datos.codigo).subscribe (data => {
                  console.log (data);
                  this.listaFarmacias = data;
                  this.fechaGuardia = data[0].fecha;
                  this.localidad = datos.localidad.toLocaleUpperCase();
                  //console.log (data);*/
                loader_1.dismiss();
            })
                .catch(function (error) {
                console.log(error);
                _this.muestraToast(error.message);
                loader_1.dismiss();
            });
        }
        catch (e) {
            console.log(e);
        }
    };
    HomePage.prototype.alMapa = function (direccion) {
        this.navCtrl.push('RutaPage', { destino: direccion });
    };
    HomePage.prototype.muestraToast = function (texto) {
        var toast = this.toastCtrl.create({
            message: texto,
            duration: 2000,
            position: 'middle'
        });
        toast.present();
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\temp\farmacias\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Farmacias de Guardia\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <button ion-button block (click)="getPosicion()">Buscar Farmacia</button>\n  <h3 text-center *ngIf="localidad">{{localidad}}</h3>\n  <h4 text-center *ngIf="fechaGuardia">{{fechaGuardia}}</h4>\n  <ion-card *ngFor="let farmacia of listaFarmacias">\n    <ion-card-header text-center text-wrap>\n        {{farmacia.nombre}}\n    </ion-card-header>\n    <ion-card-content (click)="alMapa(farmacia.nombre)">\n      <h3 text-center>{{farmacia.direccion}}</h3>\n      <h4 text-center>{{farmacia.telefono}}</h4>\n    </ion-card-content>   \n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\temp\farmacias\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__providers_posicion_posicion__["a" /* PosicionProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_posicion_posicion__["a" /* PosicionProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_farmacia_farmacia__["a" /* FarmaciaProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_farmacia_farmacia__["a" /* FarmaciaProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */]) === "function" && _e || Object])
], HomePage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PosicionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_geocoder__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







/*
  Generated class for the PosicionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PosicionProvider = (function () {
    function PosicionProvider(http, geolocation, platform, natGeo, toastCtrl) {
        this.http = http;
        this.geolocation = geolocation;
        this.platform = platform;
        this.natGeo = natGeo;
        this.toastCtrl = toastCtrl;
        this.key = 'AIzaSyDLzt5gIIId8ceaCwlMXguzBWfo1u6cVIg';
        this.url = 'https://maps.googleapis.com/maps/api/geocode/json';
        this.url_geocode = 'https://maps.googleapis.com/maps/api/geocode/json';
    }
    PosicionProvider.prototype.getPosicion = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.platform.ready()];
                    case 1:
                        _a.sent();
                        this.geoOptions = {
                            maximumAge: 0,
                            timeout: 5000,
                            enableHighAccuracy: false
                        };
                        return [4 /*yield*/, this.geolocation.getCurrentPosition(this.geoOptions).then(function (data) {
                                return data;
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    PosicionProvider.prototype.getLocalidad = function () {
        var _this = this;
        return this.getPosicion().then(function (data) {
            console.log(data);
            /*return this.natGeo.reverseGeocode (data.coords.latitude, data.coords.longitude).then (datos => {
              console.log (datos);
              this.muestraToast (datos.countryName, 'botton');
              return {codigo: LISTA_LOCALIDADES.indexOf(datos.locality.toLowerCase ()), localidad: datos.locality};
            })
            .catch (error => {
              console.log (error);
              //this.muestraToast ('ERROR:' + error.toString());
              return {codigo: 80, localidad: 'No posicionado'};
            })*/
            //return this.http.get (`${this.url}?latlng=${data.coords.latitude},${data.coords.longitude}&key=${this.key}`)       
            return _this.http.get(_this.url + "?latlng=43.1187291,-6.2822751&key=" + _this.key)
                .map(function (data) { return data.json(); });
        });
    };
    PosicionProvider.prototype.getCoordenadas = function (direccion) {
        return this.http.get(this.url_geocode + "?address=" + direccion)
            .map(function (data) { return data.json(); });
    };
    PosicionProvider.prototype.muestraToast = function (texto, pos) {
        var toast = this.toastCtrl.create({
            message: texto,
            duration: 2000,
            position: pos
        });
        toast.present();
    };
    return PosicionProvider;
}());
PosicionProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Platform */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_geocoder__["a" /* NativeGeocoder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_geocoder__["a" /* NativeGeocoder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */]) === "function" && _e || Object])
], PosicionProvider);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=posicion.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FarmaciaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FarmaciaProvider = (function () {
    function FarmaciaProvider(http) {
        this.http = http;
    }
    FarmaciaProvider.prototype.getFarmacia = function (fecha, codigo) {
        var dia = fecha.getDate().toString();
        var mes = (fecha.getMonth() + 1).toString();
        var anno = fecha.getFullYear().toString();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var cadena = "busqueda=1&Fecha=" + dia + "%2F" + mes + "%2F" + anno + "&txtMunicipio=&txtLocalidad=" + codigo + "&btnBuscar=Buscar";
        //console.log (cadena);
        var postParams = cadena;
        return this.http.post('http://www.farmasturias.org/GESCOF/cms/Guardias/FarmaciaBuscar.asp?IdMenu=355&intPagina=1', postParams, options)
            .map(function (res) {
            //console.log (res.text ())
            var array = [];
            var i;
            var parser = new DOMParser();
            var municipio = parser.parseFromString(res.text(), "text/html").getElementsByClassName('ListadoResultados');
            //console.log (municipio[0].innerHTML);
            var fecha = parser.parseFromString(res.text(), "text/html").getElementsByClassName('FechaGuardias')[0].textContent;
            for (i in municipio) {
                if (i < municipio.length) {
                    //console.log (municipio[i].innerHTML);
                    var nombre = parser.parseFromString(municipio[i].innerHTML, "text/html").getElementsByClassName('TituloResultado')[0].textContent;
                    var direccion = parser.parseFromString(municipio[i].innerHTML, "text/html").getElementsByClassName('ico-localizacion');
                    var telefono = parser.parseFromString(municipio[i].innerHTML, "text/html").getElementsByClassName('ico-telefono')[0].textContent;
                    if (direccion[0].textContent) {
                        array.push({
                            fecha: fecha,
                            nombre: nombre,
                            direccion: direccion[0].textContent.slice(11),
                            telefono: telefono
                        });
                    }
                }
            }
            return array;
        });
    };
    return FarmaciaProvider;
}());
FarmaciaProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], FarmaciaProvider);

//# sourceMappingURL=farmacia.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_posicion_posicion__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_native_geocoder__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_farmacia_farmacia__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/ruta/ruta.module#RutaPageModule', name: 'RutaPage', segment: 'ruta', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_9__providers_posicion_posicion__["a" /* PosicionProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_farmacia_farmacia__["a" /* FarmaciaProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\temp\farmacias\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\temp\farmacias\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LISTA_LOCALIDADES; });
var listaLocalidades = [
    "NA",
    "ablaña",
    "alles",
    "arriondas",
    "aviles",
    "barredos",
    "barros",
    "barzana",
    "belmonte de miranda",
    "benia",
    "bimenes",
    "blimea",
    "boal",
    "brieves",
    "cabañaquinta",
    "caborana",
    "cadavedo",
    "campo de caso",
    "campomanes",
    "cancienes",
    "candas",
    "cangas de onis",
    "cangas de narcea",
    "caravia",
    "carbayin",
    "carbayin alto",
    "carreña de cabrales",
    "castropol",
    "celorio",
    "ciaño",
    "collanzo",
    "colloto",
    "colombres",
    "colunga",
    "cornellana",
    "corvera",
    "cudillero",
    "el berron",
    "el empalme",
    "el entrego",
    "el espin",
    "figaredo",
    "figueras",
    "gera",
    "gijon",
    "grado",
    "grandas de salime",
    "hevia",
    "illas",
    "infiesto",
    "jove",
    "la caridad",
    "",
    "la espina",
    "la foz de morcin",
    "la fresneda",
    "la manjoya",
    "la nueva",
    "lada",
    "",
    "las caldas",
    "lastres",
    "lieres",
    "llanes",
    "",
    "luanco",
    "luarca",
    "lugo de llanera",
    "lugones",
    "manzaneda",
    "mieres",
    "mohias",
    "moreda",
    "muros del nalon",
    "nava",
    "navelgas",
    "navia",
    "noreña",
    "nueva de llanes",
    "olloniego",
    "oviedo",
    "panes",
    "piedras blancas",
    "allande",
    "laviana",
    "lena",
    "siero",
    "somiedo",
    "porceyo",
    "posada de llanera",
    "posada de llanes",
    "pravia",
    "proaza",
    "puerto de vega",
    "raices",
    "riaño",
    "ribadesella",
    "riosa",
    "rioturbio",
    "roces",
    "salas",
    "salinas",
    "sama",
    "san andres",
    "san antolin de ibias",
    "san claudio",
    "san esteban de pravia",
    "san juan de la arena",
    "san martin de oscos",
    "san roman del candamo",
    "san tirso de abres",
    "santa cruz de mieres",
    "santa elulalia de cabranes",
    "santa eulalia de morcin",
    "santa eulalia de oscos",
    "santillan",
    "santullano de las regueras",
    "santullano de mieres",
    "soto de la barca",
    "soto de luiña",
    "soto de ribera",
    "soto del barco",
    "sotrondio",
    "tapia de casariego",
    "tebongo",
    "",
    "tineo",
    "trasona",
    "tremañes",
    "trevias",
    "trubia",
    "tudela de veguin",
    "tuilla",
    "turon",
    "ujo",
    "valdesoto",
    "",
    "vega de sariego",
    "vegadeo",
    "villabona",
    "villamayor",
    "villanueva de oscos",
    "villaviciosa",
    "villayon",
    "colloto"
];
var LISTA_LOCALIDADES = listaLocalidades;
//# sourceMappingURL=codigos.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map