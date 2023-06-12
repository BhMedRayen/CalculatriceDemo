function btnClicked(button)
{

    var btnText=button.textContent;
    let result=document.getElementById('result');
    if(btnText!="=")
    {
        result.value+=btnText; 
    }
    else if(btnText=="=")
    {
        let i=-1;
        let ch=result.value;
       do 
       {
        i+=1;
          if(ch[i]=="+")
          {
             let op1=parseFloat(ch.substring(0,i));
             let op2=parseFloat(ch.substring(i+1,ch.length));
             let res=op1+op2;
             result.value+="="+res;
          }
         else if(ch[i]=="-")
          {
            let op1= parseFloat(ch.substring(0,i));
            let op2= parseFloat(ch.substring(i+1,ch.length));
            let res2=(op1)-(op2);
            result.value+="="+res2;
          }
          else if(ch[i]=="*")
          {
            let op1= parseFloat(ch.substring(0,i));
            let op2= parseFloat(ch.substring(i+1,ch.length));
            let res2=(op1)*(op2);
            result.value+="="+res2;
          }
          else if(ch[i]=="/")
          {
            let op1= parseFloat(ch.substring(0,i));
            let op2= parseFloat(ch.substring(i+1,ch.length));
            let res2=(op1)/(op2);
            result.value+="="+res2;
          }
       }while(i<ch.length);      
    }
}

function SuppEfface(button)
{
    var btnText=button.textContent
    let result=document.getElementById('result');
    if(btnText=="Supp" && result !="") 
    {
        let res=result.value;
        let deres=res.substring(0,res.length-1);
        result.value=deres;
    }
    else if(btnText=="Effac")
    {
        result.value="";
    }
}
