import dictionary from "../../fields.json";

export default function translate(answers) {
    const translated = {};

    for (const property in answers) {
        const t_name = dictionary[property];

        if (property === "q6pw") {
            const json = JSON.parse(answers["q6pw"]);

            translated[t_name] = json.join(", ");
        } else {
            translated[t_name] = answers[property];
        }
    }

    console.log(translated);
    return translated;
}
