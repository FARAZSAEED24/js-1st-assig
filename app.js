let mobiles = {
    iphone: {
        v13promax: {
            ram: 16,
            rom: 256,
            price: 120000,
        },
        v13pro: {
            ram: 12,
            rom: 64,
            price: 120000,
        },
        v13: {
            ram: 4,
            rom: 64,
            price: 120000,
        },
    },
    samsung: {
        a20: {
            ram: 16,
            rom: 256,
            price: 120000,
        },
        S21: {
            ram: 12,
            rom: 64,
            price: 120000,
        },
        S22: {
            ram: 4,
            rom: 64,
            price: 120000,
        },
    },
    Xiaomi: {
        realme: {
            ram: 4,
            rom: 64,
            price: 120000,
        },
        realmec12: {
            ram: 6,
            rom: 128,
            price: 120000,
        },
        redmi: {
            ram: 12,
            rom: 64,
            price: 120000,
        },
    },
}
let model = document.getElementById('mobileModel');
let mobileName = document.getElementById('mobileName');
let showdetails = document.getElementById('details');
let keys = Object.keys(mobiles);
function dropdown(){
    mobileName.innerHTML = "";
    for (var i = 0; i < keys.length;i++){
        mobileName.innerHTML += `<option>${keys[i]} </option>`
    }
}
dropdown()
function fillvalue(){
    model.disabled = false;
    model.innerHTML = "";
    let nestedkeys = Object.keys(mobiles[mobileName.value])
    for (var i = 0; i < nestedkeys.length;i++){
        model.innerHTML += `<option>${nestedkeys[i]} </option>`
    }
}
fillvalue()
function searchVal(){
    let res = mobiles[mobileName.value][model.value];
         console.log(res);
    showdetails.innerHTML = ` <p id = "hi">  ${mobileName.value +" "+ model.value} </p>
    <p id = "hi"> Ram: ${res.ram} </p>
    <p id = "hi"> Rom: ${res.rom} </p>
    <p id = "hi"> Price: ${res.price} </p>`;
};




