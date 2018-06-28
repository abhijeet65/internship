
var app = angular.module("simpleApp", []);

function simpleController() {
    this.collection = [{name: "Abhijeet", phone: 7019363825, city: "Patna"},
        {name: "Abhishek", phone: 2276788787, city: "New York"},
        {name: "Virat", phone: 9276788784, city: "America"},
        {name: "Johncena", phone: 746788555, city: "Berlin"},
        {name: "CM punk", phone: 7045123569, city: "Boston"},
        {name: "Ansh", phone: 9611281850, city: "Bangalore"}];

    this.limit = 10;
    this.sortProperty = 'name';
    this.reverseSort = false;
}

simpleController.prototype.addEntry = function () {
    this.collection.push(this.newData);
    this.newData = '';
};

simpleController.prototype.sort = function (prop) {
    this.sortProperty = prop;
    this.reverseSort = !this.reverseSort;
}


app.controller("simpleController", simpleController);
