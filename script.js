/*------------------------------navbar-------------------------------*/
//navbar element
let nav = document.createElement("nav");
nav.setAttribute("class", " navbar ");
document.body.append(nav);
////////////////////////////////////
let div = document.createElement("div");
div.setAttribute("class", "container");
nav.append(div);
let p = document.createElement("h4");
p.setAttribute("class", "para text-white");
p.innerHTML = "THIRUkkURAL";
div.append(p);
// form element
let form = document.createElement("form");
form.setAttribute("class", "form-inline  ");

div.append(form);
//input element
let input = document.createElement("input");
input.setAttribute("class", "rounded");
input.setAttribute("type", "search");
input.setAttribute("placeholder", "Enter 1 to 1330");
input.setAttribute("id", "books");
form.append(input);
//button element
let button = document.createElement("button");
button.setAttribute("class", "btn btn-success mx-2");
button.setAttribute("type", "button");
button.addEventListener("click", tirukkural);
button.innerHTML = "Search";
form.append(button);
/*------------------------------navbar-------------------------------*/

/*--------------------------------------------------------------------------------------------*/
let container = document.createElement("div");
container.setAttribute("class", "container py-4  ");
document.body.append(container);
let row = document.createElement("div");
row.setAttribute("class", "row");
container.append(row);
/*--------------------------------------------------------------------------------------------*/
async function tirukkural() {
  try {
    let input = document.getElementById("books").value;
    let url = `https://api-thirukkural.vercel.app/api?num=${input}`;
    let link = await fetch(url);
    let result = await link.json();
    console.log(result);
    row.innerHTML = `
    <div class="col-sm-6 offset-sm-3">
    
    <div class="card   text-center">
  <div class="card-body">
  <p class="sm">Tirukkural No:&nbsp&nbsp${result.number}</p><hr>
  <p class="card-text sm-box">${result.line1}<br> ${result.line2}</p>
    <p class="card-text">
      Chapter : ${result.chap_tam}-${result.chap_eng}
    </p>
    <pclass="card-text">Chapter group : ${result.chapgrp_tam} - ${result.chapgrp_eng}</p>
    <p class="card-text">Section : ${result.sect_tam} - ${result.sect_eng}</p>
    <p class="card-text">Tamil EXplanation : ${result.tam_exp}</p>
    <p class="card-text">English Explation  : ${result.eng}</p>
    </div>
  </div>
</div>


`;
  } catch (error) {
    row.innerHTML = `<div class="card mx-auto " style="width: 22rem">
  <div class="card-body">
  <h4 class="card-text text-center">NO MORE TO <br><b >TIRUKkURAL</b><br>Please Refresh the Page</h4>
  </div>
  </div>`;
  }
}
