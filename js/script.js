setDropdownPosition = () => {
    document.getElementById('u-info').style.right = ($(window).width() - document.getElementById('connect-btn').offsetLeft - $('#connect-btn').width()*1.3)+'px'
}
setNavMenuPosition = () => {
    document.getElementById("nav-menu").style.top = document.getElementById('navbar').offsetHeight+"px"
}
enableResponsiveMenu = () => {
    menu = document.getElementById('category-list')
    nav = document.getElementById('nav-menu')
    nav.innerHTML += menu.innerHTML
    menu.style.display = "none"
}
disableResponsiveMenu = () => {
    $('#nav-menu ul#Categories').remove()
    menu = document.getElementById('category-list')
    menu.style.display = "initial"
}
$(function () {
    if ($(window).width()<769) {
        enableResponsiveMenu()
    }
    setNavMenuPosition()
    $(window).on('resize', () => {
        if ($(window).width()<769) {
            enableResponsiveMenu()
        }
        else{
            setDropdownPosition()
            disableResponsiveMenu()
        }
    })
    $('.navbar-toggler').on('click',function (e) {
        e.preventDefault();
        if ($('#nav-menu').hasClass('collapsed')) {
            document.getElementById("nav-menu").style.width = "0px";
            $('#nav-menu').removeClass('collapsed');
            $('#u-info').collapse('hide')
            $('.modal-backdrop').remove();
        }
        else{
            var vw = document.documentElement.offsetWidth
            marginY = vw*0.05
            document.getElementById("nav-menu").style.width = "80vw";
            $("#nav-menu").addClass('collapsed')
            $('#u-info').collapse('show')
            $('header').append("<div class='modal-backdrop fade show'></div>")
        }
    });
});