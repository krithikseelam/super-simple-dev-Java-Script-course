  function changeToggle(hobby){
    let buttonElement = document.querySelector
    (`.js-${hobby}-button`);
    if(buttonElement.classList.contains('is-toggled')){
      buttonElement.classList.remove('is-toggled');
    }else {
      buttonElement.classList.add('is-toggled');
    }
  }