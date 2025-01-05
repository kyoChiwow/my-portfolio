import { FaLocationArrow } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactMe = () => {
  const handleContactMe = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(e.target);
    const gettingData = Object.fromEntries(formData.entries());

    emailjs
    .send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      gettingData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    )
    .then(() => {
      Swal.fire({
        title: "Success!",
        text: "You message has been sent!",
        icon: "success",
      });
      form.reset();
    });

   
  };
  return (
    <div className="py-[64px]">
      {/* Header div */}
      <div>
        <h1 className="text-[32px] xl:text-[64px] text-[#12F7D6] text-center">
          Contact
        </h1>
        <p className="text-base font-normal text-white mt-6 text-center">
          I am currently available for freelance or full-time work!
        </p>
      </div>
      {/* Header div */}

      {/* Send a message box div */}
      <div className="border-2 border-[#12F7D6] rounded-tl-[50px] rounded-br-[50px] mt-[100px] max-w-[25%] mx-auto">
        <h1 className="text-[#12F7D6] text-[32px] font-medium px-10 py-4 text-center">
          Send Me A Message
        </h1>
      </div>
      {/* Send a message box div */}

      {/* Input field div here */}
      <div>
        <form
          onSubmit={handleContactMe}
          className="mt-16 max-w-[90%] xl:max-w-[60%] mx-auto"
        >
          {/* name and email field */}
          <div className="flex gap-10">
            <div className="flex flex-col gap-4 xl:w-[48%]">
              <span className="text-base font-normal text-[#12F7D6]">
                Your Name*
              </span>
              <input
                type="text"
                placeholder="Enter Your Name"
                name="name"
                className="input input-ghost w-full"
              />
            </div>

            <div className="flex flex-col gap-4 xl:w-[48%]">
              <span className="text-base font-normal text-[#12F7D6]">
                Your Email*
              </span>
              <input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                className="input input-ghost w-full"
              />
            </div>
          </div>
          {/* name and email field */}

          {/* Message textarea field */}
          <div className="flex flex-col gap-4 mt-8">
            <span className="text-base font-normal text-[#12F7D6]">
              Your Message*
            </span>
            <textarea
              className="textarea textarea-ghost h-[200px]"
              name="message"
              placeholder="Write Your Message"
            ></textarea>
          </div>
          {/* Message textarea field */}

          {/* Send a message button */}
          <button className="btn bg-[#12F7D6] rounded-full text-xl font-medium border-none text-[#292F36] mt-16">
            Send Message
            <FaLocationArrow></FaLocationArrow>
          </button>
          {/* Send a message button */}
        </form>
      </div>
      {/* Input field div here */}
    </div>
  );
};

export default ContactMe;
