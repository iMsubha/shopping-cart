
function handleProductChanges(product, isIncrease){
    const productCount = getInputValue(product +'-count');
    // if (caseCount <= 0) return;
    // const decreaseCaseCount = caseCount - 1;
    let newCount = productCount;
    if(isIncrease == false && productCount>0){
        newCount = productCount - 1;
    }
    if(isIncrease == true){
        newCount = productCount + 1;
    }
    //let totalCasePrice = newCount * 59;
     let productTotal = 0;
     if(product == 'phone'){
        productTotal = newCount * 1219;
     }
     if(product == 'case'){
        productTotal = newCount * 59;
     }
    //set value
    setInputValue(product +'-count', newCount);
    setInnerText(product +'-total', productTotal);
    calculateTotal();
}
function calculateTotal(){
    const phoneCount = getInputValue('phone-count');
    const caseCount = getInputValue('case-count');
    const subTotal = phoneCount * 1219 + caseCount * 59;
    const taxAmount = Math.round(subTotal* 0.1);
    const totalPrice = subTotal + taxAmount;
    setInnerText('subTotal', subTotal);
    setInnerText('tax-amount',taxAmount);
    setInnerText('total-price', totalPrice);
}
function getInputValue(id) {
    const inputNumber = parseInt(document.getElementById(id).value);
    return inputNumber;
}
function setInputValue(id, count) {
    document.getElementById(id).value = count;
}
function setInnerText(id, totalCasePrice) {
    document.getElementById(id).innerText = "$ " + totalCasePrice;
}
// document.getElementById("case-increase").addEventListener("click", function () {
//     const caseCount = getInputValue("case-count");
//     const increaseCaseCount = caseCount + 1;
//     const totalCasePrice = increaseCaseCount * 59;
//     //set value
//     setInputValue("case-count", increaseCaseCount);
//     setInnerText("case-total", totalCasePrice);
//     handleProductChanges(true)
// });
// document.getElementById("case-decrease").addEventListener("click", function () {
//   handleProductChanges(false);
// });


// document.getElementById("phone-increase").addEventListener("click", function () {
//     const phoneCount = getInputValue("phone-count");
//     const increasePhoneCount = phoneCount + 1;
//     const totalPhonePrice = increasePhoneCount * 1219;
//     setInputValue("phone-count", increasePhoneCount);
//     setInnerText("phone-total", totalPhonePrice);
//    // calculateTotal(totalPhonePrice);
// });
// document.getElementById("phone-decrease").addEventListener("click", function () {
//     const phoneCount = getInputValue("phone-count");
//     if (phoneCount <= 0) return;
//     const decreasePhoneCount = phoneCount - 1;
//     const totalPhonePrice = decreasePhoneCount * 1219;
//     setInputValue("phone-count", decreasePhoneCount);
//     setInnerText("phone-total", totalPhonePrice);
//    // calculateTotal(totalPhonePrice);
// });


// function calculateTotal(price){
//     const totalPrice = price;
//     setInnerText("subTotal",totalPrice)
// }

