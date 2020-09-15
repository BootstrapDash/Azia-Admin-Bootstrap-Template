$(function(){
  'use strict'

  // This template is mobile first so active menu in navbar
  // has submenu displayed by default but not in desktop
  // so the code below will hide the active menu if it's in desktop
  if(window.matchMedia('(min-width: 992px)').matches) {
    $('.az-navbar .active').removeClass('show');
    $('.az-header-menu .active').removeClass('show');
  }

  // Shows header dropdown while hiding others
  $('.az-header .dropdown > a').on('click', function(e) {
    e.preventDefault();
    $(this).parent().toggleClass('show');
    $(this).parent().siblings().removeClass('show');
  });

  // Showing submenu in navbar while hiding previous open submenu
  $('.az-navbar .with-sub').on('click', function(e) {
    e.preventDefault();
    $(this).parent().toggleClass('show');
    $(this).parent().siblings().removeClass('show');
  });

  // this will hide dropdown menu from open in mobile
  $('.dropdown-menu .az-header-arrow').on('click', function(e){
    e.preventDefault();
    $(this).closest('.dropdown').removeClass('show');
  });

  // this will show navbar in left for mobile only
  $('#azNavShow, #azNavbarShow').on('click', function(e){
    e.preventDefault();
    $('body').addClass('az-navbar-show');
  });

  // this will hide currently open content of page
  // only works for mobile
  $('#azContentLeftShow').on('click touch', function(e){
    e.preventDefault();
    $('body').addClass('az-content-left-show');
  });

  // This will hide left content from showing up in mobile only
  $('#azContentLeftHide').on('click touch', function(e){
    e.preventDefault();
    $('body').removeClass('az-content-left-show');
  });

  // this will hide content body from showing up in mobile only
  $('#azContentBodyHide').on('click touch', function(e){
    e.preventDefault();
    $('body').removeClass('az-content-body-show');
  })

  // navbar backdrop for mobile only
  $('body').append('<div class="az-navbar-backdrop"></div>');
  $('.az-navbar-backdrop').on('click touchstart', function(){
    $('body').removeClass('az-navbar-show');
  });

  // Close dropdown menu of header menu
  $(document).on('click touchstart', function(e){
    e.stopPropagation();

    // closing of dropdown menu in header when clicking outside of it
    var dropTarg = $(e.target).closest('.az-header .dropdown').length;
    if(!dropTarg) {
      $('.az-header .dropdown').removeClass('show');
    }

    // closing nav sub menu of header when clicking outside of it
    if(window.matchMedia('(min-width: 992px)').matches) {

      // Navbar
      var navTarg = $(e.target).closest('.az-navbar .nav-item').length;
      if(!navTarg) {
        $('.az-navbar .show').removeClass('show');
      }

      // Header Menu
      var menuTarg = $(e.target).closest('.az-header-menu .nav-item').length;
      if(!menuTarg) {
        $('.az-header-menu .show').removeClass('show');
      }

      if($(e.target).hasClass('az-menu-sub-mega')) {
        $('.az-header-menu .show').removeClass('show');
      }

    } else {

      //
      if(!$(e.target).closest('#azMenuShow').length) {
        var hm = $(e.target).closest('.az-header-menu').length;
        if(!hm) {
          $('body').removeClass('az-header-menu-show');
        }
      }
    }

  });

  $('#azMenuShow').on('click', function(e){
    e.preventDefault();
    $('body').toggleClass('az-header-menu-show');
  })

  $('.az-header-menu .with-sub').on('click', function(e){
    e.preventDefault();
    $(this).parent().toggleClass('show');
    $(this).parent().siblings().removeClass('show');
  })

  $('.az-header-menu-header .close').on('click', function(e){
    e.preventDefault();
    $('body').removeClass('az-header-menu-show');
  })

});
