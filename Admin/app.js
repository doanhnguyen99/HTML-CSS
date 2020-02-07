// $(document).ready(function() {
//     $.datetimepicker.setLocale('pt-BR');
//    $('#datetimepicker').datetimepicker();
// });

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