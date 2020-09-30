import React from 'react'
import { useForm, FieldValues, FormProvider, UseFormOptions, ValidationRules, SubmitHandler } from 'react-hook-form';
import { FieldName } from '@hookform/error-message/dist/types';

import Button from '../Button';
import TextInput from './TextInput';
import NumberInput from './NumberInput';
import Textarea from './Textarea';

type FormProps<T> = {
    params: FormValuesWithRules<T>;
    defaultValues: UseFormOptions<T>["defaultValues"];
    onSubmit: SubmitHandler<T>;
}

export type FieldProps<T extends FieldValues> = {
    name: FieldName<T>;
    label: string;
    description?: string;
    rules?: ValidationRules;
}

type FormParam<T> = FieldProps<T> & {
    type: 'text' | 'number' | 'textarea' | 'checkbox';
};

// export type FormValuesWithRules<T> = {
//     [P in keyof T]: FormParam & {
//         default?: T[P];
//     };
// }

export type FormValuesWithRules<T> = FormParam<T>[];

// export function getDefaultsFromParams<T>(props: FormValuesWithRules<T>): Partial<T> {
//     return Object.keys(props).reduce((acc, cur) => {
//         acc[cur] = props[cur].default ? props[cur].default : undefined;
//         return acc;
//     }, {});
// }

export default function Form<T extends FieldValues>({ defaultValues, params, onSubmit }: FormProps<T>) {
    const methods = useForm<T>({
        mode: 'onSubmit',
        reValidateMode: 'onBlur',
        defaultValues,
    })

    function getParamMarkup(param: FormParam<T>) {
        const key = param.name;

        switch (param.type) {
            case 'text': return <TextInput key={key} {...param} />
            case 'number': return <NumberInput key={key} {...param} />
            case 'textarea': return <Textarea key={key} {...param} />
        }
    };

    return (   
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit<T>(onSubmit)}>
                {params.map(getParamMarkup)}
                <Button type="submit" variant="primary">Create</Button>
            </form>
        </FormProvider>
    )
}
