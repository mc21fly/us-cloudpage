import { FieldText, FieldSelect, FieldEmail, FieldRadio } from "../components";
import { useValidation } from "../hooks";

export default function View1({ handleNext, sending }) {
    const [validate, Validator] = useValidation();

    return (
        <>
            <div className="container">
                <section className="heading padding" style={{ paddingBottom: 10 }}>
                    <div className="left">
                        <h1>Reach even the most ambitious possibilities</h1>
                    </div>
                    <div className="right">
                        <p className="small">
                            Get a one-year term loan or revolving line of credit up to $100,000 with no origination fee to <br className="mbl-hide" />
                            fuel your business ambitions.
                        </p>
                    </div>
                </section>
            </div>
            <div className="container">
                <section className="form padding">
                    <div className="form__header">
                        <div className="left">
                            <span className="small">Interested in learning more? Request a follow-up – we’re here to help.</span>
                        </div>
                        <div className="right" style={{ paddingTop: 10 }}>
                            <p className="small">Get started by answering a few questions so we can reach out to you within two business days.</p>
                        </div>
                    </div>
                    <div className="form__fields">
                        <div className="form__fields--row">
                            <FieldText id="FirstName" label="First name" validator={Validator} />
                            <FieldText id="LastName" label="Last name" validator={Validator} />
                        </div>
                        <div className="form__fields--row">
                            <FieldEmail id="EmailAddress" label="Email address:" validator={Validator} />
                            <FieldText id="Phone" label="Phone number" validator={Validator} regEx={/^(\+1\s?)?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/g} />
                        </div>
                        <div className="form__fields--row">
                            <FieldText id="Address" label="Address" validator={Validator} regEx={/^.*$/g} />
                            <FieldSelect
                                id="State"
                                label="State"
                                options={[
                                    "AL",
                                    "AK",
                                    "AZ",
                                    "AR",
                                    "CA",
                                    "CO",
                                    "CT",
                                    "DE",
                                    "FL",
                                    "GA",
                                    "HI",
                                    "ID",
                                    "IL",
                                    "IN",
                                    "IA",
                                    "KS",
                                    "KY",
                                    "LA",
                                    "ME",
                                    "MD",
                                    "MA",
                                    "MI",
                                    "MN",
                                    "MS",
                                    "MO",
                                    "MT",
                                    "NE",
                                    "NV",
                                    "NH",
                                    "NJ",
                                    "NM",
                                    "NY",
                                    "NC",
                                    "ND",
                                    "OH",
                                    "OK",
                                    "OR",
                                    "PA",
                                    "RI",
                                    "SC",
                                    "SD",
                                    "TN",
                                    "TX",
                                    "UT",
                                    "VT",
                                    "VA",
                                    "WA",
                                    "WV",
                                    "WI",
                                    "WY",
                                ]}
                                validator={Validator}
                            />
                        </div>
                        <div className="form__fields--row">
                            <FieldText id="Zip" label="Zip code" validator={Validator} regEx={/(^\d{5}$)|(^\d{5}-\d{4}$)/} />
                        </div>
                        <div className="form__fields--row">
                            <div className="field">
                                <div className="field">
                                    <label className="small bold">I am currently a CIBC client</label>
                                </div>
                                <FieldRadio id="isClient" options={["Yes", "No"]} validator={Validator} />
                                <input type="hidden" id="Source" name="Source" value="%%=v(@source)=%%" />
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
