import { useLayoutEffect, useEffect, useState } from "react";
import { useStorage } from "../../hooks";

export default function FieldRadio({ id, options, validator }) {
    const [store, getStored] = useStorage("answers");
    const [checked, setChecked] = useState();

    useLayoutEffect(() => {
        const storedAnswer = getStored(id);
        storedAnswer ? setChecked(storedAnswer) : store(id, "");
    }, []);

    useEffect(() => {
        if (validator) validator.addValidation(id, validate);

        return () => {
            if (validator) validator.removeValidation(id);
        };
    }, []);

    function handleClick({ target }) {
        const radios = document.querySelectorAll(`[name*="${id}"]`);
        Array.from(radios).forEach((radio) => {
            radio.style.border = "1px solid #383b3e";
        });

        store(id, target.value);
        setChecked(target.value);
    }

    function validate() {
        const radios = document.querySelectorAll(`[name*="${id}"]`);
        const flags = Array.from(radios).map((radio) => {
            return radio.checked;
        });

        if (flags.every((flag) => flag === false)) {
            Array.from(radios).forEach((radio) => {
                radio.style.border = "1px solid red";
            });
            return false;
        }
        return true;
    }

    return options
        ? options.map((option, index) => {
              return (
                  <div key={index} className="field__radio">
                      <input type="radio" name={id} id={`${id}_${index}`} onClick={handleClick} value={option} checked={option === checked ? true : false} readOnly />
                      <label htmlFor={`${id}_${index}`}>{option}</label>
                  </div>
              );
          })
        : null;
}
