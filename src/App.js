import './App.css';
import Clock from './Clock';

let x = 10;// variables globales
let y = 25;
const z = 1000;
console.log(x + y);//constante

function countDown(seconds) {
  return new Promise(function (resolve, reject) {
    for (let i = seconds; i >= 0; i--) {
      setTimeout(function () {
        if (i == 13) reject('Bad luck');
        else if (i == 0) resolve('YES');
        else console.log('Step : ' + i);
      }, (seconds - i) * 1000);
    }
  }
  );
  
}

countDown(5).then(
  function (messageSuccess) {
    console.log(messageSuccess);
  },
  function (messageFailure) {
    console.log(messageFailure);
  }
);
let res=countDown(15);
 console.log(res);

res.then((data)=>console.log(data))
//res.then((data)=>this.setState({products :data}))
res.catch((err)=>console.log(err))


 
function App() {


  //declarer une variable locale a la function
  let x = 56; //undefined masque la variable globale elleprend sa place
  let y = 25;
  const z = 1000;
  console.log(x + y);//constante
  //boolean
  let admin = true;
  let newsletter = "";
  if (!newsletter) {
    console.log("newsletter: true");
  }
  newsletter = "bla bla bla bla"
  if (newsletter) {
    console.log("newsletter: false");
  }
  if (admin) {
    console.log("vous etes dans le vrai");

  }
  //
  //
  // STRINGS

  let nom = "rpbrto";
  let prenom = 'ginsou';
  let nomComplet = nom + " " + prenom;
  console.log("mon nom est :", nomComplet);// concatenation avec "," possible 
  console.log("mon nom est :" + nomComplet);// concatenation classique avec +


  // injection variable 
  let nombreCompleteo = `${nom} ${prenom}`; // anticote `` pour entourer les string obilgatoire ici
  console.log("mon nombreCompleteo est :" + nombreCompleteo);

  // boucle for-in


  let player = { name: 'john', team: 'sauvage', age: 885 }// key =name ici toujours une variable text si de `` ça devient du json
  for (const key in player) {
    if (Object.hasOwnProperty.call(player, key)) {
      const element = player[key];
      console.log(`${key} : ${element}\n`);

    }
  }

  Object
    .keys(player)
    .forEach(key => console.log(key + ": " + player));



  for (let kiki in player)
    console.log(kiki);

  //player
  //.key(player);

  //boucle for of a utilser avec les tableaux

  let tab = [10, 56, 89, 72];
  for (const element of tab) {//on parcourt le tableau
    console.log(element + "\n");

  }

  // fonctions appel et references

  function hello() { return 'hello mundo'; }
  hello();//appel de la fonction
  let res = hello();
  console.log(res);

  let f = hello;//f contient la ref à hello c est comme un alias de hello() qui s apelle f
  res = f();
  console.log(res);

  let o = {
    g: hello,
  };

  res = o.g();
  console.log(res);

  // fonctions dans le table&au

  let t = [hello, 1, "test", o, true]; // elements de type hetrogenes

  res = t[3].g();// les parenteses .g() impliquent que l objet appelé est une fonction,  il faut que ça correponde à l objet trouvé
  console.log(res);

  //parametres avec opérateur spread "..." ou argument variable

  //funtion f(x){
  // console.log('x='+x);
  //}
  //f();x =undefined
  function addPrefix(prefix, ...words) {
    return words.map(w => prefix + w);//map est ici un fontion de rapel elle parcour le tableu stock le resultat dans un autre tableau et retourne le resultat
  }
  res = addPrefix('con', 'cept', 'te');//[concept ,  conte]
  console.log(res);

  function addPrefix(prefix, ...words) {// returne le meme resultat qu au dessus
    return words.map(function (words) {
      return prefix + words;
    })
  }
  res = addPrefix('con', 'cept', 'tetine');//[concept ,  contetine]
  console.log(res);

  //les fonctions flechées

  let f1 = function () {//c est une fonction anonyme sans nom ni parametres
    return "hello";
  }
  let g1 = () => "hello";

  let f2 = function (nom) {
    return "hello" + nom

  }

  let g2 = (nom) => "hello" + nom;

  let f3 = function (a, b) {
    return a + b
  }

  let g3 = (a, b) => a + b;

  console.log(g3(16, 54));


  //
  //
  // THIS et functions
  let ov = {
    name: 'Jo',
    speak: function () {
      return "My name is " + this.name;
    }
  }
  ov.speak();  // "My name is Jo“

  let speak = ov.speak;
  // speak === ov.speak;  // true


  // speak();  // "My name is undefined
  console.log(speak);



  //
  // funtion reduce


  // par ex [1,2,5,6,7]-> 21 :  si func(x)->x
  // par ex [1,2,5]-> 30 si func(x)-> x*x
  // par ex [1,2,5]-> 16 si func(x)-> x+x

  function sum(tab, func) {
    if (typeof func != 'function') {      // si f n est pas une fonction
      func = t => t;  //func = function(t){return t;}   equivalent a la fonction flechée

    }
    // let res=0;
    // for (const ox of tab){
    //   res=res+func(x);
    // }

    return tab.reduce((a, x) => a + func(x), 0);

  }
  console.log(sum([1, 2, 5]));
  let func2 = (x) => x * x;
  console.log(sum([1, 2, 5, 6, 8], func2));
  res = tab.length;
  console.log(res);


  //
  //
  //tableaux : arrays map set 

  let tab2 = [5, 7, 3];// on veut [5,7,3]->[25,49,9]
  res = tab2.map(function (a) {
    return a * a;
  });
  console.log(res);

  res = tab2.filter(function (a) {
    return a >= 5;
  })
  console.log(res);

  class Point {
    // pas d attributs d instance
    constructor(x, y)// un seul constructor possible
    {
      this.x = x;// creations des variables de la classe
      this.y = y;
    }
    atNorthEast() {
      return this.x >= 0 && this.y >= 0;
    }

  }
  let a = new Point(3, -1);
  let b = new Point(5, 5);

  let rest = a.atNorthEast();
  console.log(rest);

  console.log(Point.prototype);



  return (

    <div>

      <Clock />
      
      {res.map(function (a) {
        return <p key={a}>{a}</p>;


      })}
    </div>

  )


}


export default App;
