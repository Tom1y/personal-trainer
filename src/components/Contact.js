import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    document.getElementById("form").reset();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("Vase sporocilo je bilo poslano");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-background">
      <div className="contact">
        <div className="contact-info">
          <h2>Kontaktiraj me</h2>
          <p>
            V kolikor imate kaksno vprasanje ali bi se pridruzili moji ekipi, mi
            lahko pisete preko obrazca
          </p>
          <p>Odgovorim vam v najkrajšem možnem času</p>
          <img
            src="./images/trening7.jpg"
            className="contact-img"
            alt="posvet"
          ></img>
        </div>
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail} id="form">
            {/* <label>Ime</label> */}
            <input type="text" name="from_name" placeholder="Ime" />
            {/* <label>Priimek</label> */}
            <input type="text" name="from_surname" placeholder="Priimek" />
            {/* <label>Email</label> */}
            <input type="email" name="from_email" placeholder="E-posta" />
            {/* <label>Tel.stevilka</label> */}
            <input type="text" name="from_phone" placeholder="tel.stevilka" />
            <label>Izberite program:</label>
            <select name="from_program">
              <option value="3xTedensko">3x tedensko</option>
              <option value="2xTedensko">2x tedensko</option>
              <option value="par3xTedensko">V paru 3x teden</option>
              <option value="par2xTedensko">V paru 2x teden</option>
              <option value="online">Online sodelovanje</option>
              <option value="hibridno">Hibridni program</option>
              <option value="posameznUra">Posamezna ura treninga</option>
              <option value="12tedenski">12-tedenski indi. trening</option>
              <option value="masaza">Masaža</option>
            </select>
            {/* <label>Sporočilo</label> */}
            <textarea
              name="message"
              placeholder="vase sporocilo"
              className="test"
            />
            <input type="submit" value="Pošlji" className="test2" />
          </form>
        </div>
      </div>
    </div>
  );
}
