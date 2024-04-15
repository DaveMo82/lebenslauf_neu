import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact () {
    const form = useRef();

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      
      emailjs
        .send(
          `service_756ogdf`,
          `template_lebenslauf`,
          {
            to_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          },
         `wJijZj7RJY3OWGgZa`
        )
        .then((response) => {
          alert("message sent successfully");
          console.log("Email sent successfully:", response);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        })
        .catch((error) => {
          console.error("Email failed to send:", error);
        });
    };


    return (
        <>
        <div className="bg-black flex flex-col h-screen items-center">
              <div className="flex text-red-700 font-bold underline text-3xl mb-12 mt-12">
                <h1>Contact</h1>
              </div>
              <section id="Contact">
                <form
                  ref={form}
                  onSubmit={handleSubmit}
                  className="grid min-w-80"
                >
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="rounded-lg mb-4 py-1 pl-4 text-black"
                    value={formData.name}
                    onChange={handleChange}
                  ></input>
                  <input
                    type="email"
                    placeholder="E-Mail"
                    name="email"
                    className="rounded-lg mb-4 py-1 pl-4"
                    value={formData.email}
                    onChange={handleChange}
                  ></input>
                  <textarea
                    type="message"
                    placeholder="Message"
                    name="message"
                    className="rounded-lg mb-4 min-h-56 py-1 pl-4"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <button
                    type="submit"
                    className="rounded-lg bg-red-700 px-4 py-1 mt-10"
                  >
                    Submit
                  </button>
                </form>
              </section>
            </div>
        </>
    )

}