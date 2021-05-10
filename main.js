// # Instructions :
// >*En utilisant la methode getElementsByTagName*
// ### 1. Stock tous les titres h1 dans une variable et affiche le contenu de cette variable dans un console.log 
// ### 2. Après avoir récupéré tous les paragraphes, stock chaque sous titre h3 dans des variables différentes et affiches leur contenu dans un console.log différent
// ### 3. Après avoir récupéré tous les paragraphe, stock le second paragraphe et affiche dans un console.log
// ### 4. Après avoir récupéré tous les li, stock le 3eme li et affiche le dans un console.log

// let titreH1 = document.getElementsByTagName('h1');
// console.log(titreH1);

// let h3un = document.getElementsByTagName('h3')[0];
// console.log(h3un);
// let h3deux = document.getElementsByTagName('h3')[1];
// console.log(h3deux);
// let h3trois = document.getElementsByTagName('h3')[2];
// console.log(h3trois);

// let paraphDeux = document.getElementsByTagName('div')[1];
// console.log(paraphDeux);

// let liste = document.getElementsByTagName('li')[2];
// console.log(liste);

//exo1
let titre = document.getElementsByTagName('h1');
console.log(titre);
//exo2
let titre2 = document.getElementsByTagName('h3');
console.log(titre2);
console.log(titre2[0]);
console.log(titre2[1]);
console.log(titre2[2]);
//exo3
let p = document.getElementsByTagName('p');
let firstP = p[1];
console.log(firstP);
//exo4
let li = document.getElementsByTagName('li');
let liTrois= li[2];
console.log(liTrois);