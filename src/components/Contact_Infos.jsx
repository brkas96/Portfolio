import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Github, Linkedin, Clipboard, Check, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
    const form = useRef();
    const [copied, setCopied] = useState(false);
    const [sent, setSent] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("brkas_dev@proton.me");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, "YOUR_PUBLIC_KEY")
            .then(() => {
                setSent(true);
                form.current.reset();
                setTimeout(() => setSent(false), 3000);
            })
            .catch((err) => console.error(err));
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="h-screen flex flex-col mx-auto py-20 px-6 items-center justify-center text-center text-white"
        >
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-grow text-4xl font-bold mb-6 text-center p-4"
            >
                Contact 📩
            </motion.h2>

            <motion.div
                className="flex justify-center gap-6 mb-10 text-slate-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <a href="https://github.com/brkas96" target="_blank" className="hover:text-white transition">
                    <Github size={28} />
                </a>
                <a href="https://linkedin.com/in/seu-linkedin" target="_blank" className="hover:text-white transition">
                    <Linkedin size={28} />
                </a>
                <a href="https://fiverr.com/seu-usuario" target="_blank" className="hover:text-white transition">
                    <ExternalLink size={28} />
                </a>
            </motion.div>

            <motion.div
                className="flex flex-col items-center mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg text-sm"
                >
                    {copied ? <Check size={16} /> : <Clipboard size={16} />}
                    {copied ? "Email copiado!" : "Copiar e-mail"}
                </button>
                <p className="text-sm mt-2 text-slate-400">brkas_dev@proton.me</p>
            </motion.div>

            <motion.form
                ref={form}
                onSubmit={sendEmail}
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <input
                    type="text"
                    name="user_name"
                    placeholder="Seu nome"
                    required
                    className="w-full bg-slate-800 p-3 rounded-lg text-white outline-none"
                />
                <input
                    type="email"
                    name="user_email"
                    placeholder="Seu email"
                    required
                    className="w-full bg-slate-800 p-3 rounded-lg text-white outline-none"
                />
                <textarea
                    name="message"
                    placeholder="Sua mensagem"
                    rows="5"
                    required
                    className="w-full bg-slate-800 p-3 rounded-lg text-white outline-none"
                ></textarea>
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition"
                >
                    {sent ? "Enviado ✅" : "Enviar mensagem"}
                </button>
            </motion.form>
        </motion.section>
    );
}
