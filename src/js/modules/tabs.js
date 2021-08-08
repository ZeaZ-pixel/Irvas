export default function tabs(parentSelector, tabSelector, contentSelector, activeClass, display='block'){
  const parent = document.querySelector(parentSelector);
  const tabs = document.querySelectorAll(tabSelector);
  const content = document.querySelectorAll(contentSelector);
  

  function activeTab(i=0){
    tabs[i].classList.add(activeClass);
    content[i].style.display=display;
  }

  function hideTab(){
    tabs.forEach(item => {
      item.classList.remove(activeClass);
    });
    content.forEach(item => {
      item.style.display = 'none';
    });
  }

  hideTab();
  activeTab();

  parent.addEventListener('click', (e) => {
    if(e.target && e.target.classList.contains(tabSelector.replace(/\./, "")) || e.target.parentNode.classList.contains(tabSelector.replace(/\./, ""))){
      tabs.forEach((tab, i) => {
        if(e.target === tab || e.target.parentNode === tab){
          hideTab();
          activeTab(i);
        }
      });
    }
  });


}