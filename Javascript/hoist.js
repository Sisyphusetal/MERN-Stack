console.log(hello);
var hello = 'world';
//var hello;
//logs undefined
//hello = 'world'

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//var needle
//needle = 'haystack'
//function test()
    //var needle
    //needle = 'magnet'
    //logs magnet
//calls test()

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);





