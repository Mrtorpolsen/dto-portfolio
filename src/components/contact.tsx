export default function Contact() {
  return (
    <section
      className="h-screen relative z-1 px-8 flex justify-center"
      id="contact"
    >
      <div className="max-w-lg">
        <h2 className="text-center text-3xl font-bold my-8">Contact</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eum,
          quae ratione veritatis accusantium, ad enim ab officia velit animi
          dicta voluptates consectetur totam necessitatibus sequi a quia
          quisquam pariatur!
        </p>
        <form className="flex flex-col gap-3 mt-8" action="">
          <input
            className="bg-gray-100/80 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
            placeholder="Name"
            type="text"
          />
          <input
            className="bg-gray-100/80 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
            placeholder="Email"
            type="text"
          />
          <textarea
            className="bg-gray-100/80 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2 h-30 resize-none"
            placeholder="Message"
          />
          <button className="bg-gray-100/80 border border-gray-300 rounded-md w-fit px-5 py-1 self-end cursor-pointer">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
