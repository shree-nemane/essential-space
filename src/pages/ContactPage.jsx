import React, { useEffect } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const ContactPage = () => {
  const [state, handleSubmit] = useForm("mvgeqwow");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-32 pb-24 px-6 max-w-6xl mx-auto font-[Akshar]">

        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-[AksharSemiBold] tracking-tight text-gray-900">
            Contact Us
          </h1>
          <p className="text-gray-500 font-[AksharRegular] text-lg mt-3">
            We’re happy to assist — anytime.
          </p>
        </div>

        {/* Main Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 rounded-[2rem] p-10 bg-white border border-gray-200 shadow-lg relative">

          {/* -- LEFT CONTACT CARD -- */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-md">

            {/* Mini Section Badge */}
            <span className="text-sm font-[AksharRegular] uppercase tracking-wide px-4 py-1 bg-black text-white rounded-full">
              Contact Details
            </span>

            <h2 className="text-3xl font-[AksharSemiBold] text-gray-900 mt-6">
              Let's talk.
            </h2>
            <p className="text-gray-500 font-[AksharRegular] leading-relaxed mt-2 mb-8">
              Prefer speaking directly? Our team is always here to connect with you.
            </p>

            {/* Contact Info Blocks */}
            <div className="space-y-5">

              {/* Item */}
              <div className="flex items-center gap-4 group cursor-pointer p-4 rounded-xl border border-gray-200 hover:border-black transition">
                <div className="p-3  text-white rounded-2xl group-hover:scale-110 transition">
                  <Mail className="w-5 h-5 invert" />
                </div>
                <div>
                  <p className="text-sm font-[AksharRegular] text-gray-400">Email</p>
                  <h3 className="text-base font-[AksharSemiBold] text-gray-800">
                    <a href="mailto:support@essentialspace.in" className="text-base font-[AksharSemiBold] text-gray-800 animated-underline">
                      support@essentialspace.in
                    </a>

                  </h3>
                </div>
              </div>

              {/* Item */}
              <div className="flex items-center gap-4 group cursor-pointer p-4 rounded-xl border border-gray-200 hover:border-black transition">
                <div className="p-3  text-white rounded-2xl group-hover:scale-110 transition">
                  <Phone className="w-5 h-5 invert" />
                </div>
                <div>
                  <p className="text-sm font-[AksharRegular] text-gray-400">Phone</p>
                  <h3 className="text-base font-[AksharSemiBold] text-gray-800">
                    <a href="tel:02534508891" class="animated-underline">02534508891</a>
                  </h3>
                </div>
              </div>

              {/* Item */}
              <div className="flex items-center gap-4 group cursor-pointer p-4 rounded-xl border border-gray-200 hover:border-black transition">
                <div className="p-3  text-white rounded-2xl group-hover:scale-110 transition">
                  <MapPin className="w-5 h-5 invert" />
                </div>
                <div>
                  <p className="text-sm font-[AksharRegular] text-gray-400">Location</p>
                  <h3 className="text-base font-[AksharSemiBold] text-gray-800">
                    India
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* -- RIGHT FORM SECTION -- */}
          <div>
            {state.succeeded ? (
              <div className="text-center py-16">
                <CheckCircle className="mx-auto w-14 h-14 text-green-500 mb-4" />
                <h2 className="text-3xl font-[AksharSemiBold]">
                  Message Sent 🎉
                </h2>
                <p className="text-gray-500 mt-2 font-[AksharRegular]">
                  We’ll get back soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Input */}
                <div>
                  <label className="text-sm font-[AksharMedium] text-gray-600 mb-1 block">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    className="w-full font-[AksharRegular] px-5 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:border-black focus:ring-0 transition"
                  />
                </div>

                {/* Input */}
                <div>
                  <label className="text-sm font-[AksharMedium] text-gray-600 mb-1 block">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@email.com"
                    required
                    className="w-full font-[AksharRegular] px-5 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:border-black focus:ring-0 transition"
                  />
                  <ValidationError field="email" errors={state.errors} />
                </div>

                {/* Message */}
                <div>
                  <label className="text-sm font-[AksharMedium] text-gray-600 mb-1 block">Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Write your message..."
                    required
                    className="w-full font-[AksharRegular] px-5 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:border-black focus:ring-0 transition resize-none"
                  ></textarea>
                  <ValidationError field="message" errors={state.errors} />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-3 bg-black text-white rounded-xl text-lg font-[AksharSemiBold] hover:bg-gray-800 transition flex items-center justify-center gap-2 disabled:opacity-40"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4" />
                </button>

              </form>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>

  )
}

export default ContactPage