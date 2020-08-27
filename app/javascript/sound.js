window.addEventListener('load',() =>{
  document.getElementById('target').addEventListener('click', () => {
    document.getElementById( 'sound-file' ).play() ;
    if (document.getElementById('target').style.background === 'pink'){
      document.getElementById('target').style.background = 'lightblue';
    }else{
      document.getElementById('target').style.background = 'pink';
    }
  });
});