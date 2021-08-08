export default function images() {
  const imgPopup = document.createElement('div'),
  workSection = document.querySelector('.works'),
  bigImage = document.createElement('img');

  imgPopup.classList.add('popup');
  workSection.append(imgPopup);

  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alignItems = 'center';
  imgPopup.style.display = 'none';

  imgPopup.appendChild(bigImage);

  workSection.addEventListener('click', (e) => {
    e.preventDefault();

    if(e.target && e.target.classList.contains('preview')){
      imgPopup.style.display = 'flex';
      const path = e.target.parentNode.getAttribute('href');
      bigImage.setAttribute('src', path);
      bigImage.style.width = '540px';
      bigImage.style.height = '540px';
      document.body.style.overflow = 'hidden';
    } 
    if(e.target && e.target.matches('div.popup')){
      imgPopup.style.display = 'none';
      document.body.style.overflow = '';
    }
  });

  
}