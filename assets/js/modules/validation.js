import validate from 'jquery-validation';

const ELEMENTS_SELECTOR = {
    form: '[data-form]',
    btn: '[data-form-btn]',
    select: '[data-form-select]'
};

export default function () {

    $(document).on('click', ELEMENTS_SELECTOR.btn, function() {
        $(ELEMENTS_SELECTOR.select).on("select2:close", function() {
            $(this).valid();
        })
    })

    $('form[data-form]').validate({
        rules: {
            firstName: {
                required: true
            },
            secondName: {
                required: true
            },
            patronymic: {
                required: true
            },
            number: {
                required: true
            },
            select: {
                required: true,
            },
            email: {
                email: true,
                required: true
            },
            modalSelect: {
                required: true
            },
            topic: {
                required: true
            },
            modalEmail: {
                email: true,
                required: true
            }
        },
        messages: {
            firstName: {
                required: "Это поле обязательно для заполнения"
            },
            secondName: {
                required: "Это поле обязательно для заполнения"
            },
            patronymic: {
                required: "Это поле обязательно для заполнения"
            },
            number: {
                required: "Это поле обязательно для заполнения"
            },
            select: {
                required: "Это поле обязательно для заполнения"
            },
            email: {
                required: "Это поле обязательно для заполнения",
                email: "E-mail указан неверно"
            },
            modalSelect: {
                required: "Нужно обязательно выбрать тип обращения"
            },
            topic: {
                required: "Это поле обязательно для заполнения"
            },
            modalEmail: {
                required: "Это поле обязательно для заполнения",
                email: "E-mail указан неверно"
            }
        },

        errorPlacement: function(error, element) {
            if ((element).hasClass('select__control')) {
                error.insertAfter($(element).next());
            } else {
                error.insertAfter(element)
            }
        }
    });
}