let tab
let header
window.onscroll = () => {
  header = document.querySelector('header');
  tab = document.querySelector('.tab')
  if(window.pageYOffset > tab.scrollHeight) {
    header.className = 'sticky';
  } else{    
      header.classList.remove('sticky');
    }
}