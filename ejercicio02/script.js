function datos(){
    var uni1nota1 = document.getElementsByName("u1nota1")[0].value;
    var uni1nota2 = document.getElementsByName("u1nota2")[0].value;

    var uni2nota1 = document.getElementsByName("u2nota1")[0].value;
    var uni2nota2 = document.getElementsByName("u2nota2")[0].value;

    var uni3nota1 = document.getElementsByName("u3nota1")[0].value;
    var uni3nota2 = document.getElementsByName("u3nota2")[0].value;


    var uni1rnota1 = document.getElementById("u1r_nota1");
    var uni1rnota2 = document.getElementById("u1r_nota2");

    var uni2rnota1 = document.getElementById("u2r_nota1");
    var uni2rnota2 = document.getElementById("u2r_nota2");

    var uni3rnota1 = document.getElementById("u3r_nota1");
    var uni3rnota2 = document.getElementById("u3r_nota2");

    var resutado = document.getElementById("respuesta");

    uni1rnota1.innerHTML = "";
    uni1rnota2.innerHTML = "";

    uni2rnota1.innerHTML = "";
    uni2rnota2.innerHTML = "";
    
    uni3rnota1.innerHTML = "";
    uni3rnota2.innerHTML = "";

    ponderacion1= ((uni1nota1*0.12)+(uni1nota2*0.21));
    ponderacion2= ((uni2nota1*0.12)+(uni2nota2*0.21));
    ponderacion3= ((uni3nota1*0.13)+(uni3nota2*0.21));
    promedio= (ponderacion1+ponderacion2+ponderacion3);


    

        if (/^[]*$/.test(uni1nota1) || 7.0<uni1nota1 || 0>uni1nota1 || isNaN (uni1nota1)){
            uni1rnota1.innerHTML= "NOTA 1. INVALIDO";
        }else if (/^[]*$/.test(uni1nota2) || 7.0<uni1nota2 || 0>uni1nota2 || isNaN (uni1nota2)){
            uni1rnota2.innerHTML= "NOTA 2. INVALIDO";

        }else if (/^[]*$/.test(uni2nota1) || 7.0<uni2nota1 || 0>uni2nota1 || isNaN (uni2nota1)){
            uni2rnota1.innerHTML= "NOTA 1 U2. INVALIDO";
        }else if (/^[]*$/.test(uni2nota2) || 7.0<uni2nota2 || 0>uni2nota2 || isNaN (uni2nota2)){
            uni2rnota2.innerHTML= "NOTA 2 U2. INVALIDO";

        }else if (/^[]*$/.test(uni3nota1) || 7.0<uni3nota1 || 0>uni3nota1 || isNaN (uni3nota1)){
            uni3rnota1.innerHTML= "NOTA 1 U3. INVALIDO";
        }else if (/^[]*$/.test(uni3nota2) || 7.0<uni3nota2 || 0>uni3nota2 || isNaN (uni3nota2)){
            uni3rnota2.innerHTML= "NOTA 2 U3. INVALIDO";

        }else if(promedio>=4.0){
            document.write(intro.style.backgroundColor = '#FF00FF'+
            "<div class='kakita'><table>"+
            "<tr>"+
                "<td>hola</td>"+
                "<td>Holanda</td>"+
            "</tr>"+
            "<tr>"+
                "<td>Hola</td>"+
                "<td>Mama</td>"+
            "</tr>"+
            "</table></div>");
        }else if(promedio<4.0){
            document.write("Has REPROBADO");
        }
}
