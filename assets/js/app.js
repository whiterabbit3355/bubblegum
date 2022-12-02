/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("console.log('file 1');\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/burger.js":
/*!*********************************!*\
  !*** ./src/assets/js/burger.js ***!
  \*********************************/
/***/ (function() {

eval("let navToggle = $('#navToggle');\nlet navMenu = $('#navmenu');\n// let langMenu2 = $('#langmenu2');\n// let headerPhone = $('#headerphone');\n// let headerSocial = $('#headersocial');\n\nnavToggle.on('click', function(event){\n    event.preventDefault();\n\n    // $('body').toggleClass('no-scroll');\n    navMenu.toggleClass('active');\n   \n    $(this).toggleClass('active');\n   // console.log('burger mobile');\n});\n\n$(window).on(\"resize, scroll\", function(){\n    navToggle.removeClass('active');\n    navMenu.removeClass('active');\n})\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/burger.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/***/ (function() {

eval("console.log('file 2');\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/file2.js?");

/***/ }),

/***/ "./src/assets/js/katalog-filter.js":
/*!*****************************************!*\
  !*** ./src/assets/js/katalog-filter.js ***!
  \*****************************************/
/***/ (function() {

eval("/* -------------- KATALOG FILTER ------------- */\nconst filterContainer = document.querySelector('.katalog__filter'),\nkatalogItemsContainer = document.querySelector('.katalog__items'),\nkatalogItems = document.querySelectorAll('.katalog__item');\n\n//console.log(katalogItems);\n\nfilterContainer.addEventListener('click', (e)=>{\n    if(e.target.classList.contains('katalog__filter-item') && !e.target.classList.contains('active')){\n        filterContainer.querySelector('.active').classList.remove('active');\n        e.target.classList.add('active');\n\n        const target = e.target.getAttribute('data-target');\n\n        katalogItems.forEach((item) => {\n            if(item.getAttribute('data-category').includes(target) || (target === 'all')){\n                item.classList.remove('hide');\n                item.classList.add('show');\n            } else{\n                item.classList.remove('show');\n                item.classList.add('hide');\n            }\n        })\n    }\n});\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/katalog-filter.js?");

/***/ }),

/***/ "./src/assets/js/mask.js":
/*!*******************************!*\
  !*** ./src/assets/js/mask.js ***!
  \*******************************/
/***/ (function() {

eval("$(document).ready(function(){\n    /************* 1  ***********/\n      //email mask\n      $('input[type=\"email\"]').inputmask({\n        mask: \"*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]\",\n        greedy: false,\n        onBeforePaste: function (pastedValue, opts) {\n          pastedValue = pastedValue.toLowerCase();\n          return pastedValue.replace(\"mailto:\", \"\");\n        },\n        definitions: {\n          '*': {\n            validator: \"[0-9A-Za-z!#$%&'*+/=?^_`{|}~\\-]\",\n            casing: \"lower\"\n          }\n        }\n      });\n    /************* 2  ***********/\n        // $('input[type=\"email\"]').inputmask({\n        //     regex: \"^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]+$\"\n        // });\n    /************* 3  ***********/\n    //$('input[type=\"email\"]').inputmask({\"mask\": \"[a-zA-Z0-9._%-]+@[a-zA-Z0-9-]+\\.[a-zA-Z]{2,4}\"});\n    $('input[type=\"tel\"]').inputmask({\"mask\": \"+7 (999) 999-9999\"}); //specifying options\n\n\n\n/////////////////////////////////////////////////////////////////////////////\n// ***********  Email validation   *************//\n/////////////////////////////////////////////////////////////////////\nfunction validation() {\n    var form = document.getElementById('form');\n    var email_1 = document.getElementById('email').value;\n    var text = document.getElementById('text3');\n    var pattern = /^[^ ]+@[^ ]+\\.[a-z]{2,3}$/;\n\n    if (email_1.match(pattern)) {\n        form.classList.add('valid');\n        form.classList.remove('invalid');\n        text.innerHTML = 'Ваш e-mail верный';\n        text.style.color = 'green';\n    } else {\n        form.classList.remove('valid');\n        form.classList.add('invalid');\n        text.innerHTML = 'Введите пожалуйста правильный e-mail';\n        text.style.color = '#800009';\n    }\n\n    if (email_1 == \"\") {\n        form.classList.remove('valid');\n        form.classList.remove('invalid');\n        text.innerHTML = '&nbsp;';\n        text.style.color = 'transparent';\n    }\n}\n\nform.onkeyup = function() {\n  // console.log(email.value);\n    validation();\n};\n\n\n});\n\n\n\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/mask.js?");

/***/ }),

/***/ "./src/assets/js/owl.js":
/*!******************************!*\
  !*** ./src/assets/js/owl.js ***!
  \******************************/
/***/ (function() {

eval("const owl1 = $('.slider1');\n\nowl1.owlCarousel({\n    center:true,\n    loop:true,\n    margin:100,\n    animateOut: 'fadeOut',\n    dots: true,\n    autoplay:true,\n    autoplayTimeout:5000,\n    startPosition:1,\n    items: 1,\n});\n\n// Go to the previous item\n$('.slider__btn--prev').click(function() {\n    // With optional speed parameter\n    // Parameters has to be in square bracket '[]'\n    owl1.trigger('prev.owl.carousel', [300]);\n})\n// Go to the next item\n$('.slider__btn--next').click(function() {\n    owl1.trigger('next.owl.carousel');\n});\n\nowl1.on('changed.owl.carousel', function(event) {\n     $('.header__intro-price').text($('.owl-item.active .header__slider-item').attr(\"price\"));\n    //console.log('owl 1 was changed');\n})\n\n\n// SLIDER FOR kataLOG\n\n// const owl2 = $('.slider2');\n\n// owl2.owlCarousel({\n//     center:true,\n//     loop:true,\n//     margin:100,\n//     animateOut: 'fadeOut',\n//     dots: true,\n//     autoplay:true,\n//     autoplayTimeout:5000,\n//     startPosition:1,\n//     items: 3,\n// });\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/owl.js?");

/***/ }),

/***/ "./src/assets/js/photogallery.js":
/*!***************************************!*\
  !*** ./src/assets/js/photogallery.js ***!
  \***************************************/
/***/ (function() {

eval("// ****** LightBox\nconst closeLightBox = document.querySelector('.close-lightbox');\nconst lightBox = document.querySelector('.lightbox');\nconst lightBoxImage = lightBox.querySelector('img');\n\nlightBox.addEventListener('click', function() {\n    if (event.target != lightBoxImage) {\n        console.log('close');\n        lightBox.classList.remove('show');\n        lightBox.classList.add('hide');\n    } else {\n        console.log('not close');\n        // lightBox.classList.remove('hide');\n        //  lightBox.classList.add('show');\n    }\n})\n\ncloseLightBox.addEventListener('click', function() {\n    lightBox.classList.remove('show');\n    lightBox.classList.add('hide');\n\n})\nconst gallary = document.querySelector('.portfolio-gallary');\nconst gallaryItem = gallary.querySelectorAll('.portfolio__item');\n// console.log(gallaryItem);\n\ngallaryItem.forEach(function(element) {\n    element.querySelector('.div').addEventListener('click', function() {\n        lightBox.classList.remove('hide');\n        lightBox.classList.add('show');\n        lightBoxImage.src = element.querySelector('img').getAttribute('src');\n        // console.log(element.querySelector('img').getAttribute('src'));\n    })\n})\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/photogallery.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	__webpack_modules__["./src/assets/js/burger.js"]();
/******/ 	__webpack_modules__["./src/assets/js/file2.js"]();
/******/ 	__webpack_modules__["./src/assets/js/katalog-filter.js"]();
/******/ 	__webpack_modules__["./src/assets/js/mask.js"]();
/******/ 	__webpack_modules__["./src/assets/js/owl.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/photogallery.js"]();
/******/ 	
/******/ })()
;