import { useState } from "react";
import { Header, Footer } from "./components";
import { View1, View4 } from "./views";
import { useStorage } from "./hooks";
import Notify from "simple-notify";
import "simple-notify/dist/simple-notify.css";

export default function App() {
    const [view, setView] = useState("view1");
    const [sending, setSending] = useState(false);
    const [store, getStored] = useStorage("answers");
    const [error, setError] = useState(false);

    async function send() {
        store("EmailAddress", "%%=v(@EmailAddress)=%%");
        const answers = getStored();
        const values = Object.values(answers).slice(0, -2);

        if (values.every((value) => value === false)) {
            setError("Please select at least one financial focus before submitting.");
        } else {
            setSending(true);
            console.log(answers);

            const response = await fetch("https://mcjz3r7pm1pl-6z7sb0jcxy1k0y4.pub.sfmc-content.com/bvqqcpeszew", {
                method: "POST",
                body: JSON.stringify(answers),
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
    }

    function displayView() {
        if (view === "view1") return <View1 handleNext={send} sending={sending} error={error} setError={setError} />;
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
