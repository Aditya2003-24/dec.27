document.getElementById("btn").addEventListener("click" , mynum);


function mynum()
{
    let num1 = parseInt(document.getElementById("num").value);
    let num2 = parseInt(document.getElementById("num0").value);
    let num3 = parseInt(document.getElementById("num9").value);
    let num4 = parseInt(document.getElementById("num8").value);
    let num6 = num1 + num2 + num3+ num4;
     let num7 = num6/4;

    document.getElementById("demo").innerHTML = "Total marks : " + num6;
    document.getElementById("demo1").innerHTML = "Parcentage : "+num7;
    // document.getElementById("demo").innerHTML = "Total marks : "+num1;
    // document.getElementById("demo").innerHTML = "Total marks : "+num1;
    // document.getElementById("demo").innerHTML = "Total marks : "+num1;
}