console.log('JS OK') 

// RECUPERO ELEMENTO LISTA
const listEl = document.getElementById("list");

// INIZIO CICLO 
for (let i = 1; i <= 100; i++){
    // CREO <li> DA INSERIRE NEL DOM
    let ItemEl = document.createElement("li")
    ItemEl.innerHTML = i;
    // CREO DEI QUADRATI DA INSERIRE NEL DOM CON CLASSE 'BOX'
    ItemEl.classList.add("box")
    listEl.append(ItemEl)
    // CONDIZIONE DI 'FIZZBUZZ' DA INSERIRE NEL RELATIVO QUADRATO
    if((i % 3 == 0) && (i % 5 == 0)){
        // INSERISCO SCRITTA NEL RELATIVO QUADRATO AGGIUNGENDO CLASSE
        ItemEl.classList.add("fizz-buzz")
        ItemEl.innerHTML = ("FIZZ BUZZ")
    }
    // CONDIZIONE DI 'BUZZ' DA INSERIRE NEL RELATIVO QUADRATO CON AGGIUNTA CLASSE
    else if(i % 5 == 0){
        ItemEl.classList.add("buzz")
        ItemEl.innerHTML = ("BUZZ")
    }
    // CONDIZIONE DI 'FIZZ' DA INSERIRE NEL RELATIVO QUADRATO CON AGGIUNTA CLASSE
    else if(i % 3 == 0){
        ItemEl.classList.add("fizz")
        ItemEl.innerHTML = ("FIZZ")
    }
}