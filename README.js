function sumar() {
    

    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    
    var sumar = parseInt(num1) + parseInt(num2);
    document.getElementById('resultado').value = sumar;
    
    }
    
    function restar(){

    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    
    var restar = parseInt(num1) - parseInt(num2);
    document.getElementById('resultado1').value = restar;


    }
 
    function dividir(){

        var num1 = document.getElementById('num1').value;
        var num2 = document.getElementById('num2').value;
        
        var dividir = parseInt(num1) / parseInt(num2);
        document.getElementById('resultado').value = dividir;
    
    
        }

        function multiplicar(){

            var num1 = document.getElementById('num1').value;
            var num2 = document.getElementById('num2').value;
            
            var multiplicar = parseInt(num1) * parseInt(num2);
            document.getElementById('resultado').value = multiplicar;
        
        
            }
    
    
    
   

