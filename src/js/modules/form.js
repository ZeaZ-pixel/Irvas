import { closeModal, openModal } from "./modals";
import { postData } from "../service/service";
import checkNum from "./checkNum";

export default function form(state){
  const formSection = document.querySelectorAll('form');
  const message = {
    loading: 'Loading...',
    success: 'Success',
    failure: 'Error'
};

  checkNum('input[name="user_phone"]');

  formSection.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            form.appendChild(statusMessage);

      const formData = new FormData(form);
      if(form.getAttribute('data-calc') === "end") {
        for(let key in state){
          formData.append(key, state[key]);
        }
      }
  
      const object = JSON.stringify(Object.fromEntries(formData.entries()));
  
      if(e.target.classList.contains('main_form')){
        postData('http://localhost:3000/free_measurement', object)
          .then(data => {
            console.log(data);
            showThanksModal('.popup', message.success);
          })
          .catch(() => {
            showThanksModal('.popup', message.failure);
          })
          .finally(() => {
            closeModal('.popup_engineer');
            form.reset();
          });
      }else{
        postData('http://localhost:3000/call', object)
        .then(data => {
          console.log(data);
          showThanksModal('.popup_engineer', message.success);
        })
        .catch(() => {
          showThanksModal('.popup_engineer', message.failure);
        })
        .finally(() => {
          closeModal('.popup');
          form.reset();
        });
      }
    });
  });
}

function showThanksModal (modalSelector, message){
  const modal = document.querySelector(modalSelector);
  const prevModalDialog = modal.querySelector('.popup_dialog');
  prevModalDialog.classList.remove('show');
  prevModalDialog.classList.add('hide');

  openModal(modalSelector);                                               

  const thanksModal = document.createElement('div');
  thanksModal.classList.add('popup_dialog');
  thanksModal.innerHTML = `
      <div class="popup_content text-center">
          <button data-close class="popup_close">×</button>
          <h2 class="popup__title">${message}</h2>
      </div>
  `;

  document.querySelector(modalSelector).append(thanksModal);
  setTimeout(() => {
    thanksModal.remove();
    prevModalDialog.classList.add('show');
    prevModalDialog.classList.remove('hide');
    closeModal(modalSelector);
  }, 4000);
}

