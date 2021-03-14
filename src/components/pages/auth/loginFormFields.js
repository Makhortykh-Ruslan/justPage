export const fields = {
    loginOrEmail:{
        classNameLabel: 'authLabel',
        type: 'text',
        placeholder: 'email',
        cName: 'form-control',
        name: 'loginOrEmail',
        label: "email",
        text: 'email',
        required: true
    },
    password: {
        classNameLabel: 'authLabel',
        type: 'password',
        placeholder: 'Пароль',
        cName: 'form-control',
        name: 'password',
        label: 'Пароль',
        text: 'Пароль',
        minLength: 7,
        maxLength: 30,
        required: true
    },
    submit: {
        type: 'submit',
        value: 'Войти',
        name: 'submit',
        cName: 'submit-btn'
    }
}
