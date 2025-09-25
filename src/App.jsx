import { useState } from "react";
import { Header, Footer } from "./components";
import { View1, View4 } from "./views";
import { useStorage } from "./hooks";
import Notify from "simple-notify";
import "simple-notify/dist/simple-notify.css";

// https://cloud.mail.us.cibc.com/lhgv5cclgv0 - PROD
// https://mcjz3r7pm1pl-6z7sb0jcxy1k0y4.pub.sfmc-content.com/lhgv5cclgv0 - DEV

export default function App() {
    const [view, setView] = useState("view1");
    const [sending, setSending] = useState(false);
    const [store, getStored] = useStorage("answers");

    async function send() {
        const source = document.querySelector("#Source");
        store("Source", source.value);

        setSending(true);
        const answers = getStored();
        console.log(answers);

        const response = await fetch("https://cloud.mail.us.cibc.com/lhgv5cclgv0", {
            method: "POST",
            body: JSON.stringify(answers),
        });
        const json = await response.json();

        if (json && json.status === 200) {
            localStorage.clear();
            setView("view4");

            if (window.lintrk) {
                window.lintrk("track", { conversion_id: 21615740 });
                console.log("LinkedIn conversion tracked");
            } else {
                console.warn("LinkedIn tracking not loaded");
            }
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
