import { useEffect, useState } from "react";

const Terminal = () => {
    const [text, setText] = useState("");
    const [cursor, setCursor] = useState(true);
    const terminalText = [
        "Olá, eu sou o [Seu Nome]!",
        "Aqui estão alguns dos meus projetos:",
        "1. Projeto A",
        "2. Projeto B",
        "3. Projeto C",
        "Minha stack: React, Node.js, Python, SQL...",
    ];

    useEffect(() => {
        let currentTextIndex = 0;
        let currentCharIndex = 0;
        let isDeleting = false;

        const type = () => {
            if (currentTextIndex < terminalText.length) {
                if (!isDeleting && currentCharIndex < terminalText[currentTextIndex].length) {
                    setText(prevText => prevText + terminalText[currentTextIndex][currentCharIndex]);
                    currentCharIndex++;
                } else if (isDeleting && currentCharIndex > 0) {
                    setText(prevText => prevText.slice(0, -1));
                    currentCharIndex--;
                } else {
                    isDeleting = !isDeleting;
                    if (!isDeleting) {
                        currentTextIndex++;
                    }
                }
            }

            setCursor(prevCursor => !prevCursor); // piscando o cursor

            setTimeout(type, isDeleting ? 50 : 100); // tempo de digitação
        };

        type();
    }, []);

    return (
        <div className="terminal">
            <pre>{text}</pre>
            <span className="cursor">{cursor ? "|" : " "}</span>
        </div>
    );
};

export default Terminal;
