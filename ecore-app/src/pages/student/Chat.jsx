import { useEffect, useRef, useState } from "react";
import { useApp } from "../../context/AppContext";

function buildReply(text) {
  const lower = text.toLowerCase();
  if (lower.includes("are") || lower.includes("is")) {
    return `Con gusto te lo explico. "She" es tercera persona singular, así que el verbo "to be" en presente correcto es "is", no "are". Te dejo la regla completa para que te quede clara de una vez:<br><br>I → am · You → are · He / She / It → is · We / They → are<br><br>¿Querés que armemos juntos un par de oraciones de práctica con "he" e "it" para que se te fije del todo?`;
  }
  if (lower.includes("went") || lower.includes("go")) {
    return `Buena pregunta, vamos paso a paso. "Go" es presente, pero la oración dice "yesterday" (ayer), así que necesitamos el pasado: "went". Sé que los verbos irregulares cuestan al principio porque no siguen la regla de agregar "-ed" — si querés, te preparo una lista corta con los irregulares más comunes para que practiques solo esos por ahora, sin abrumarte con todos.`;
  }
  if (lower.includes("ejemplo")) {
    return `Claro, te doy una mano con otro ejemplo del mismo error: "He ___ a doctor" → la respuesta correcta es "is", no "are", por la misma regla de tercera persona singular. Si querés seguimos con uno más, o probamos con un ejercicio corto para afianzarlo.`;
  }
  return `Entiendo lo que me preguntás, y quiero ayudarte a que te quede bien claro. Este tipo de error suele pasar porque la regla cambia según el sujeto de la oración. Contame puntualmente qué oración te genera dudas y lo vemos juntos paso a paso — o si preferís, te armo un ejercicio cortito para practicarlo ahora mismo.`;
}

export default function Chat() {
  const { user } = useApp();
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: `¡Hola ${user.name.split(" ")[0]}! Vi que tuviste 2 errores en tu último examen y estoy aquí para ayudarte a entenderlos, sin apuro. ¿Sobre cuál de los dos te gustaría que conversemos primero?`,
    },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  function send(text) {
    const clean = text.trim();
    if (!clean) return;
    setMessages((prev) => [...prev, { from: "user", text: clean }]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: buildReply(clean) }]);
    }, 650);
  }

  return (
    <>
      <div className="page-head">
        <h1>Chat de correcciones</h1>
        <p>Conversá con la IA para entender tus errores del último examen.</p>
      </div>
      <div className="grid-2" style={{ gridTemplateColumns: "280px 1fr" }}>
        <div className="card">
          <h3 style={{ fontSize: 14, marginBottom: 14 }}>Correcciones del examen</h3>
          <div style={{ border: "1.5px solid var(--border)", borderRadius: 10, padding: 12, marginBottom: 10, fontSize: 13 }}>
            <div style={{ color: "var(--rose)", textDecoration: "line-through", marginBottom: 4 }}>She ___ a teacher at a small school.</div>
            <div>Tu respuesta: <b style={{ color: "var(--rose)" }}>are</b></div>
            <div>Correcto: <b style={{ color: "var(--green)" }}>is</b></div>
          </div>
          <div style={{ border: "1.5px solid var(--border)", borderRadius: 10, padding: 12, fontSize: 13 }}>
            <div style={{ color: "var(--rose)", textDecoration: "line-through", marginBottom: 4 }}>They ___ to the park yesterday.</div>
            <div>Tu respuesta: <b style={{ color: "var(--rose)" }}>go</b></div>
            <div>Correcto: <b style={{ color: "var(--green)" }}>went</b></div>
          </div>
        </div>
        <div className="card chat-shell">
          <div className="chat-msgs" ref={scrollRef}>
            {messages.map((m, idx) => (
              <div key={idx} className={`msg ${m.from === "bot" ? "bot" : "user"}`} dangerouslySetInnerHTML={{ __html: m.text }} />
            ))}
          </div>
          <div className="chat-quick">
            <button onClick={() => send("¿Por qué 'are' está mal en la primera pregunta?")}>¿Por qué "are" está mal?</button>
            <button onClick={() => send("¿Me das un ejemplo más de ese mismo error?")}>Dame otro ejemplo</button>
            <button onClick={() => send("¿Por qué es went y no go?")}>¿Por qué "went"?</button>
          </div>
          <div className="chat-input-row">
            <input
              type="text"
              placeholder="Escribí tu pregunta aquí..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send(input)}
            />
            <button className="btn btn-primary" onClick={() => send(input)}>Enviar</button>
          </div>
        </div>
      </div>
    </>
  );
}
