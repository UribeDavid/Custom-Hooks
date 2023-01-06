import { useState } from "react";

export const useForm = ( initialForm = {} ) => {

    const [formState, setFormState] = useState(initialForm);

    const handleInputChange = ({target}) => {
        const { name, value } = target;
        setFormState({
            ...formState, 
            [name]: value 
        });
    };

    const handleResetForm = () => {
        const formStateKeys = Object.keys(formState);
        const formStateReseted = formStateKeys.reduce((acc, cur) => {
            acc[cur]= '';
            return acc;
        }, {})
        setFormState(formStateReseted);
    }

    return {
        ...formState,
        formState,
        handleInputChange,
        handleResetForm
    };
}