'use strict'

//задача №1: определение прямоугольного треугольника
var x = 10, y = 2, z = 7;
if ((x * x) == (y * y) + (z * z)){
    console.log('треугольник прямоугольный');
}
else if((y * y) == (x * x) + (z * z)){
    console.log('треугольник прямоугольный');
}
else if((z * z) == (y * y) + (x * x)){
    console.log('треугольник прямоугольный');
}
else console.log('треугольник не прямоугольный');

//задача №2: пузырёк
var arr=[2, 43, 1, 7, 9, 32, 5, 3];
for (var i = (arr.length-1); i > 0 ; i--){
     var max = arr[i];
     for (var j = 0; j < i; j++){
        if(arr[j] > max){
        max = arr[j];
        arr[j] = arr[i];
        arr[i] = max;
        }
    } 
}
console.log(arr);


//Задача №3: перевод из десятичной в двоичную сист.

var arr1 = [];
var number = 1445;
for (var second = number.length; second >= 0; second --){
    number/=2;

} 

//перевод из двоичной в десятичную
var number = '100110'; //переводим числа в строки 
var result = [];
var arr2 = number.split('');
for (var sec = (arr2.length-1); sec >= 0; sec --){
    var a = arr2[sec];
    for(j = 0 ; ; j++){
        a.pow(sec,j);
        a *= 2;
    }
    result.push(a);
} 
console.log(arr2);

//вообщем это задание не получилось