var greeting = 'hello world';
var age = 35;
var success = true;
var result = '100';
result = 100;
var user = {
    name: 'john',
    print: function () { return ''; }
};
console.log(user);
var Manager = /** @class */ (function () {
    function Manager() {
        this.name = 'Mike';
        this.age = 40;
    }
    return Manager;
}());
var m = new Manager();
console.log(m.name);
