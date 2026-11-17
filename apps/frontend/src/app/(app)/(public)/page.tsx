// Public landing page for the apex domain (vinsmokemedia.online).
// Served only to signed-out visitors on the apex host — see proxy.ts,
// which allowlists `/` on the apex hostname and keeps redirecting
// app.vinsmokemedia.online/ to /auth. Signed-in visitors never see this
// page: proxy.ts still redirects logged-in `/` to /launches.
// Copy is hardcoded English on purpose, like the legal pages: the landing
// page is not translated. Vinsmoke Media is free — no pricing section,
// no paid plans, no user counts or statistics anywhere on this page.
import Link from 'next/link';
import { BRAND_FRONTEND_URL } from '@gitroom/helpers/utils/is.general.server.side';

const PLATFORMS = [
  'Instagram',
  'YouTube',
  'TikTok',
  'Facebook',
  'X',
  'LinkedIn',
  'Reddit',
  'Pinterest',
  'Threads',
  'Slack',
  'Discord',
  'Mastodon',
  'Bluesky',
  'Dribbble',
];

const FEATURES = [
  {
    title: 'Scheduling',
    body: 'Plan posts ahead and let them go out on time, across every account you manage.',
  },
  {
    title: 'Analytics',
    body: 'See how each post performs and learn what your audience actually responds to.',
  },
  {
    title: 'Team collaboration',
    body: 'Work together in shared workspaces, so everyone posts from the same plan.',
  },
  {
    title: 'API & automation',
    body: 'Automate publishing with the API and connect the tools you already use.',
  },
];

const STEPS = [
  {
    step: '1',
    title: 'Create your account',
    body: 'Sign up free — it takes less than a minute.',
  },
  {
    step: '2',
    title: 'Connect your accounts',
    body: 'Add the social accounts you want to post to.',
  },
  {
    step: '3',
    title: 'Schedule and publish',
    body: 'Write once, schedule everywhere, and watch it go out.',
  },
];

export default function LandingPage() {
  return (
    <div className="mx-auto w-full max-w-[860px] px-[20px]">
      <nav
        aria-label="Landing page"
        className="flex flex-wrap items-center gap-x-[24px] gap-y-[8px] py-[20px] text-[14px] font-medium"
      >
        <a href="#features" className="text-textItemBlur hover:text-newTextColor">
          Features
        </a>
        <a
          href="#platforms"
          className="text-textItemBlur hover:text-newTextColor"
        >
          Platforms
        </a>
        <Link href="/terms" className="text-textItemBlur hover:text-newTextColor">
          Terms
        </Link>
        <Link
          href="/privacy"
          className="text-textItemBlur hover:text-newTextColor"
        >
          Privacy
        </Link>
      </nav>

      <section className="py-[64px] text-center sm:py-[96px]">
        <h1 className="text-[36px] font-bold leading-[1.15] sm:text-[48px]">
          Schedule, automate and analyse your social content.
        </h1>
        <p className="mx-auto mt-[20px] max-w-[560px] text-[16px] leading-[1.7] text-textItemBlur sm:text-[18px]">
          Plan your posts, publish them everywhere, and see what works — all
          from one place. Free, with no limits on getting started.
        </p>
        <div className="mt-[32px] flex flex-wrap items-center justify-center gap-[12px]">
          <a
            href={`${BRAND_FRONTEND_URL}/auth/register`}
            className="rounded-full bg-btnPrimary px-[24px] py-[12px] text-[15px] font-semibold text-white hover:bg-btnPrimaryHover"
          >
            Sign up free
          </a>
          <a
            href={BRAND_FRONTEND_URL}
            className="rounded-full border border-newTableBorder bg-newBgColorInner px-[24px] py-[12px] text-[15px] font-semibold text-newTextColor hover:border-newBorder"
          >
            Open app
          </a>
        </div>
      </section>

      <section id="platforms" className="border-t border-newTableBorder py-[40px]">
        <p className="text-center text-[14px] font-medium text-textItemBlur">
          Every platform you post to, in one place
        </p>
        <ul className="mt-[24px] flex flex-wrap items-center justify-center gap-[10px]">
          {PLATFORMS.map((platform) => (
            <li
              key={platform}
              className="rounded-full border border-newTableBorder bg-newBgColorInner px-[16px] py-[8px] text-[14px] font-medium text-newTextColor"
            >
              {platform}
            </li>
          ))}
        </ul>
      </section>

      <section
        id="features"
        className="border-t border-newTableBorder py-[48px]"
      >
        <h2 className="text-[28px] font-bold leading-tight">Features</h2>
        <div className="mt-[24px] grid gap-[16px] sm:grid-cols-2">
          {FEATURES.map((feature) => (
            <article
              key={feature.title}
              className="rounded-[6px] border border-newTableBorder bg-newBgColorInner p-[24px]"
            >
              <h3 className="text-[18px] font-semibold">{feature.title}</h3>
              <p className="mt-[8px] text-[15px] leading-[1.7] text-textItemBlur">
                {feature.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-newTableBorder py-[48px]">
        <h2 className="text-[28px] font-bold leading-tight">How it works</h2>
        <ol className="mt-[24px] grid gap-[16px] sm:grid-cols-3">
          {STEPS.map((item) => (
            <li
              key={item.step}
              className="rounded-[6px] border border-newTableBorder bg-newBgColorInner p-[24px]"
            >
              <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-btnPrimary text-[15px] font-bold text-white">
                {item.step}
              </span>
              <h3 className="mt-[16px] text-[18px] font-semibold">
                {item.title}
              </h3>
              <p className="mt-[8px] text-[15px] leading-[1.7] text-textItemBlur">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-newTableBorder py-[64px] text-center">
        <h2 className="text-[28px] font-bold leading-tight">
          Start scheduling free
        </h2>
        <p className="mx-auto mt-[12px] max-w-[480px] text-[15px] leading-[1.7] text-textItemBlur">
          Create your free account and schedule your first post in minutes.
        </p>
        <a
          href={`${BRAND_FRONTEND_URL}/auth/register`}
          className="mt-[24px] inline-block rounded-full bg-btnPrimary px-[24px] py-[12px] text-[15px] font-semibold text-white hover:bg-btnPrimaryHover"
        >
          Sign up free
        </a>
      </section>

      <p className="pb-[32px] text-center text-[13px] leading-[1.7] text-textItemBlur">
        Vinsmoke Media is free software, licensed under the GNU Affero General
        Public License v3.0 —{' '}
        <a
          href="https://github.com/shahzeb-pyc/vinsmoke-media"
          className="text-btnPrimary hover:text-btnPrimaryHover hover:underline"
        >
          view the source code
        </a>
        .
      </p>
    </div>
  );
}
