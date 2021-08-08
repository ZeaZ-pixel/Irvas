export default function modals (){
  const modalTimerId = setTimeout(() =>{
    openModal('.popup', modalTimerId);
  }, 60000);

  function bindModal(btnClass, modalSelector, closeSelector, closeClickOverlay = true) {
    const triggerBtn = document.querySelectorAll(btnClass);
    const modal  = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    const windows = document.querySelectorAll('[data-modal]');
    const scroll = calcScroll();

    triggerBtn.forEach(item => {
      item.addEventListener('click', (e)=> {
        if (e.target) {
          e.preventDefault();
        }

        windows.forEach(item => {
          item.classList.add('hide');
          item.classList.remove('show');
          document.body.style.marginRight = `${scroll}px`;
        });

        openModal(modalSelector, modalTimerId);
        
      });
    });
    
    close.addEventListener('click',() => {
      closeModal(modalSelector); 
      windows.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show');
        document.body.style.marginRight = `0px`;
    });
  });
  
    modal.addEventListener('click', (e) =>{
      if(e.target === modal &&  closeClickOverlay || e.target.getAttribute('data-close') ===''){
        windows.forEach(item => {
          item.classList.add('hide');
          item.classList.remove('show');
          document.body.style.marginRight = `0px`;
        });
          closeModal(modalSelector);
      }
    });


  }
  function showModalByScroll(){
    if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
      openModal('.popup', modalTimerId);
      window.removeEventListener('scroll',showModalByScroll);
    }
  }

  function calcScroll() {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  }

  window.addEventListener('scroll', showModalByScroll);

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  bindModal('.phone_link', '.popup', '.popup .popup_close');
  bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
  bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
  bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
}

export function closeModal(modalSelector){
  const modal = document.querySelector(modalSelector);
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
}

export function openModal(modalSelector, modalTimerid){
  const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    if(modalTimerid){
      clearInterval(modalTimerid);
    }
}

