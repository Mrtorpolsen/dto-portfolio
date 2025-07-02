"use client";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("manjwgka");

  return (
    <section
      className="relative z-1 px-8 flex justify-center my-24"
      id="contact"
    >
      <div className="max-w-lg">
        <h2 className="text-center text-3xl font-bold my-8">Contact</h2>
        <p>
          {state.succeeded
            ? "Thank you! Your message has been sent, and I will get back to you shortly"
            : "If you want to get into contact with me, fill out the fields! If you prefer sending an email you can find my mail at the bottom of the page."}
        </p>
        <form className="mt-8" action={handleSubmit}>
          <fieldset
            className={`flex flex-col gap-3 ${state.succeeded && "opacity-50"}`}
            disabled={state.submitting || state.succeeded}
          >
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="bg-gray-100/80 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
              placeholder="Name"
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="bg-gray-100/80 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
              placeholder="Email"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="bg-gray-100/80 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2 h-32 resize-none"
              placeholder="Message"
              required
              maxLength={2000}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              type="submit"
              className={`bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-md w-fit px-5 py-2 self-end 
                ${state.succeeded ? "cursor-not-allowed" : "cursor-pointer"}`}
            >
              {state.submitting ? (
                "Submitting..."
              ) : state.succeeded ? (
                <>
                  Message sent <span className="text-white">&#10003;</span>
                </>
              ) : (
                "Submit"
              )}
            </button>
          </fieldset>
        </form>
      </div>
    </section>
  );
}
