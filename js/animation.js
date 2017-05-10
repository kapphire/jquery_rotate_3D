var moveForce = 30;
var rotateForce = 20;

$(document).mousemove(function(e) {
    var docX = $(document).width();
    var docY = $(document).height(); 
    
    var moveX = (e.pageX - docX/2) / (docX/2) * -moveForce;
    var moveY = (e.pageY - docY/2) / (docY/2) * -moveForce;
    
    var rotateY = (e.pageX / docX * rotateForce*2) - rotateForce;
    var rotateX = -((e.pageY / docY * rotateForce*2) - rotateForce);
    
    $('.popup')
        .css('left', moveX+'px')
        .css('top', moveY+'px')
        .css('transform', 'rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)');

    $('.popup-2')
        .css('right', moveX+'px')
        .css('bottom', moveY+'px')
        .css('transform', 'rotateX('-rotateX-'deg) rotateY('-rotateY-'deg)');
});