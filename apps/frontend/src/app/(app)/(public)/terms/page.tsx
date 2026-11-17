import { Metadata } from 'next';
import {
  BRAND_DOMAIN,
  BRAND_NAME,
} from '@gitroom/helpers/utils/is.general.server.side';
import { LegalPage } from '../legal-page';

export const metadata: Metadata = {
  title: `${BRAND_NAME} Terms of Service`,
  description: `Terms of Service for ${BRAND_NAME}, a social media scheduling service.`,
};

const CONTACT_EMAIL = `support@${BRAND_DOMAIN}`;

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="17 November 2026"
      intro={`${BRAND_NAME} is a social media scheduling service that helps you plan, schedule, and publish content to the social media accounts you connect. These Terms of Service govern your use of the ${BRAND_NAME} website and application (the "Service"). By creating an account or using the Service, you agree to these terms. If you do not agree, please do not use the Service.`}
      sections={[
        {
          heading: '1. Your account',
          body: (
            <>
              <p>
                To use the Service you need an account. You are responsible for
                keeping your login credentials confidential and for all activity
                that happens under your account. You must provide accurate
                information when you register, and you must be legally able to
                enter into these terms in your jurisdiction. If you create an
                account on behalf of a business or organisation, you confirm you
                are authorised to do so and that the business or organisation is
                bound by these terms.
              </p>
              <p>
                You may close your account at any time from your account
                settings. We may suspend or close your account if you breach
                these terms, if required by law, or if your use of the Service
                puts the Service, other users, or a connected platform at risk.
                We will tell you when we do so, unless the law prevents us.
              </p>
            </>
          ),
        },
        {
          heading: '2. Connected social platforms',
          body: (
            <>
              <p>
                The Service works by connecting to your accounts on third-party
                social platforms (for example Facebook, Instagram, Threads,
                TikTok, YouTube, LinkedIn, and X) using the access permissions
                you grant. You are responsible for the accounts you connect: you
                must own them or be authorised to manage them, and you must keep
                their credentials and access tokens secure.
              </p>
              <p>
                Each platform has its own terms, policies, and limits, and your
                use of the Service must comply with them as well as with these
                terms. Platforms may change their rules, restrict access, or
                revoke permissions at any time; when that happens, some features
                of the Service may stop working for the affected account, and
                that is outside our control. You can disconnect a platform
                account at any time, which revokes the access you granted.
              </p>
            </>
          ),
        },
        {
          heading: '3. Your content and ownership',
          body: (
            <>
              <p>
                You own the content you create, upload, or schedule through the
                Service (&ldquo;Your Content&rdquo;), including text, images,
                and videos. Nothing in these terms transfers ownership of Your
                Content to us.
              </p>
              <p>
                By using the Service, you give us a limited licence to store,
                process, and transmit Your Content solely to provide the Service
                &mdash; for example to schedule it, to publish it to the
                platforms you have connected, and to show it back to you in the
                app. We do not sell Your Content and we do not use it for
                advertising. You are responsible for ensuring you have the
                rights to use, publish, and share Your Content, and that it does
                not infringe anyone else&rsquo;s rights.
              </p>
            </>
          ),
        },
        {
          heading: '4. Acceptable use',
          body: (
            <>
              <p>You agree not to use the Service to:</p>
              <ul>
                <li>
                  publish content that is unlawful, defamatory, harassing,
                  hateful, or that infringes intellectual property, privacy, or
                  other rights;
                </li>
                <li>
                  publish spam, misleading content, or content designed to
                  deceive, impersonate another person or brand, or manipulate a
                  platform&rsquo;s systems;
                </li>
                <li>
                  upload malware, or attempt to access the Service, other
                  users&rsquo; accounts, or our systems in an unauthorised way;
                </li>
                <li>
                  resell, sublicense, or provide access to the Service to others
                  except as the Service itself allows (for example through team
                  or agency features);
                </li>
                <li>
                  abuse rate limits, automate access outside the features we
                  provide, or use the Service in a way that harms its
                  availability for others.
                </li>
              </ul>
              <p>
                We may remove content or refuse to publish content that we
                reasonably believe breaches this section, and we may suspend
                accounts that repeatedly do so.
              </p>
            </>
          ),
        },
        {
          heading: '5. Plans and billing',
          body: (
            <>
              <p>
                Some features of the Service are available on paid plans. Paid
                plans are billed in advance for the period you choose, and renew
                automatically until you cancel. You can cancel at any time; your
                plan stays active until the end of the period you have already
                paid for. Prices are shown at checkout in the currency displayed
                there, and may change &mdash; if they do, the new price applies
                from your next renewal, and we will tell you before it takes
                effect.
              </p>
              <p>
                If a payment fails, we may pause paid features until the payment
                succeeds. Refunds are handled case by case: contact us and we
                will review the request fairly, taking into account how much of
                the paid period was used.
              </p>
            </>
          ),
        },
        {
          heading: '6. Availability',
          body: (
            <p>
              We work to keep the Service available and reliable, but we do not
              guarantee uninterrupted or error-free operation. The Service
              depends on third-party platforms, networks, and providers, and
              scheduled posts may occasionally fail to publish &mdash; for
              example if a platform is down, changes its rules, or revokes
              access. Where a scheduled post fails, the Service will show the
              failure in your account so you can act on it. We are not
              responsible for posts that a platform rejects or fails to publish
              for reasons outside our control.
            </p>
          ),
        },
        {
          heading: '7. Our intellectual property',
          body: (
            <p>
              The Service itself &mdash; including its software, design, logo,
              and branding &mdash; is owned by us or our licensors and is
              protected by intellectual property law. These terms give you a
              limited, non-exclusive, non-transferable right to use the Service
              for its intended purpose. You may not copy, modify, reverse
              engineer, or extract the source code of the Service except as
              permitted by applicable law. The underlying software is open
              source under the GNU Affero General Public License v3.0; the
              source code is available from our public repository, and the
              licence terms apply to the software itself.
            </p>
          ),
        },
        {
          heading: '8. Third-party platform terms',
          body: (
            <p>
              When you connect a social platform, your relationship with that
              platform is governed by that platform&rsquo;s own terms and
              privacy policy, not by these terms. We are not a party to that
              relationship and are not responsible for how a platform handles
              your data, your content, or your account once it is published
              there. If a platform suspends or restricts your account, you
              should contact that platform directly.
            </p>
          ),
        },
        {
          heading: '9. Limitation of liability',
          body: (
            <>
              <p>
                To the maximum extent permitted by law, the Service is provided
                &ldquo;as is&rdquo; and &ldquo;as available&rdquo;, without
                warranties of any kind, whether express or implied, including
                warranties of merchantability, fitness for a particular purpose,
                and non-infringement.
              </p>
              <p>
                To the maximum extent permitted by law, we are not liable for
                indirect, incidental, or consequential losses, loss of profits,
                loss of data, or loss of goodwill arising from your use of the
                Service. Our total liability for any claim relating to the
                Service is limited to the amount you paid us for the Service in
                the twelve months before the claim arose, or, if you use a free
                plan, to zero.
              </p>
              <p>
                Nothing in these terms limits liability that cannot be limited
                by law, including liability for death or personal injury caused
                by negligence, or for fraud.
              </p>
            </>
          ),
        },
        {
          heading: '10. Termination',
          body: (
            <p>
              You may stop using the Service and close your account at any time.
              We may suspend or terminate your access if you breach these terms,
              if you fail to pay for a paid plan, or if we stop providing the
              Service. On termination, your right to use the Service ends
              immediately. Sections that should reasonably survive termination
              &mdash; including ownership, liability, and this section &mdash;
              continue to apply.
            </p>
          ),
        },
        {
          heading: '11. Changes to these terms',
          body: (
            <p>
              We may update these terms from time to time, for example when we
              add features, change how the Service works, or when the law
              changes. When we make a material change, we will tell you in the
              app or by email before it takes effect. Continuing to use the
              Service after the change takes effect means you accept the updated
              terms. The &ldquo;Last updated&rdquo; date at the top of this page
              shows when the terms were last changed.
            </p>
          ),
        },
        {
          heading: '12. Contact',
          body: (
            <p>
              If you have any questions about these terms, contact us at{' '}
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
