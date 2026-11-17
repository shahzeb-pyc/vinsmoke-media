import { Metadata } from 'next';
import {
  BRAND_DOMAIN,
  BRAND_NAME,
} from '@gitroom/helpers/utils/is.general.server.side';
import { LegalPage } from '../legal-page';

export const metadata: Metadata = {
  title: `${BRAND_NAME} Privacy Policy`,
  description: `Privacy Policy for ${BRAND_NAME}: what data we collect, why, and how we protect it.`,
};

const CONTACT_EMAIL = `support@${BRAND_DOMAIN}`;

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="17 November 2026"
      intro={`${BRAND_NAME} is a social media scheduling service. This Privacy Policy explains what personal data we collect when you use the ${BRAND_NAME} website and application (the "Service"), why we collect it, who we share it with, and the choices you have. We only collect what we need to run the Service, and we do not sell your personal data.`}
      sections={[
        {
          heading: '1. What data we collect',
          body: (
            <>
              <p>We collect the following kinds of data:</p>
              <ul>
                <li>
                  <strong>Account data:</strong> your name, email address, and
                  password (stored in hashed form) when you register, and any
                  profile details you add to your account.
                </li>
                <li>
                  <strong>Connected social accounts:</strong> the account
                  identifiers, names, profile images, and access tokens for the
                  social platforms you connect, so the Service can publish on
                  your behalf. Access tokens are stored securely and are only
                  used to act on the accounts you connected.
                </li>
                <li>
                  <strong>Your content:</strong> the posts, captions, images,
                  videos, and scheduling settings you create in the Service,
                  including content you upload for publishing.
                </li>
                <li>
                  <strong>Usage data:</strong> how you use the Service, such as
                  scheduled and published posts, errors, and basic diagnostics
                  that help us keep the Service working.
                </li>
                <li>
                  <strong>Payment data:</strong> if you buy a paid plan, payment
                  is processed by our payment provider; we receive confirmation
                  of the payment and limited billing details, but we do not
                  store your full card or bank details.
                </li>
                <li>
                  <strong>Support data:</strong> the messages you send us when
                  you contact support, and any information needed to answer
                  them.
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: '2. Why we use your data',
          body: (
            <>
              <p>We use your data only for these purposes:</p>
              <ul>
                <li>
                  to provide the Service &mdash; including scheduling and
                  publishing your content to the platforms you connected;
                </li>
                <li>
                  to run and secure your account, and to recover it if you lose
                  access;
                </li>
                <li>to process payments for paid plans;</li>
                <li>
                  to answer support requests and tell you about important
                  changes to the Service;
                </li>
                <li>
                  to monitor, fix, and improve the Service, using aggregated or
                  anonymised usage data where possible.
                </li>
              </ul>
              <p>
                We do not use your data for advertising, and we do not share it
                with advertisers.
              </p>
            </>
          ),
        },
        {
          heading: '3. Cookies',
          body: (
            <>
              <p>
                We use cookies and similar storage for things the Service needs
                to work: keeping you signed in, remembering your language and
                preferences, and protecting against abuse. These are strictly
                necessary cookies, and the Service cannot work without them.
              </p>
              <p>
                We may also use privacy-respecting analytics to understand how
                the Service is used in aggregate, so we can improve it. Where
                analytics are enabled, they do not track you across other
                websites and do not build an advertising profile. You can clear
                cookies in your browser at any time, but doing so will sign you
                out of the Service.
              </p>
            </>
          ),
        },
        {
          heading: '4. Who we share data with',
          body: (
            <>
              <p>
                We share data only with the parties needed to run the Service:
              </p>
              <ul>
                <li>
                  <strong>Social platforms you connect:</strong> when you
                  schedule or publish a post, we send the content you chose to
                  the platform you chose, using the access you granted. Once
                  published, that platform handles your content under its own
                  terms and privacy policy.
                </li>
                <li>
                  <strong>Infrastructure and service providers:</strong> the
                  hosting, database, storage, email, and payment providers that
                  run the Service on our behalf. They may only use your data as
                  we instruct them, to provide their service to us.
                </li>
                <li>
                  <strong>Legal requirements:</strong> if the law requires it,
                  or to protect the safety, rights, or property of our users and
                  the public, we may disclose data to the relevant authorities.
                </li>
              </ul>
              <p>
                We do not sell your personal data, and we do not share it with
                data brokers.
              </p>
            </>
          ),
        },
        {
          heading: '5. How long we keep your data',
          body: (
            <p>
              We keep your data only as long as it is needed for the purposes
              above. While your account is active, we keep your account data,
              connected accounts, and scheduled content so the Service can work.
              When you close your account, we delete your personal data and your
              content within a reasonable period, except for data we must keep
              for legal, accounting, or security reasons (for example payment
              records), which we keep only as long as the law requires.
              Disconnecting a social platform revokes its access token; we
              delete the stored token for that account.
            </p>
          ),
        },
        {
          heading: '6. Security',
          body: (
            <p>
              We protect your data with reasonable technical and organisational
              measures, including encrypted connections, hashed passwords, and
              restricted access to our systems. Access tokens for connected
              platforms are stored securely and are only used to publish to the
              accounts you connected. No system is completely secure, so if you
              believe your account has been compromised, change your password,
              disconnect affected platforms, and contact us straight away.
            </p>
          ),
        },
        {
          heading: '7. Your rights and choices',
          body: (
            <>
              <p>
                Depending on where you live, you may have the right to access,
                correct, or delete your personal data, to restrict or object to
                how we use it, and to receive a copy of it in a portable format.
                You can exercise most of these directly in the app:
              </p>
              <ul>
                <li>update your account details in your account settings;</li>
                <li>
                  disconnect a social platform at any time, which stops the
                  Service from accessing that account;
                </li>
                <li>
                  delete your content, or close your account to delete your
                  personal data.
                </li>
              </ul>
              <p>
                For anything you cannot do in the app, email us at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and we
                will help. We will answer requests within a reasonable time and
                as required by applicable law.
              </p>
            </>
          ),
        },
        {
          heading: '8. Children',
          body: (
            <p>
              The Service is not directed at children, and we do not knowingly
              collect personal data from children under the age required by
              applicable law to use online services without parental consent. If
              you believe a child has provided us with personal data, please
              contact us and we will delete it.
            </p>
          ),
        },
        {
          heading: '9. International transfers',
          body: (
            <p>
              The Service and its infrastructure providers may store and process
              data in countries other than your own. Where data is transferred
              internationally, we rely on the safeguards required by applicable
              law, such as the contractual protections our providers offer.
            </p>
          ),
        },
        {
          heading: '10. Changes to this policy',
          body: (
            <p>
              We may update this policy from time to time, for example when we
              add features or when the law changes. When we make a material
              change, we will tell you in the app or by email before it takes
              effect. The &ldquo;Last updated&rdquo; date at the top of this
              page shows when the policy was last changed.
            </p>
          ),
        },
        {
          heading: '11. Contact',
          body: (
            <p>
              If you have any questions about this policy or about your personal
              data, contact us at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or through
              the support channels listed on{' '}
              <a href={`https://${BRAND_DOMAIN}`}>{BRAND_DOMAIN}</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
