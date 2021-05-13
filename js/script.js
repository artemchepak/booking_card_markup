let monthPicker = {
    "January": "Января",
    "February": "Февраля",
    "March": "Марта",
    "April": "Апреля",
    "May": "Мая",
    "June": "Июня",
    "July": "Июля",
    "august": "Августа",
    "September": "Сентября",
    "October": "Октября",
    "November": "Ноября",
    "December": "Декабря"
}

$(function() {
    // date picker
    $('.separator').on('click', function() {
        return false;
    });
    $('.form__dates').dateRangePicker({
        format: 'D MMMM',
        language: 'ru',
        separator: ' . ',
        getValue: function() {
            if ($('.form__start-date').val() && $('.form__end-date').val())
                return $('.form__start-date').val() + ' . ' + $('.form__end-date').val();
            else
                return '';
        },
        setValue: function(s, s1, s2) {
            $('.form__start-date').val(s1.slice(0, s1.indexOf(' ')) + ' ' + monthPicker[s1.slice((s1.length - s1.indexOf(' ') - 1) * -1)]);
            $('.form__end-date').val(s2.slice(0, s2.indexOf(' ')) + ' ' + monthPicker[s2.slice((s2.length - s2.indexOf(' ') - 1) * -1)]);
        }
    });

    // input type number btn
    $('.form__persons-up, .form__persons-down').on('click', function(e) {
        const isNegative = $(e.target).closest('.form__persons-down').is('.form__persons-down');
        const input = $(e.target).closest('.form__item-box').find('input');
        if (input.is('input')) {
            input[0][isNegative ? 'stepDown' : 'stepUp']()
        }
        // $(e.target).closest('.form__item-box').find('input').val(5);
    })
})