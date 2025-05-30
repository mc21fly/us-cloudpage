import { useState } from "react";
import { Header, Footer } from "./components";
import { View1, View4 } from "./views";
import { useStorage } from "./hooks";
import translate from "./helpers/translate";
import Notify from "simple-notify";
import "simple-notify/dist/simple-notify.css";

export default function App() {
    const [view, setView] = useState("view1");
    const [sending, setSending] = useState(false);
    const [store, getStored] = useStorage("answers");

    async function send() {
        const source = document.querySelector("#q8");
        store("q8", source.value);
        store("q9", "Commercial");

        setSending(true);
        const answers = getStored();
        const translated = translate(answers);

        const response = await fetch("https://cloud.mail.us.cibc.com/r554jumgch2", {
            method: "POST",
            body: JSON.stringify(translated),
        });
        const json = await response.json();

        if (json && json.status === 200) {
            localStorage.clear();
            setView("view4");
        }

        if (json && json.status === 400) {
            new Notify({
                status: "error",
                title: "Something went wrong",
                text: "Please fill out all required fields",
                effect: "fade",
                speed: 300,
                customClass: "",
                customIcon: "",
                showIcon: true,
                showCloseButton: true,
                autoclose: true,
                autotimeout: 5000,
                notificationsGap: null,
                notificationsPadding: null,
                type: "outline",
                position: "right bottom",
                customWrapper: "",
            });
        }

        setSending(false);
    }

    function displayView() {
        if (view === "view1") return <View1 handleNext={send} sending={sending} />;
        else return <View4 />;
    }

    return (
        <>
            <Header />
            {displayView()}
            <Footer />
        </>
    );
}
