//  phone part plus 
const plus = document.getElementById('plus');
plus.addEventListener('click', function(){
     const plusInput = Number(document.getElementById('plusInput').value);

     const nowInput = plusInput +1;
     document.getElementById('plusInput').value = nowInput;

     const phoneBlance = Number(document.getElementById('phoneBlance').innerText);
     
     const NowBlnce = nowInput * 1219;
     document.getElementById('phoneBlance').innerText = NowBlnce;

     const subBlnce =  parseFloat(document.getElementById('subBlnce').innerText);
     const NowBlnceSub = nowInput * 1219 ;
     document.getElementById('subBlnce').innerText = NowBlnceSub;

    


 })

// phone part minus 

const minus = document.getElementById('minus');
minus.addEventListener('click', function(){
     const input = Number(document.getElementById('plusInput').value);
     if(input>0){
        const nowInput = input -1;
        document.getElementById('plusInput').value = nowInput;

        const phoneBlance = Number(document.getElementById('phoneBlance').innerText);
        const NowBlnce = nowInput * 1219;

         document.getElementById('phoneBlance').innerText = NowBlnce;
      }else{
        alert('Invaild Numbar')
     }
})

// remove phone area 
 const removePhone = document.getElementById('removePhone');
removePhone.addEventListener('click',  function(){
    document.getElementById('phonearea').style.display = 'none';
})

// plus Phone Case area 

const plusCase = document.getElementById('CasePlus');
plusCase.addEventListener('click', function(){
      const input = Number(document.getElementById('caseInput').value);
      const nowInput = input + 1;
      document.getElementById('caseInput').value = nowInput;

      const caseBlance = Number(document.getElementById('caseBlance').innerText);
      const NowBlnce = nowInput * 59;
      document.getElementById('caseBlance').innerText = NowBlnce;

})

// Case Phone Minu area 

const caseMinus = document.getElementById('caseRemove');
caseMinus.addEventListener('click', function(){
    const input = Number(document.getElementById('caseInput').value);
    if(input>0){
        const nowInput = input - 1;
        document.getElementById('caseInput').value = nowInput;
        const caseBlance = Number(document.getElementById('caseBlance').innerText);
       const NowBlnce = nowInput * 59;
       document.getElementById('caseBlance').innerText = NowBlnce;
      }else{
        alert('Invalid Numbar')
     }
})

// remove Case area 

const removeCase = document.getElementById('removeCase');
removeCase.addEventListener('click', function(){
    document.getElementById('caseArea').style.display = 'none'
})

// Subtotal area 

