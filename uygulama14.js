

function getir(){
document.getElementById("kutu").src="images/Sol\ Ok.png"
}

function getir2(){
    document.getElementById("kutu").src="images/Sağ\ Ok.png"
    }

function degistir(){
    document.getElementById("boyut").style.backgroundColor="orangered";
}

function degistir2(){
    document.getElementById("boyut").style.backgroundColor="white";
}
    

function degistir3(){
    document.getElementById("boyut").style.backgroundColor="#383838";
    document.getElementById("boyut").style.color="white";
    document.getElementById("boyut").style.font="15px bold tahoma";
    
}

document.write(" <form><input id='boyut'  type='text' onfocus='degistir3()' ondblclick='degistir()' onblur='degistir2()'></form>")



function kontrol(){
    if (document.getElementById("ad").value==""   ) {
        document.getElementById("yaziad").style.font="16px bold tahoma";
        document.getElementById("yaziad").style.backgroundColor="red";
        document.getElementById("yaziad").style.color="white";
        document.getElementById("yaziad").innerHTML="Boş Geçilemez";
   
    }

    else{
        document.getElementById("yaziad").style.font="16px bold tahoma";
        document.getElementById("yaziad").style.color="white";
        document.getElementById("yaziad").innerHTML="Girebilirsiniz";
        document.getElementById("yaziad").style.backgroundColor="green";
    }

    if (document.getElementById("soyad").value=="" ) {
        document.getElementById("yazisoyad").style.font="16px bold tahoma";
        document.getElementById("yazisoyad").style.backgroundColor="red";
        document.getElementById("yazisoyad").style.color="white";
        document.getElementById("yazisoyad").innerHTML="Boş Geçilemez";
    }

    else{
        document.getElementById("yazisoyad").style.font="16px bold tahoma";
        document.getElementById("yazisoyad").style.color="white";
        document.getElementById("yazisoyad").innerHTML="Girebilirsiniz";
        document.getElementById("yazisoyad").style.backgroundColor="green";
    }

    if (document.getElementById("tel").value=="" ) {
        document.getElementById("yazitel").style.font="16px bold tahoma";
        document.getElementById("yazitel").style.backgroundColor="red";
        document.getElementById("yazitel").style.color="white";
        document.getElementById("yazitel").innerHTML="Boş Geçilemez";
    }

    else{
     
      
        document.getElementById("yazitel").style.font="16px bold tahoma";
        document.getElementById("yazitel").style.color="white";
        document.getElementById("yazitel").innerHTML="Girebilirsiniz";
        document.getElementById("yazitel").style.backgroundColor="green";


        
    }






   
}