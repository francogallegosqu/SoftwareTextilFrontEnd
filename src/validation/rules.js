import { extend } from 'vee-validate'
import {
    required,
    email,
    length,
    max,
    min,
    min_value
} from 'vee-validate/dist/rules';

extend('secret', {
    validate: value => value === 'example',
    message: 'This is not the magic word'
})
extend('length', {
    ...length,
    message: 'is length'
})
extend('min_value', {
    ...min_value,
    message: 'is min'
})
extend('min', {
    ...min,
    message: 'is min'
})
extend('max', {
    ...max,
    message: 'is max'
})
extend('required', {
    ...required,
    message: 'Este campo es requerido'
})
extend('email', {
    ...email,
    message: 'Debe ser un email válido'

})

extend('mobile', {
    validate: value => value.length == 9,
    message: 'Debe ser un número válido'
})

extend('validate-amount', {
    validate: value => value > 0,
    message: "The amount must be greater than 0.00"
})
extend('array', {
    validate: value => value.length > 0,
    message: "This field is required"
})
extend('boolean', {
    validate: value => value == true,
    message: ""
})
