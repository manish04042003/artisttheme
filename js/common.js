// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
  modal.style.opacity = "1";
  $(".modal-content").css("animation", "ShowMeW 0.5s forwards");

  // $(".modal-content").css("margin-left", "0");
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  $(".modal-content").css("animation", "hidemew 0.5s forwards");
  const myTimeout = setTimeout(myGreeting, 450);

  function myGreeting() {
  modal.style.display = "none";;
  }
  // modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    $(".modal-content").css("animation", "hidemew 0.5s forwards");
    const myTimeout = setTimeout(myGreeting, 450);
  
    function myGreeting() {
    modal.style.display = "none";;
    }
   
  }
};




function setTheme(theme) {
  if (theme == 'Dark') {
    localStorage.setItem('panelTheme', theme);
    $('#current-theme').text(theme);
    $(':root').css('--headingcolor', 'white');
    $(':root').css('--bgwhite', 'black');

  }
  if (theme == 'Blue') {
    localStorage.setItem('panelTheme',  'Blue');
    $('#current-theme').text('Blue');
    alert("Blue");
  }
  if (theme == 'Green') {
    localStorage.setItem('panelTheme', 'Green');
    $('#current-theme').text('Green');
    alert("Green");
  }
}

// setTheme('Dark');




  $(document).on('click','.Contact',function(){
    window.location.href = "/Html/contactus.html";
  });

  
  $(document).on('click','.Home',function(){
    window.location.href = "index.html";
  });
  
  
  $(document).on('click','.About',function(){
    window.location.href = "/Html/aboutus.html";
  });
  
  $(document).on('click','.catagory',function(){
    window.location.href = "/Html/collectionpage.html";
  });
  
