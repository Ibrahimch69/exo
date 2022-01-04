console.log('salut')
//permet de a
/*
salut 
ca va 
bien 
*/
/*
let ville = 'villeurbanne';
let nom = 'chergui';
let prenom = 'ibrahim';

console.log(nom,ville,prenom)

var nome ='ada';
var age ='20';
var monage = '23';
console.log(typeof monage);

var x = 5;
var y = 10;
var resulta = x + y;

console.log("10 + 5 = "+resulta)

let vrai = true;
let faux = false;
let X = 2 < 7;
console.log(X);


let n = 18;
let m = -7;
let Nom = "manu";
let jojo = false;
let a;
console.log(a)

let nomsas = 'je participe a la formation de ';
let duree = 7;
let formation = 'dev web';
console.log(nomsas,duree,formation)

let montableau = ['ibr',-5,8 /2, 6< 3];
montableau[0]='ibrahim'
console.log(montableau );

let mydata =[
    [12,6,8], 
    [44,71,90],
    [23,54,99],
];
mydata[1][2]=11
console.log(mydata[1][2], mydata[2][0]);
//push rajoute a la fin du tablau 
// pop pour suprimer le dernie element 
//unshift rajout aux debut du tabl 
//shift suprime le premie
//splice suprime ou ajoute un element 

let amis = ['ben','janice','idr'];
amis.pop();
amis.shift();
amis.push('phoebe')
amis.unshift('gdu')
amis.splice(2,0,"ross","chandler","josy")

console.log(amis)
parseInt transforme les string en int
*/



//let prenom = Number (prompt("entrez votre prenom"));
//let prenom2 = Number (prompt("entrez votre nom"));
//alert(prenom+prenom2); 
/*
let age =14; 
let vieux = 70;

if ( age >=18 && age<vieux  ){
    console.log("tu peux passe");
    }else if(age>=vieux){
     console.log("gratuit")
    }else{
        console.log("casse toi ");
    } */

    let Nom =prompt("sofaine")
    let age = Number(prompt("19"));

    if( Nom=="sofaine" && age=="19"){
            alert("bienvenu")
    }else if(Nom.length==age) {
        alert("by")
    }else if(age<70 && Nom=="abby"|| Nom=="paul"){
        alert("salut")
    }else{
        alert("casse toi")
    }
   
   