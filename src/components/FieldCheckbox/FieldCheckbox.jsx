import { useEffect, useRef } from "react";
import { useStorage } from "../../hooks";

export default function FieldCheckbox({ id, label, options, validator }) {
    const input = useRef();
    const [store, getStored] = useStorage("answers");

    useEffect(() => {
        const storedAnswer = getStored(id) ? JSON.parse(getStored(id)) : undefined;
        storedAnswer ? setValues(storedAnswer) : store(id, JSON.stringify([]));

        if (validator) validator.addValidation(id, validate);

        return () => {
            if (validator) validator.removeValidation(id);
        };
    }, []);

    function setValues(values) {
        for (const value of values) {
            const el = document.querySelector(`input[value="${value}"`);

            el.checked = true;
        }
    }

    function handleChange({ target }) {
        store(id, target.value);
    }

    function handleOptionsChange({ target }) {
        const stored = JSON.parse(getStored(id));

        if (!stored.includes(target.value)) {
            stored.push(target.value);
            store(id, JSON.stringify(stored));
        } else {
            const i = stored.indexOf(target.value);
            stored.splice(i, 1);
            store(id, JSON.stringify(stored));
        }
    }

    function validate() {
        return true;
    }

    return options ? (
        options.map((option, index) => {
            return (
                <div key={index} className="field__checkbox">
                    <input type="checkbox" ref={input} name={id} id={id} onChange={handleOptionsChange} defaultValue={option} />
                    <label htmlFor={id}>{option ? option : "Label placeholder"}</label>
                </div>
            );
        })
    ) : (
        <div className="field__checkbox">
            <input type="checkbox" ref={input} name={id} id={id} onChange={handleChange} />
            <label htmlFor={id}>{label ? label : "Label placeholder"}</label>
        </div>
    );
}
