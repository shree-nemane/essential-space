import React, { useEffect } from 'react';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

const TermsOfUsePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Navbar />
        <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto font-[Akshar] text-gray-800">
        <h1 className="text-4xl md:text-5xl font-[AksharSemiBold] mb-8">Terms of Use</h1>
        <p className="text-gray-500 font-[AksharRegular] mb-12">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-10">
            <section>
                <h2 className="text-2xl font-[AksharSemiBold] mb-4 text-gray-900">1. Agreement to Terms</h2>
                <p className="leading-relaxed font-[AksharRegular] text-lg text-gray-600">By downloading or using the Essential Space application, these terms will automatically apply to you – you should make sure therefore that you read them carefully before using the app.</p>
            </section>

            <section>
                <h2 className="text-2xl font-[AksharSemiBold] mb-4 text-gray-900">2. Subscriptions & Payments</h2>
                <p className="leading-relaxed font-[AksharRegular] text-lg text-gray-600 mb-4">Essential Space offers a Premium subscription service.</p>
                <ul className="list-disc pl-6 space-y-2 font-[AksharRegular] text-gray-600 text-lg">
                    <li>Payment will be charged to your Apple ID account at the confirmation of purchase.</li>
                    <li>The subscription automatically renews unless it is canceled at least 24 hours before the end of the current period.</li>
                    <li>Your account will be charged for renewal within 24 hours prior to the end of the current period.</li>
                    <li>You can manage and cancel your subscriptions by going to your App Store account settings after purchase.</li>
                </ul>
            </section>
            
            <section>
                <h2 className="text-2xl font-[AksharSemiBold] mb-4 text-gray-900">3. Intellectual Property</h2>
                <p className="leading-relaxed font-[AksharRegular] text-lg text-gray-600">The app itself, and all the trade marks, copyright, database rights and other intellectual property rights related to it, still belong to Essential Space.</p>
            </section>

            <section>
                <h2 className="text-2xl font-[AksharSemiBold] mb-4 text-gray-900">4. Changes to This Agreement</h2>
                <p className="leading-relaxed font-[AksharRegular] text-lg text-gray-600">We reserve the right, at our sole discretion, to modify or replace these Terms of Use at any time. What constitutes a material change will be determined at our sole discretion.</p>
            </section>
        </div>
    </div>
    <Footer />
    </>

  )
}

export default TermsOfUsePage