$(document).ready(function(){
  let icons = ['.icon1', '.icon2', '.icon3'];
  icons.forEach(function(icon){
      $(icon).click(function(){
          $(icon + ' img').toggle();
          $(icon + ' .actions').toggle();
      })
  })

  let backgrounds = ['.bg1', '.bg2', '.bg3', '.bg4', '.bg5', '.bg6', '.bg7', '.bg8'];
  backgrounds.forEach(function(background){
      $(background).hover(function(){
          $(background +" .projectName").show();
          },
          function(){
              $(background+ " .projectName").hide();
          }
      );

  })

  $("form").submit(function(e){
    e.preventDefault();  
    let userName = document.getElementById('mce-FNAME').value;
    alert( userName + " we have received your message. Thank you for reaching out to us.");  
    $("form").trigger("reset"); 
  });
     
});


