import React from 'react'
import { useFormContext, FieldValues } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import { FieldProps } from './Form';

export default function TextInput<T extends FieldValues = FieldValues>({ name, description, label, rules, ...rest }: FieldProps<T>) {
    const { errors, register } = useFormContext<T>();
    const hasError = errors[name] != null;

    return (
        <div className="flex flex-col pb-8 max-w-lg">
            <label htmlFor={name} className={`${description ? 'pb-1' : 'pb-2'} font-semibold text-gray-800`}>{label}</label>
            {description && (
                <p className="mb-4 text-sm text-gray-700">{description}</p>
            )}
            <input name={name} ref={register(rules || undefined)} className={` max-w-md py-1 px-2 h-10 border-2 border-solid ${hasError ? 'border-red-500' : 'border-gray-400'} focus:border-blue-400 rounded leading-4 transition duration-200 ease-in-out`} />
            <ErrorMessage name={name} render={({ message }) => (
                <p className="mt-1 mb-2 text-sm text-red-600">{message}</p>
            )} />
        </div>
    );
}
