// `let x = 5;
// let obj = {};
// obj.x = 4;
// obj[x] = 10;
// console.log(obj);//obj{x:4, '5':10}`

let a = {};
let b = {val:'b'};

let c = {val:'c'};

//object.toString = objext Object
a[b] = 15;
a[c] = 55;
console.log(a);  // {'[object Object]': 15} //overites the ket [object Object]
console.log(a[b]); //55

a[2];//es sranov ches avelacnum , objectum kavelina ayn depqum erb arjeq veragres propertiin
a.y = 55;// adds y as property imeadetly if yu assigh value
let y;
a[y]= 77;//try fint variable y and cat it to string if don't find reference error
console.log(a);
let pp;
let zz;
a[pp] = 44;
a[zz] = 88;
console.log(a);
////////////////////////////////////////////////////
//Object.toString()

let d  = "kk"
let tryObj ={d};
console.log(tryObj);
let stringObj = JSON.stringify(tryObj);
console.log(stringObj);
let backObj = JSON.parse(stringObj);
console.log(backObj);

function foo(){
  console.log('ll');
}
console.log(foo.toString());


for (let i = 0; i < 5; i++) {
  setTimeout(function(){
    console.log(i);
  }, 1000);
}
//var i depqum 5 hat 5 isk let i depum 0-ic 4
