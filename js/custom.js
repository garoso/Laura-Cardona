/*!
 * Item: Kitzu
 * Description: Personal Portfolio Template
 * Author/Developer: Exill
 * Author/Developer URL: https://themeforest.net/user/exill
 * Version: v2.0.0
 * License: Themeforest Standard Licenses: https://themeforest.net/licenses
 */

/*----------- CUSTOM JS SCRIPTS -----------*/
var toggleText       = $('#toggleText');
var toggleButton = $('#toggleButton');
toggleText.hide();
toggleButton.on('click', function(){
    toggleText.toggle();
    toggleText.is(":visible") ? $(this).html('ver menos') : $(this).html('ver más');
});
