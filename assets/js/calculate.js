const str = "Доза крысы: "
    document.addEventListener("keyup", calculate);
    function calculate() {
        var ves_ch = document.getElementById("ves_ch").value;
        var ves_c = document.getElementById("ves_c").value;
        var doza = document.getElementById("doza").value;
        otvet = (((doza * ((0.001*ves_c/ves_ch)**0.67)).toFixed(2)).toString());
        otvet_str = str.concat(otvet, " милиграмм");
        var otvet_field = document.getElementById("1");
        otvet_field.innerHTML=otvet_str;
    };