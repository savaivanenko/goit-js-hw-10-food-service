const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const refs = {
  input: document.querySelector('.theme-switch__toggle'),
  body: document.querySelector('body')
};

refs.input.addEventListener('change', definitionTheme);

function definitionTheme(event){
// console.log(event.target.checked);
if (event.target.checked){
  localStorage.setItem('Theme', Theme.DARK);
  refs.body.classList.add(Theme.DARK);
}
else{
  localStorage.setItem('Theme', Theme.LIGHT);
  refs.body.classList.remove(Theme.DARK);
}
}


switch (localStorage.getItem('Theme')){
  case 'dark-theme':
    refs.body.classList.add(Theme.DARK);
    refs.input.checked = true;
    break;
  
  case 'light-theme':
    refs.body.classList.add(Theme.LIGHT);
    break;

  default:
      console.log('lazha - switch kirdyk');
}

// }
// afterReloadPage();

