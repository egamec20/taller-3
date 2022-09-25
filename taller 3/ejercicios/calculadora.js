class calculadora{
   limpiar(){
      let resul = document.getElementById("result")
      resul.value=""
   }


 
   divisores(){
    let result= document.getElementById("result")
    let o=0
    let i=1
    let nume= parseInt(result.value)
    for( i=1;i<nume;i++){
      if (nume%i==0){
       o=o+i+",".toString()
      }
   }
   result.value=o
} 






invertir(){
let result= document.getElementById("result")
let c=0,digito=""
let num= parseInt(result.value)
while(num>0){
    c=num%10
    num=Math.floor(num/10)
    digito=digito + c.toString()
}
result.value= digito
}







primo(){
   let result=document.getElementById("result")
   let dig=0,c=1,resp=""
   let num= parseInt(result.value)
   while (c<=num) {
       if (num%c==0) {
          dig=dig+1
          console.log(dig)
       }
       c=c+1
   }
   if (dig==2) {
      resp=resp+num+" es un numero primo".toString()
      
   }else{
      resp=resp+num+" no es un numero primo".toString()
   }
   result.value=resp
}







perfecto(){
   let result=document.getElementById("result")
   let respu=0,per="",i=0
   let num=parseInt(result.value)
   if (num>0) {
   for(i=0;i<num;i++){
         if ((num%i)==0) {
            respu=respu+i
            
         }
     }
   if (respu==num) {
        per=num+" es un numero perfecto".toString() 
      }else{
      per=num+" no es un numero perfecto".toString() 
   }
}  
else{
   per="ingrese un valor numerico y mayor a 0 ".toString()
}
   result.value=per   
   }






   fibonachi(){
      
      let result=document.getElementById("result")
      let  numer,i=0
      let f=[0,1]
       numer = parseInt(result.value)
       for(let i=2; i<=numer-1;i++){
       f[i]=f[i-1]+f[i-2]
         result.value=f.toString()
       
       }
    
} 





base10_2(){
 let result=document.getElementById("result")
 let digito,pos=0,numeros=[],rr="",men=" "
 let vari = parseInt(result.value)
 if (vari>0) {
while(vari>0){
   digito=vari%2
   vari=Math.floor(vari/2)
   numeros[pos]= digito
   pos= pos+1
}
for(let h=pos-1; h>=0;h--){
    rr=rr+numeros[h].toString()
}
   result.value=rr
   }
   else {
      result.value=men+"ingrese un valor numerico y mayor a cero ".toString()
      
   }
}







base10_16(){
    let result=document.getElementById("result")
   let c=1,hex=" ",cn=""
   let num= parseInt(result.value)
   while(c>0){
      c=Math.floor(num/16)
        switch (num%16) {
         case 10:
                hex="A"+hex
            break;
         case 11:
                hex="B"+hex
            break;
         case 12:
                hex="C"+hex
            break;
         case 13:
                hex="D"+hex
            break;
         case 14:
                hex="E"+hex
            break;
         case 15:
                hex="F"+hex
            break;
        
         default:
            hex=(num%16)+hex
            break;
        }
        num=c
       
   }
    cn=cn+hex.toString()
    result.value=cn
}






base10_8(){
   let result=document.getElementById("result")
   let c=1,oct=" "
   let rep="",men=" "
   let num=parseInt(result.value)

   if (num>0) {
      while(c>0){
         c=Math.floor(num/8)
         oct=(num%8)+oct.toString()
         num=c
         
      } 
      rep=rep+oct.toString()
      result.value=rep
   } 
   else {
      result.value=men+"ingrese un valor numerico y mayor a cero ".toString()
      
   }
  
   
}







base2_10(){
   let result= document.getElementById("result")
   let dec=0,c=0,ex=0,s=0,r="",x=0,p=0
   let num=parseInt(result.value)
   if (num>0) { 
   while(c<num){ 
      dec=num%10
      num=Math.floor(num/10)
      p=2**x 
      ex=dec*p
      s=s+ex
      x=x+1     
   }

    r=s.toString()
   }else {
      r="ingrese un valor numerico y que sea un numero binario ".toString()
   }
   result.value=r
}



contar_palabra(){
   let result= document.getElementById("result")
   let c=1,i=0
   let tex=result.value 
   for(let i=0;i<tex.length-1; i++){
      if(tex[i]==" " && tex[i+1]!==" "){
         c=c+1
      }
   }
   result.value="la frase ->"+tex+". ( tiene "+c+" palabras) "

}





palindroma(){
   let result= document.getElementById("result")
    let h="",iv=" ",res="",i=" "
    let num =result.value
    let reserva =result.value
    for(let i=num.length -1; i>=0 ; i--){
      iv +=num[i]
  
    }
   // console.log(num[i])
       h+=iv
       res+=reserva
    console.log(iv)
    console.log(reserva)   
    console.log(h)   
    console.log(res)   
    if (iv==reserva) {
      console.log("es palindroma")  
    }

}




invertir_frase(){
   let result= document.getElementById("result")
   let i=" ",inv=" "
   let pal =result.value
   for(let i=pal.length -1; i>=0 ;i--){
      inv +=pal[i]
   }
   result.value=inv
   console.log(inv)
}





 contar_caracteres(){
   let result= document.getElementById("result")
   let i=0,vo=0,co=0,e=0
   let fra=result.value
   for(i=0;i<fra.length;i++){
      console.log(fra[i])
      if(fra[i] != " " ){
         switch (fra[i]) {
            case "a":
                  vo=vo+1
               break;
            case "e":
                  vo=vo+1
               break;
            case "i":
                  vo=vo+1
               break;
            case "o":
                  vo=vo+1
               break;
            case "u":
                  vo=vo+1
               break;

            default:
               co=co+1
               break;
         }
        // console.log(vo)
         //console.log(co)

      } else{
         e=e+1
         //console.log(e)
      
        
   console.log(vo)
      console.log(co)
      //console.log(e)
      result.value+=" => esta palabra tiene. "+ vo+ ":vocales. "+co+":consonantes. "+e+":espacios"
   
 }
 
}



 }






 promedio_arreglo(){
   let result=document.getElementById("result")
   let sum=0 ,c=0,i=0
   let num=result.value
   let arr=num.split(";")
                          
 
   for(c=0 ;c<arr.length;c++){
      sum=sum+parseFloat(arr[c])
   }
        i=sum/arr.length
         result.value="el promedio del arreglo->"+"["+arr+"]"+".  es->" + i
 }


}
let sgc = new calculadora()
