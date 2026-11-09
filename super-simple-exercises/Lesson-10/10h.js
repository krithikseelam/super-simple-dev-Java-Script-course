function calculateTotalPriceKeyDown(event){
  if(event.key === 'Enter'){
    calculateTotalPrice();
  }
}

function calculateTotalPrice(){
  let productValue = Number(document.querySelector('.js-textbox').value);
  let displayPriceElement = document.querySelector
    ('.display-price');
  if(productValue <= 0){
    displayPriceElement.innerHTML = 'Error: cost cannot be less than $0';
    displayPriceElement.classList.add('error');
  }else if(productValue < 40 && productValue > 0){
    if(displayPriceElement.classList.contains('error')){
      displayPriceElement.classList.remove('error');
    }
    productValue += 10;
    displayPriceElement.innerHTML = `$${productValue}`;
  }else{
    if(displayPriceElement.classList.contains('error')){
      displayPriceElement.classList.remove('error');
    }
    displayPriceElement.innerHTML = `$${productValue}`;
  }
}

