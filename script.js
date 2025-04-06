let button1 = document.getElementById("mybutton1");
        let button2 = document.getElementById("mybutton2");
       const  gethexvalue = () => {
            let hexvalue="0123456789abcdef";
            let hexcode="#";
            for(let i=0;i<6;i++){
                hexcode+=hexvalue[Math.floor(Math.random()*16)];
            }
            return hexcode;

        }
        let copycode = document.querySelector(".copycode");
        let btn1=document.getElementById("mybutton1");
        let btn2=document.getElementById("mybutton2");
        const handlebutton1 = () => {
             hexcode1=gethexvalue();
            
            console.log(hexcode1);
            document.body.style.background=`linear-gradient(to right, ${hexcode1}, ${hexcode2})`; 
            copycode.innerHTML=`background-image:linear-gradient(to right, ${hexcode1}, ${hexcode2})`;  
            btn1.innerHTML=`${hexcode1}`;  
            btn2.innerHTML=`${hexcode2}`;    
         }
        const handlebutton2 = () => {
           
             hexcode2=gethexvalue();
            console.log(hexcode1);
            document.body.style.background=`linear-gradient(to right, ${hexcode1}, ${hexcode2})`;
            copycode.innerHTML=`background-image:linear-gradient(to right, ${hexcode1}, ${hexcode2})`; 
            btn2.innerHTML=`${hexcode1}`; 
            btn1.innerHTML=`${hexcode2}`;
        }
        button1.addEventListener("click",handlebutton1);
        button2.addEventListener("click",handlebutton2);
        copycode.addEventListener("click",()=>{
            navigator.clipboard.writeText(copycode.innerHTML);
            alert("copied to clipboard");
        });