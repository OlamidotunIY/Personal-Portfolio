import React, {useState, useRef} from 'react'
import emailjs from "@emailjs/browser";
import { IoCheckmarkDoneCircle, IoCloseCircleSharp } from "react-icons/io5";

const Contact = () => {

    const [form, setForm] = useState({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(false);
    const [formError, setFormError] = useState(false);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);

      emailjs
        .send(
          "service_egl1w0r",
          "template_i35dult",
          {
            from_name: form.firstName,
            to_name: "Iyanda",
            from_email: form.email,
            to_email: "olamidotun225@gmail.com",
            message: form.message,
          },
          "05m8FYB7ZhMJXpB1h"
        )
        .then(
          () => {
            setLoading(false);
            setAlert(true);
            setTimeout(() => {
                setAlert(false);
            }, 5000)

            setForm({
              firstName: "",
              lastName: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            setFormError(true);
          }
        );
    };
  return (
    <div id="contact" className="mt-10">
      <div className="w-full text-center relative">
        <h1 className="text-gradient h2">Contact Me</h1>
        <div className="w-[70px] h-[1px] center bg-white top-10"></div>
      </div>
      <div className="py-20 flex w-full flex-col items-center justify-center px-3">
        <h1 className="h3">Contact Me Here</h1>
        <form
          className="mt-10 flex flex-col gap-10"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <div className="flex gap-10 flex-wrap w-full justify-center">
            <div className="input relative w-full">
              <label
                htmlFor=""
                className="absolute -top-4 left-3 bg-[#050316] px-1"
              >
                First Name
              </label>
              <input
                type="text"
                className="w-full h-full bg-transparent border-0 outline-none rounded-xl px-3 py-1 placeholder:text-[13px]"
                id=""
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="What's your firstname?"
              />
            </div>
            <div className="input relative w-full">
              <label
                htmlFor=""
                className="absolute -top-4 left-3 bg-[#050316] px-1"
              >
                Last Name
              </label>
              <input
                type="text"
                className="w-full h-full bg-transparent border-0 outline-none rounded-xl px-3 py-1 placeholder:text-[13px]"
                name="lastName"
                id=""
                value={form.lastName}
                onChange={handleChange}
                placeholder="What's your lastname?"
              />
            </div>
          </div>
          <div className="input relative">
            <label
              htmlFor=""
              className="absolute -top-4 left-3 bg-[#050316] px-1"
            >
              Email
            </label>
            <input
              type="email"
              className="w-full h-full bg-transparent border-0 outline-none rounded-xl px-3 py-1 placeholder:text-[13px]"
              name="email"
              id=""
              value={form.email}
              onChange={handleChange}
              placeholder="What's your Email?"
            />
          </div>
          <div className="relative w-full h-[250px] bg-transparent border border-[#19d308] rounded-xl">
            <label
              htmlFor="message"
              className="absolute px-1 left-3 bg-[#050316] -top-4"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="w-full h-full outline-none border-0 bg-transparent rounded-xl p-3"
              value={form.message}
              onChange={handleChange}
              placeholder="Message....."
            ></textarea>
          </div>
          <button className="btn btn-lg mt-10" type="submit">
            {loading ? "Sending" : "Send"}
          </button>
        </form>
      </div>
      {alert && (
        <div className="absolute bottom-2 right-5 h-[30px] px-5  bg-black rounded flex gap-5 items-center">
          {formError ? (
            <IoCloseCircleSharp className="text-[#d30808]" />
          ) : (
            <IoCheckmarkDoneCircle className="text-[#19d308]" />
          )}
          {formError ? (
            <h1 className="text-[#d30808]">Error!, failed to send</h1>
          ) : (
            <h1 className="text-[#19d308]">Thank You For Reaching Out to me</h1>
          )}
        </div>
      )}
    </div>
  );
}

export default Contact