window.addEventListener('load',() =>{
  document.getElementById('target').addEventListener('click', () => {
    if (document.getElementById('target').style.background === 'pink'){
      document.getElementById('target').style.background = 'lightblue';
    }else{
      document.getElementById('target').style.background = 'pink';
    }
    document.getElementById( 'sound-file' ).play() ;
  });
});