import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-sand text-ink px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-[28px] border border-accent/10 bg-[rgba(250,248,245,0.9)] shadow-[0_20px_60px_rgba(26,26,46,0.08)] p-6 sm:p-10 lg:p-12">
          <header className="mb-10">
            <p className="badge mb-4">Privacy Policy</p>
            <h1 className="font-serif text-4xl sm:text-5xl leading-tight text-ink">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm sm:text-base text-ink/55 leading-relaxed">
              This page presents the privacy policy for InkList as provided.
            </p>
          </header>

          <article className="space-y-8 text-sm sm:text-[15px] leading-7 text-ink/80">
            <section className="space-y-3">
              <p>
                This privacy policy applies to the InkList app (hereby referred
                to as "Application") for mobile devices that was created by
                Nirmal Chhetri (hereby referred to as "Service Provider") as a
                Free service. This service is intended for use "AS IS".
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-ink">
                Information Collection and Use
              </h2>
              <p>
                The Application collects information when you download and use
                it. This information may include information such as
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Your device's Internet Protocol address (e.g. IP address)
                </li>
                <li>
                  The pages of the Application that you visit, the time and date
                  of your visit, the time spent on those pages
                </li>
                <li>The time spent on the Application</li>
                <li>The operating system you use on your mobile device</li>
              </ul>
              <p>
                The Application does not gather precise information about the
                location of your mobile device.
              </p>
              <p>
                The Application uses Artificial Intelligence (AI) technologies
                to enhance user experience and provide certain features. The AI
                components may process user data to deliver personalized
                content, recommendations, or automated functionalities. All AI
                processing is performed in accordance with this privacy policy
                and applicable laws. If you have questions about the AI features
                or data processing, please contact the Service Provider.
              </p>
              <p>
                The Service Provider may use the information you provided to
                contact you from time to time to provide you with important
                information, required notices and marketing promotions.
              </p>
              <p>
                For a better experience, while using the Application, the
                Service Provider may require you to provide us with certain
                personally identifiable information, including but not limited
                to Email, Username. The information that the Service Provider
                request will be retained by them and used as described in this
                privacy policy.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-ink">
                Third Party Access
              </h2>
              <p>
                Only aggregated, anonymized data is periodically transmitted to
                external services to aid the Service Provider in improving the
                Application and their service. The Service Provider may share
                your information with third parties in the ways that are
                described in this privacy statement.
              </p>
              <p>
                Please note that the Application utilizes third-party services
                that have their own Privacy Policy about handling data. Below
                are the links to the Privacy Policy of the third-party service
                providers used by the Application:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <a
                    className="text-accent hover:text-accent-light transition-colors"
                    href="https://www.google.com/policies/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Play Services
                  </a>
                </li>
                <li>
                  <a
                    className="text-accent hover:text-accent-light transition-colors"
                    href="https://firebase.google.com/support/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Analytics for Firebase
                  </a>
                </li>
                <li>
                  <a
                    className="text-accent hover:text-accent-light transition-colors"
                    href="https://firebase.google.com/support/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Firebase Crashlytics
                  </a>
                </li>
              </ul>
              <p>
                The Service Provider may disclose User Provided and
                Automatically Collected Information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  as required by law, such as to comply with a subpoena, or
                  similar legal process;
                </li>
                <li>
                  when they believe in good faith that disclosure is necessary
                  to protect their rights, protect your safety or the safety of
                  others, investigate fraud, or respond to a government request;
                </li>
                <li>
                  with their trusted services providers who work on their
                  behalf, do not have an independent use of the information we
                  disclose to them, and have agreed to adhere to the rules set
                  forth in this privacy statement.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-ink">Opt-Out Rights</h2>
              <p>
                You can stop all collection of information by the Application
                easily by uninstalling it. You may use the standard uninstall
                processes as may be available as part of your mobile device or
                via the mobile application marketplace or network.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-ink">
                Data Retention Policy
              </h2>
              <p>
                The Service Provider will retain User Provided data for as long
                as you use the Application and for a reasonable time thereafter.
                If you'd like them to delete User Provided Data that you have
                provided via the Application, please contact them at
                morespacenirmal@gmail.com and they will respond in a reasonable
                time.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-ink">Children</h2>
              <p>
                The Service Provider does not use the Application to knowingly
                solicit data from or market to children under the age of 13.
              </p>
              <p>
                The Application does not address anyone under the age of 13. The
                Service Provider does not knowingly collect personally
                identifiable information from children under 13 years of age. In
                the case the Service Provider discover that a child under 13 has
                provided personal information, the Service Provider will
                immediately delete this from their servers. If you are a parent
                or guardian and you are aware that your child has provided us
                with personal information, please contact the Service Provider
                (morespacenirmal@gmail.com) so that they will be able to take
                the necessary actions.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-ink">Security</h2>
              <p>
                The Service Provider is concerned about safeguarding the
                confidentiality of your information. The Service Provider
                provides physical, electronic, and procedural safeguards to
                protect information the Service Provider processes and
                maintains.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-ink">Changes</h2>
              <p>
                This Privacy Policy may be updated from time to time for any
                reason. The Service Provider will notify you of any changes to
                the Privacy Policy by updating this page with the new Privacy
                Policy. You are advised to consult this Privacy Policy regularly
                for any changes, as continued use is deemed approval of all
                changes.
              </p>
              <p>This privacy policy is effective as of 2026-03-29</p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-ink">Your Consent</h2>
              <p>
                By using the Application, you are consenting to the processing
                of your information as set forth in this Privacy Policy now and
                as amended by us.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-ink">Contact Us</h2>
              <p>
                If you have any questions regarding privacy while using the
                Application, or have questions about the practices, please
                contact the Service Provider via email at
                morespacenirmal@gmail.com.
              </p>
            </section>

            <hr className="border-accent/10" />

            <p className="text-xs text-ink/40">
              This privacy policy page was generated by{" "}
              <a
                className="text-accent hover:text-accent-light transition-colors"
                href="https://app-privacy-policy-generator.nisrulz.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                App Privacy Policy Generator
              </a>
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}
