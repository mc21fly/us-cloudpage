import { FieldCheckbox, FieldCheckboxText } from "../components";
import { useValidation } from "../hooks";

export default function View1({ handleNext, sending, error, setError }) {
    const [validate, Validator] = useValidation();

    return (
        <>
            <div className="container">
                <section className="heading padding" style={{ paddingBottom: 10 }}>
                    <div className="left">
                        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                    </div>
                    <div className="right">
                        <p className="small">At, suscipit cupiditate. Molestiae debitis recusandae excepturi doloremque omnis ex rerum&nbsp;tempore.</p>
                    </div>
                </section>
            </div>
            <div className="container">
                <section className="form padding">
                    <div className="form__header">
                        <div className="left">
                            <span className="small">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi illo iusto fugit&nbsp;illum.</span>
                        </div>
                        <div className="right" style={{ paddingTop: 10 }}>
                            <p className="small">Culpa amet laudantium quam debitis dolor tempore molestiae possimus enim sint magni quod&nbsp;qui?</p>
                        </div>
                    </div>
                    <div className="form__fields">
                        <div className="form__fields--row bold" style={{ marginBottom: 30, fontSize: 18 }}>
                            What’s your main financial focus right now? Select all that apply — you can choose more than one&nbsp;option.
                        </div>
                        {error ? (
                            <div className="form__fields--row bold" style={{ marginBottom: 30, fontSize: 18, color: "red" }}>
                                {error}
                            </div>
                        ) : null}
                    </div>
                    <div className="form__fields" style={{ padding: "0px 0px" }}>
                        <div className="form__fields--row">
                            <FieldCheckbox id="a1" label="Paying down debt faster" validator={Validator} setError={setError} />
                        </div>
                        <div className="form__fields--row">
                            <FieldCheckbox id="a2" label="Building an emergency fund" validator={Validator} setError={setError} />
                        </div>
                        <div className="form__fields--row">
                            <FieldCheckbox id="a3" label="Building credit" validator={Validator} setError={setError} />
                        </div>
                        <div className="form__fields--row">
                            <FieldCheckbox id="a4" label="Saving for a child’s education" validator={Validator} setError={setError} />
                        </div>
                        <div className="form__fields--row">
                            <FieldCheckbox id="a5" label="Saving for retirement" validator={Validator} setError={setError} />
                        </div>
                        <div className="form__fields--row">
                            <FieldCheckbox id="a6" label="Buying a home" validator={Validator} setError={setError} />
                        </div>
                        <div className="form__fields--row">
                            <FieldCheckbox id="a7" label="Growing investments" validator={Validator} setError={setError} />
                        </div>
                        <div className="form__fields--row">
                            <FieldCheckbox id="a8" label="Access to additional cash flow" validator={Validator} setError={setError} />
                        </div>
                        <div className="form__fields--row">
                            <FieldCheckboxText id="a9" label="Other" validator={Validator} setError={setError} />
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
