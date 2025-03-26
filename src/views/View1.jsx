import { FieldText, FieldSelect, FieldEmail, FieldRadio } from "../components";
import { useValidation } from "../hooks";

export default function View1({ handleNext, sending }) {
    const [validate, Validator] = useValidation();

    return (
        <>
            <div className="container">
                <section className="heading padding">
                    <div className="left">
                        <h1>Wealth management that powers your purpose</h1>
                    </div>
                    <div className="right">
                        <p>
                            Affluent individuals and families turn to CIBC Private Wealth for a long-term, trusted partner that can serve all of their investment, trust and private
                            banking&nbsp;needs.
                        </p>
                    </div>
                </section>
            </div>
            <div className="container">
                <section className="form padding">
                    <div className="form__header">
                        <hr />
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
                                options={["Wealth strategies", "Private banking", "Investment management", "Family office", "Trustee services"]}
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
