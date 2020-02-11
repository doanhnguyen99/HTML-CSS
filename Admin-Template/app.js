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

// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.datepicker');
//     var instances = M.Datepicker.init(elems, options);
//   });
