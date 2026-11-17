import { ReactNode } from 'react';
import Link from 'next/link';
import { LogoTextComponent } from '@gitroom/frontend/components/ui/logo-text.component';
import {
  BRAND_DOMAIN,
  BRAND_FRONTEND_URL,
  BRAND_NAME,
} from '@gitroom/helpers/utils/is.general.server.side';

// Public shell for the legal pages (Terms of Service, Privacy Policy).
// These pages must be reachable without an account, so this layout
// deliberately does NOT use the logged-in app shell (LayoutComponent).
export default function PublicLayout({ children }: { children: ReactNode }) {
  const year = new Date().getFullYear();
  return (
    <div className="bg-newBgColor min-h-screen text-newTextColor flex flex-col">
      <header className="border-b border-newTableBorder">
        <div className="mx-auto w-full max-w-[860px] px-[20px] py-[16px] flex items-center justify-between gap-[16px]">
          <Link
            href="/"
            className="flex items-center gap-[10px] text-newTextColor"
            aria-label={`${BRAND_NAME} home`}
          >
            <LogoTextComponent />
          </Link>
          <Link
            href={BRAND_FRONTEND_URL}
            className="text-[14px] font-medium text-btnPrimary hover:text-btnPrimaryHover"
          >
            Open the app
          </Link>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-newTableBorder">
        <div className="mx-auto w-full max-w-[860px] px-[20px] py-[20px] flex flex-wrap items-center gap-x-[20px] gap-y-[8px] text-[14px] text-textItemBlur">
          <span>
            &copy; {year} {BRAND_NAME} ({BRAND_DOMAIN})
          </span>
          <Link href="/terms" className="hover:text-newTextColor">
            Terms of Service
          </Link>
          <Link href="/privacy" className="hover:text-newTextColor">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}
