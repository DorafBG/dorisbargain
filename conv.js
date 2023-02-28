let euro = document.getElementById("euro");
let mora = document.getElementById("mora");

euro.addEventListener("input", function(){convMora(this.id, this.value);});
mora.addEventListener("input", function(){convMora(this.id, this.value);});

euro.addEventListener("input", function(){convEuro(this.id, this.value);});
mora.addEventListener("input", function(){convEuro(this.id, this.value);});

function convMora(id, valeur){
    if(id == "euro"){
        mora.value = valeur * 7;
    }
}

function convEuro(id, valeur){
    if(id == "mora"){
        euro.value = valeur / 7;
    }
}