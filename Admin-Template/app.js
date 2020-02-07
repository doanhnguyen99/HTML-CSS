function myFunction()
{
    $.confirm({
        title: 'Xóa!',
        content: 'Bạn có chắc chắn không?',
        buttons: {
            Yes: function () {
                $.alert('OK!');
            },
            No: function () {

            }

        }
    });
}


$(document).ready(function(){
    $('.modal').modal();
});