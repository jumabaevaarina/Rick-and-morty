    const lightModeButton = document.querySelector('.lightMode');
    const image = document.querySelector('.headerImg img');
    const darkModeButton = document.querySelector('.darkMode');
    getThemeMode();
    switchMode ();
    scroller();


    function switchMode (){
    darkModeButton.addEventListener('click', function(){
        darkModeChange();
    })
     lightModeButton.addEventListener('click', function(){
        lightModeChange();
})
    };

function lightModeChange() {
        lightModeButton.classList.add('active');
        darkModeButton.classList.remove('active');
        document.body.classList.add('claro');
        image.src = './allpng/claroImg.png';
        localStorage.setItem("mode","claroMode")
}

function darkModeChange() {
        document.body.classList.remove('claro');
        image.src = './allpng/Rick.png';
        darkModeButton.classList.add('active');
        lightModeButton.classList.remove('active');
        localStorage.setItem("mode","escuroMode")
}

function getThemeMode() {
  const getTheme = localStorage.getItem("mode");
  if(getTheme === "escuroMode"){
    darkModeChange()
  } else {lightModeChange()};
}

function scroller(){
const scrollButton = document.querySelector('.scrollUp');
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    })
}
