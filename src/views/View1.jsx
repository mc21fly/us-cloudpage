import { FieldText, FieldSelect, FieldEmail, FieldRadio } from "../components";
import { useValidation } from "../hooks";

export default function View1({ handleNext, sending }) {
    const [validate, Validator] = useValidation();

    return (
        <>
            <div className="container">
                <section className="heading padding">
                    <div className="left">
                        <h1>Expertise focused on your&nbsp;goals</h1>
                    </div>
                    <div className="right">
                        <p>
                            With expertise that spans commercial, wealth management, innovation banking, personal and cross-border banking, we can help you take action on
                            your&nbsp;ambitions.
                        </p>
                    </div>
                </section>
            </div>
            <div className="container">
                <section className="form padding">
                    <div className="form__header">
                        <span className="form__header--text">
                            <span>Start the conversation</span>
                        </span>
                    </div>
                    <div className="form__fields">
                        <div className="form__fields--row">
                            <FieldText id="q1" label="First name" validator={Validator} />
                            <FieldText id="q2" label="Last name" validator={Validator} />
                        </div>
                        <div className="form__fields--row">
                            <FieldEmail id="q3" label="Email address:" validator={Validator} />
                            <FieldText id="q4" label="Phone number" validator={Validator} regEx={/^(\+1\s?)?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/g} />
                        </div>
                        <div className="form__fields--row">
                            <FieldText id="q5" label="Zip code" validator={Validator} regEx={/(^\d{5}$)|(^\d{5}-\d{4}$)/} />
                            <FieldSelect
                                id="q6"
                                label="Area of interest"
                                options={["Innovation Banking", "Commerical Banking", "Investment Banking", "Private Wealth", "Agility or Personal Banking", "Private Banking"]}
                                validator={Validator}
                            />
                        </div>
                        <div className="form__fields--row">
                            <div className="field">
                                <div className="field">
                                    <label className="small bold">I am currently a CIBC client</label>
                                </div>
                                <FieldRadio id="q7" options={["Yes", "No"]} validator={Validator} />
                                <input type="hidden" id="q8" name="q8" value="%%=v(@source)=%%" />
                            </div>
                            <div className="field"></div>
                        </div>
                    </div>
                    <div className="form__footer">
                        <button className={`button button--next ${sending ? "svg-spinners--ring-resize" : ""}`} onClick={() => validate(handleNext)} disabled={sending}>
                            {sending ? "Sending " : "Submit"}
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
}
