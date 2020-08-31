"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthenticationService = exports.JwtResponse = exports.User = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var User = /** @class */ (function () {
    function User(status) {
        this.status = status;
    }
    return User;
}());
exports.User = User;
var JwtResponse = /** @class */ (function () {
    function JwtResponse(jwttoken) {
        this.jwttoken = jwttoken;
    }
    return JwtResponse;
}());
exports.JwtResponse = JwtResponse;
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(httpClient) {
        this.httpClient = httpClient;
    }
    AuthenticationService.prototype.authenticate = function (username, password) {
        return this.httpClient.post('http://localhost:8080/api/auth/signin', { username: username, password: password }).pipe(operators_1.map(function (userData) {
            sessionStorage.setItem('username', username);
            var tokenStr = 'Bearer ' + userData.accessToken;
            sessionStorage.setItem('token', tokenStr);
            return userData;
        }));
    };
    AuthenticationService.prototype.isUserLoggedIn = function () {
        var user = sessionStorage.getItem('username');
        //console.log(!(user === null))
        return !(user === null);
    };
    AuthenticationService.prototype.logOut = function () {
        sessionStorage.removeItem('username');
    };
    AuthenticationService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
