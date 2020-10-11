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

        let backgrounds = ['.bg1', '.bg2', '.bg3', '.bg4', '.bg5', '.bg6', '.bg7', '.bg8'];
        backgrounds.forEach(function(background){
            console.log(background);
            $(background).hover(function(){
                $(background +" .projectName").show();
                },
                function(){
                    $(background+ " .projectName").hide();
                }
            );

        })
            
});
