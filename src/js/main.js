function myModule() {
    this.hello = function() {
        console.log('hello');
    };

    this.bye = function() {
        console.log('bye!');
    };
}

module.exports = myModule;