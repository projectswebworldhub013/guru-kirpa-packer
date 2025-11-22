import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-white text-gray-800 py-16 px-6 md:px-20 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-[#C62828]">
        Privacy Policy — Gurukirpa Relocation
      </h1>

      <p className="text-sm text-gray-500 mb-6">Effective Date: August 8, 2025</p>

      <p className="mb-6">
        At <strong>Gurukirpa Relocation</strong>, we are committed to protecting your privacy and ensuring that your personal information is handled in a secure and responsible manner. This Privacy Policy explains how we collect, use, and safeguard your information.
      </p>

      {/* Section 1 */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 text-[#C62828]">1. Information We Collect</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Contact Details:</strong> Name, phone number, email, and postal address</li>
          <li><strong>Relocation Information:</strong> Pickup/drop addresses, inventory lists, moving dates</li>
          <li><strong>Payment Info:</strong> Mode of payment (no storage of card details)</li>
          <li><strong>Technical Data:</strong> IP address, device, browser, and location data</li>
        </ul>
      </div>

      {/* Section 2 */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 text-[#C62828]">2. How We Use Your Information</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>To manage and schedule relocation services</li>
          <li>To provide quotes and generate invoices</li>
          <li>To improve our website and services</li>
          <li>To address complaints and provide support</li>
          <li>We do <strong>not</strong> sell your information to third parties</li>
        </ul>
      </div>

      {/* Section 3 */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 text-[#C62828]">3. Data Protection & Security</h2>
        <p>
          We use secure servers, data encryption (HTTPS), and restricted access policies. However, no online transmission is 100% secure, and we cannot guarantee complete safety.
        </p>
      </div>

      {/* Section 4 */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 text-[#C62828]">4. Sharing of Information</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>With transport & relocation partners involved in delivering services</li>
          <li>With government authorities when required by law</li>
          <li>With IT service providers for hosting, analytics, and communication</li>
        </ul>
      </div>

      {/* Section 5 */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 text-[#C62828]">5. Cookies & Tracking</h2>
        <p>
          We use cookies to enhance site performance and deliver a better user experience. You can modify cookie settings in your browser preferences.
        </p>
      </div>

      {/* Section 6 */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 text-[#C62828]">6. Children’s Privacy</h2>
        <p>
          Our services are not intended for users under 13. We do not knowingly collect personal data from minors.
        </p>
      </div>

      {/* Section 7 */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 text-[#C62828]">7. Your Rights</h2>
        <p>You may:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Access the data we hold about you</li>
          <li>Request correction or deletion</li>
          <li>Withdraw consent for data processing</li>
        </ul>
        <p className="mt-2">
          To request your data, contact us at: <strong>info@gurukirparelocation.in</strong>
        </p>
      </div>

      {/* Section 8 */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 text-[#C62828]">8. Data Retention</h2>
        <p>
          We keep your data for up to <strong>3 years</strong> unless extended by law or for tax/legal compliance.
        </p>
      </div>

      {/* Section 9 */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 text-[#C62828]">9. Contact Us</h2>
        <p className="mb-2">For any queries related to your privacy:</p>
        <p>📍 <strong>Gurukirpa Relocation</strong></p>
        <p>Plot No. XX, Sector X, Gurugram, Haryana – India</p>
        <p>📧 <strong>Email:</strong> info@gurukirparelocation.in</p>
        <p>📞 <strong>Phone:</strong> +91 98765 43210</p>
      </div>

      {/* Section 10 */}
      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-3 text-[#C62828]">10. Policy Updates</h2>
        <p>
          This Privacy Policy may be updated periodically. All changes will be posted on this page with a revised effective date.
        </p>
      </div>

      <div className="text-center mt-12 text-lg font-medium text-gray-700">
        Your trust is our priority. Thank you for choosing <span className="text-[#C62828] font-bold">Gurukirpa Relocation</span>.
      </div>
    </div>
  );
};

export default PrivacyPolicy;
