import React from "react";
import Header from "../../components/header/Header";

const PrivacyPolicy = () => {
  return (
    <>
      <Header name="Privacy Policy" />
      <div className="bg-gray-100 p-6 font-sans leading-relaxed tracking-wide text-gray-800 md:p-12">
        <div className="container mx-auto">
          {/* Header */}
          {/* <header className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
            <p className="mt-4 text-lg text-gray-600">
              Last updated: <span className="font-semibold">[Insert Date]</span>
            </p>
          </header> */}

          {/* Privacy Policy Content */}
          <div className="rounded-lg bg-white p-6 shadow-md md:p-12">
            {/* Our Commitment to Privacy */}
            <section className="mb-8">
              <h1 className="mb-4 text-2xl font-semibold">
                Our Commitment to Privacy
              </h1>
              <p className="text-gray-700">
                Ecom is committed to protecting the privacy and security of your
                personal information. This Privacy Policy outlines the types of
                information we collect from you, how we use and protect that
                information, and your rights regarding your personal data. By
                using our website and services, you consent to the practices
                described in this policy.
              </p>
            </section>

            {/* Information Collection */}
            <section className="mb-8">
              <h1 className="mb-4 text-2xl font-semibold">
                What information do we collect?
              </h1>
              <p className="text-gray-700">
                We collect information from you when you subscribe to our
                newsletter or marketing updates, fill out a form, or submit
                property information.
              </p>
              <p className="mt-4 text-gray-700">
                When ordering or registering on our site, as appropriate, you
                may be asked to enter your: name, e-mail address, mailing
                address, or phone number. We transfer information about you if
                Ecom is acquired by or merged with another company. In this
                event, Ecom will notify you before information is transferred
                and becomes subject to a different privacy policy.
              </p>
              <p className="mt-4 text-gray-700">
                Any of the information we collect from you may be used in one of
                the following ways:
              </p>
              <ul className="mt-4 list-inside list-disc text-gray-700">
                <li>
                  <strong>To process transactions:</strong> Your information
                  will be used in completion of the buying process, property
                  assessment, and property documentation.
                </li>
                <li>
                  <strong>To communicate with you:</strong> The contact
                  information (Phone number and e-mail) you provide may be used
                  to send you information, respond to inquiries, and/or other
                  requests or questions.
                </li>
              </ul>
            </section>

            {/* Data Security */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">Data Security</h2>
              <p className="text-gray-700">
                We take reasonable measures to protect your personal information
                from unauthorized access, alteration, disclosure, or
                destruction. However, no method of transmission over the
                Internet or electronic storage is entirely secure, and we cannot
                guarantee absolute security.
              </p>
            </section>

            {/* Children's Online Privacy Protection Act Compliance */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">
                Children’s Online Privacy Protection Act Compliance
              </h2>
              <p className="text-gray-700">
                We are in compliance with the requirements of COPPA (Children’s
                Online Privacy Protection Act), and we do not collect any
                information from anyone under 13 years of age. Our website,
                products, and services are all directed to people who are at
                least 13 years old or older.
              </p>
            </section>

            {/* Opt-In Information and Third-Party Sharing */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">
                Opt-In Information and Third-Party Sharing
              </h2>
              <p className="text-gray-700">
                We respect your privacy choices, especially concerning the
                sharing of your personal information. Any information you
                provide through opt-in consent will not be shared with third
                parties for marketing or promotional purposes.
              </p>
            </section>

            {/* Opt-In for Marketing Text Messages */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">
                Opt-In for Marketing Text Messages
              </h2>
              <p className="text-gray-700">
                By submitting the contact form and signing up for texts, you
                consent to receive marketing text messages from Ecom at the
                number +44 79 9955 7583. Consent is not a condition of purchase.
                Message and data rates may apply. You can unsubscribe at any
                time by replying STOP to the received SMS (texts) or clicking
                the unsubscribe link (where available) in the marketing text
                messages.
              </p>
            </section>

            {/* Your Rights */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">Your Rights</h2>
              <p className="text-gray-700">
                You have the right to access, update, correct, and delete your
                personal information we hold. If you wish to exercise any of
                these rights, please contact us at{" "}
                <a
                  href="mailto:info@ecom.com"
                  className="text-blue-500 hover:underline"
                >
                  info@ecom.com
                </a>{" "}
                or call us at +44 79 9955 7583.
              </p>
            </section>

            {/* Changes to this Privacy Policy */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">
                Changes to this Privacy Policy
              </h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or for other operational, legal, or
                regulatory reasons. The updated policy will be posted on our
                website, and the effective date will be revised accordingly.
              </p>
            </section>

            {/* Contacting Us */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">Contacting Us</h2>
              <p className="text-gray-700">
                If there are any questions regarding this privacy policy, you
                may contact us with the information on our contact page.
              </p>
              <p className="mt-4 font-semibold">Ecom</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
