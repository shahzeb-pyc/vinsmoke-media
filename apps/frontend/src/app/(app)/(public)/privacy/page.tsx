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
                  your behalf. Access tokens are stored encrypted and are only
                  used to act on the accounts you connected. For Pinterest and
                  YouTube, sections 2 and 3 explain exactly what we access.
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
                  <strong>Payment data:</strong> the Service is currently free,
                  and we do not collect any payment details.
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
          heading: '2. Pinterest',
          body: (
            <>
              <p>
                If you connect a Pinterest account, we access only your own
                connected Pinterest account and its data &mdash; never anyone
                else&rsquo;s. Here is exactly what we access and why:
              </p>
              <ul>
                <li>
                  <strong>Your Pinterest account:</strong> your account id,
                  username, and profile image, so we can identify the account
                  you connected in the Service.
                </li>
                <li>
                  <strong>Your boards:</strong> the names and ids of your
                  boards, fetched from Pinterest when you choose where a Pin
                  should go. Your board list is fetched live each time and is
                  never stored in our database. We do not create, change, or
                  delete boards.
                </li>
                <li>
                  <strong>Pins you create or schedule:</strong> the title (up to
                  100 characters), the description (your post message), the
                  destination link, the image or video, and the board you chose.
                  We send these to Pinterest only to publish a Pin you created
                  or scheduled, at the time you scheduled. Videos are uploaded
                  to Pinterest first so the Pin can reference them.
                </li>
                <li>
                  <strong>Pin performance:</strong> analytics for the last 89
                  days, fetched live from Pinterest when you view them and never
                  stored in our database: for your account &mdash; pin click
                  rate, impressions, pin clicks, engagement, and saves; for each
                  Pin &mdash; impressions, pin clicks, outbound clicks, and
                  saves.
                </li>
              </ul>
              <p>
                We use this data only to let you choose a board, publish your
                Pins at the scheduled time, and show you how your Pins perform.
                We do not read Pins you did not create through the Service, and
                we do not access any other Pinterest user&rsquo;s data.
              </p>
            </>
          ),
        },
        {
          heading: '3. YouTube',
          body: (
            <>
              <p>
                If you connect a YouTube account, we access only your own
                connected Google account and YouTube channel &mdash; never
                anyone else&rsquo;s. Here is exactly what we access and why:
              </p>
              <ul>
                <li>
                  <strong>Your Google account:</strong> your name, email
                  address, and profile picture, so we can identify the
                  account you connected in the Service.
                </li>
                <li>
                  <strong>Your YouTube channel:</strong> your channel id,
                  name, profile picture, and subscriber count, so we can
                  identify the channel you connected in the Service. We store
                  the channel id, name, and picture with your connection
                  record, and your access and refresh tokens are stored
                  encrypted.
                </li>
                <li>
                  <strong>Videos you publish:</strong> the title (up to 100
                  characters), the description (your post message), the tags,
                  the privacy setting (public, unlisted, or private), the
                  thumbnail, and the settings you chose, such as whether the
                  video is made for kids or contains AI-generated content. We
                  send these to YouTube only to upload a video you created or
                  scheduled, at the time you scheduled, to your own channel.
                </li>
                <li>
                  <strong>Channel performance:</strong> analytics for your own
                  channel, fetched live from YouTube when you view them and
                  never stored in our database: views, watch time, average
                  view duration and percentage, subscribers gained and lost,
                  and likes. To keep the page loading quickly, these figures
                  may be held in a short-lived cache for up to one hour.
                </li>
                <li>
                  <strong>Video performance:</strong> statistics for each of
                  your videos, fetched live from YouTube when you view them
                  and never stored in our database: views, likes, comments,
                  and favourites. These may also be held in a short-lived
                  cache for up to one hour.
                </li>
              </ul>
              <p>
                We use this data only to publish your videos to your own
                channel at the scheduled time and to show you how your channel
                and videos perform. We do not access anyone else&rsquo;s
                channel, and we do not manage playlists or comments, or touch
                Content ID or partner assets.
              </p>
              <p>
                Google user data is used only to provide the YouTube features
                of the Service described above. We do not sell Google user
                data, we do not share it with third parties except as
                described in section 6, and we do not use it for advertising.
                This use follows the Google API Services User Data Policy,
                including its Limited Use requirements.
              </p>
            </>
          ),
        },
        {
          heading: '4. Why we use your data',
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
          heading: '5. Cookies',
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
          heading: '6. Who we share data with',
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
                  hosting, database, storage, and email providers that run the
                  Service on our behalf. They may only use your data as we
                  instruct them, to provide their service to us.
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
          heading: '7. How long we keep your data',
          body: (
            <>
              <p>
                We keep your data only as long as it is needed for the purposes
                above. While your account is active, we keep your account data,
                connected accounts, and scheduled content so the Service can
                work.
              </p>
              <p>
                Disconnecting a social platform stops the Service from using
                that account. It does not revoke the access you granted at the
                platform, and it does not delete the stored access token: the
                token stays stored in encrypted form, and the connection record
                stays in our database. Deleting a connected account removes its
                posts from view and marks the connection as deleted, but the
                stored token and account details remain in the record. To stop a
                platform itself from recognising the Service, remove the Service
                in that platform&rsquo;s own settings. For Pinterest, your board
                list was never stored, and Pin analytics were never stored in
                our database, so there is nothing of those to delete. For
                YouTube, your channel analytics and per-video statistics were
                fetched live and never stored in our database, so there is
                nothing of those to delete.
              </p>
              <p>
                When you close your account, we anonymise your personal data at
                the time of your request: your email address and name are
                replaced with irreversible hashes, the tokens and details of
                your connected accounts are hashed, and your content is removed
                from view. Your account and content records are not removed from
                our database, and we do not promise a timeframe for removal. For
                anything you cannot do in the app, email us at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and we
                will help.
              </p>
            </>
          ),
        },
        {
          heading: '8. Security',
          body: (
            <p>
              We protect your data with reasonable technical and organisational
              measures, including encrypted connections, hashed passwords, and
              restricted access to our systems. Access tokens for connected
              platforms are stored encrypted and are only used to publish to the
              accounts you connected. No system is completely secure, so if you
              believe your account has been compromised, change your password,
              disconnect affected platforms, and contact us straight away.
            </p>
          ),
        },
        {
          heading: '9. Your rights and choices',
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
                  delete your content, or close your account to have your
                  personal data anonymised.
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
          heading: '10. Children',
          body: (
            <p>
              The Service is not intended for anyone who is not legally able to
              enter into these terms in their jurisdiction, and we do not
              knowingly collect personal data from anyone who cannot legally use
              the Service. If you believe such a person has provided us with
              personal data, please contact us and we will anonymise it.
            </p>
          ),
        },
        {
          heading: '11. International transfers',
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
          heading: '12. Changes to this policy',
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
          heading: '13. Contact',
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
