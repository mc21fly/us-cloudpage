import { useEffect, useRef } from "react";
import { useStorage } from "../../hooks";

export default function FieldCheckbox({ id, label, validator, setError }) {
    const input = useRef();
    const [store, getStored] = useStorage("answers");

    useEffect(() => {
        const storedAnswer = getStored(id);
        storedAnswer ? (input.current.checked = storedAnswer) : store(id, false);

        if (validator) validator.addValidation(id, validate);

        return () => {
            if (validator) validator.removeValidation(id);
        };
    }, []);

    function handleChange({ target }) {
        store(id, target.checked);
        setError(false);
    }

    function validate() {
        return true;
    }

    return (
        <div className="field__checkbox">
            <input type="checkbox" ref={input} name={id} id={id} onChange={handleChange} />
            <label htmlFor={id}>{label ? label : "Label placeholder"}</label>
        </div>
    );
}
