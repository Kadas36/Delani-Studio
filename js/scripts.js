let icons = ['icon1', 'icon2', 'icon3'];



$(document).ready(function(){
        $('.icon1').click(function(){
            $('.icon1 img').toggle();
            $('.designDetails').toggle();
        })
    
        $('.icon2').click(function(){
            $('.icon2 img').toggle();
            $('.developmentDetails').toggle();
        })
    
        $('.icon3').click(function(){
            $('.icon3 img').toggle();
            $('.productDetails').toggle();
        })


        $(".portfolio img").hover(function(){
            
        });
    
});
