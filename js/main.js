var namespace = "acr-";

var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {

	$routeProvider.when('/', {
		templateUrl: 'index.html'
	});
});

app.controller("MainCtrl", function ($scope) {
	this.price = 44;
	this.step  = 1;

	this.openAssistant = function (e) {
		if (this.step != 9) {
			e.currentTarget.classList.toggle(namespace + "assistant--open");
		}
		if (this.step == 8) {
			e.currentTarget.classList.add(namespace + "assistant--semi-open");
		} else if (this.step > 8) {
			e.currentTarget.classList.remove(namespace + "assistant--semi-open");
		}

		this.step++;
		console.log(this.step);
		this.checkPrice();
	};

	this.nextStep = function () {
		this.step++;
		this.checkPrice();
	};

	this.checkPrice = function () {
		if (this.step == 3 || this.step==4){
			this.price = 64;
		}else if (this.step>=5 ){
			this.price = 72;
		}
	}
});

