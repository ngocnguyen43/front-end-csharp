import { useState } from 'react';
interface IFormProps<T> {
    data?: T;
    setShowModal: (value: boolean) => void;
    onSubmit: (data: T) => void;
    ignoredFields?: string[];
    includeIgnoredFields?: boolean;
    button: string;
    inactive: boolean
}

export const Form = <T extends Record<string, any>>({
    data = {} as T,
    setShowModal,
    onSubmit,
    ignoredFields = [],
    includeIgnoredFields = false,
    button,
    inactive = false,
}: IFormProps<T>) => {
    const [formData, setFormData] = useState<T>(data);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const filteredData = includeIgnoredFields
            ? formData
            : Object.fromEntries(Object.entries(formData).filter(([key]) => !ignoredFields.includes(key)));
        onSubmit(filteredData as T);
        setShowModal(false);
    }

    const fields = Object.keys(data);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const formFields = fields
        .filter(
            (fieldName) =>
                includeIgnoredFields && !ignoredFields.includes(fieldName)
        )
        .map((field) => (
            <div key={field} className='w-full'>
                <label htmlFor={field} className='block text-left text-[16px]'>{field}</label>
                <input disabled={inactive} className='w-full text-sm leading-8 bg-gray-300 rounded-md' type="text" id={field} name={field} value={formData[field as keyof T] ?? ''} placeholder={field} onChange={handleChange} />
            </div>
        ));
    return (
        <>
            <div className='w-full h-full' >
                <form onSubmit={handleSubmit}>
                    {formFields}
                    <div className='flex items-start justify-center'>
                        <button className='mt-8 w-full text-white bg-blue-500 text-xs self-center '>{button}</button>
                    </div>
                </form>
            </div>
        </>
    );
};