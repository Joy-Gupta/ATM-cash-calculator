// ---------------------handle bank deposit button event-----------------------------------------------------------

document.getElementById('deposit-btn').addEventListener('click',function(){

    // koto value input hoise pabo amra---
    const depositinput = document.getElementById('deposit-input');
    const newdepositamount =depositinput.value;
    // console.log(newdepositamount);

    const deposittotal = document.getElementById('deposit-total');
    // amount ta box a bosbe akhn

    const prviousdepoamount = deposittotal.innerText;
    const newdeposittotal =parseFloat(prviousdepoamount) +parseFloat(newdepositamount);
    deposittotal.innerText =newdeposittotal;

    // update balance--------------------------

    const balancetotal =document.getElementById('balance-total');

    const balancetotaltext =balancetotal.innerText;
    const previousbalancetotal =parseFloat(balancetotaltext);
    const newbalancetotal = previousbalancetotal+parseFloat(newdepositamount);

    balancetotal.innerText =newbalancetotal;

    // clear deposit input field
    depositinput.value='';


})

// ---------------------------------handle bank withdraw event handler-----------------------------------------------------

document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawinput =document.getElementById('withdraw-input');

    const withdrawamounttext = withdrawinput.value;
    const newwithdrawamount = parseFloat(withdrawamounttext);
    console.log(newwithdrawamount);
    // set withdraw total
    const withdrawtotal = document.getElementById('withdraw-total');
    const previouswithdrawtext = withdrawtotal.innerText;
    const previouswithdrawtotal = parseFloat(previouswithdrawtext);

    const newwithdrawtotal = previouswithdrawtotal + newwithdrawamount;
    withdrawtotal.innerText =newwithdrawtotal;


    // update balance 2-----------------

    const balancetotal =document.getElementById('balance-total');

    const balancetotaltext =balancetotal.innerText;
    const previousbalancetotal =parseFloat(balancetotaltext);
    const newbalancetotal =parseFloat(previousbalancetotal)-parseFloat(newwithdrawamount);

    balancetotal.innerText =newbalancetotal;


    
    // clear input input
    withdrawinput.value ='';
})