

function update_price(input_id, price_id, unit_price) {
    var quantity = document.getElementById(input_id).value;
    var price = quantity * unit_price ;
    document.getElementById(price_id).innerText = price;
}

function check_input() {
    var check1 = document.getElementById("validCheck1").checked;
    var check2 = document.getElementById("validCheck2").checked;
    var check3 = document.getElementById("validCheck3").checked;
    var check4 = document.getElementById("validCheck4").checked;
    var submitButton = document.getElementById("submitButton");
    

    if (check1 || check2 || check3 || check4) {
        submitButton.style.display = "block";
    
    }
    else {
        submitButton.style.display = "none";
        
    }
        
}

function openModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
    
    var dark_layer = document.getElementById("couche_sombre");
    if (dark_layer) {
        dark_layer.style.display = "block";
    }

}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";

    var dark_layer = document.getElementById("couche_sombre");
    if (dark_layer) {
        dark_layer.style.display = "none";
    }
     
    
}
