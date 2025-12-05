import React, { useEffect } from 'react';

export const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto font-['Akshar'] text-gray-800">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-gray-500 mb-12">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-10">
            <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Introduction</h2>
                <p className="leading-relaxed text-lg text-gray-600">Essential Space ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Essential Space.</p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Data Privacy & Local Storage</h2>
                <p className="leading-relaxed text-lg text-gray-600 mb-4">Essential Space is designed to be <strong className="text-gray-900">private by default</strong>. We believe your thoughts belong to you.</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 text-lg">
                    <li>Your notes, tasks, images, and voice recordings are stored locally on your device.</li>
                    <li>We do not have access to your personal content.</li>
                    <li>If you choose to sync your data across devices, it is handled via your personal iCloud account, subject to Apple's privacy and security standards.</li>
                </ul>
            </section>
            
            <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Information We Collect</h2>
                <p className="leading-relaxed text-lg text-gray-600">We collect minimal, anonymous usage data to improve app stability and performance (e.g., crash reports). We do not collect personal identifiers, the content of your notes, or your precise location data.</p>
            </section>

             <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Contact Us</h2>
                <p className="leading-relaxed text-lg text-gray-600">If you have any questions about this Privacy Policy, please contact us at <span className="text-black font-medium">support@essentialspace.in</span>.</p>
            </section>
        </div>
    </div>
  );
};