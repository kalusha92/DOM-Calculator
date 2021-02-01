var output = document.getElementById('output-value');
     
    function pushBtn(obj) {
         
        var pushed = obj.innerHTML;
         
        if (pushed == '=') {
			// Calculate

            output.innerHTML = eval(output.innerHTML);
             
        } else if (pushed == 'C') {
            // All Clear
            output.innerHTML = '0';
             
		}
		else if(pushed == '√' ){
			if(output.innerHTML =='0'){
				return
			}
			else{
			var sqrt = document.getElementById('output-value').innerHTML;	
			output.innerHTML = Math.sqrt(sqrt).toFixed(3)
			}
		}
		else {
            if (output.innerHTML == '0') {
                output.innerHTML = pushed;
                 
            } else {
                output.innerHTML += pushed;   
            }
        }
    }


