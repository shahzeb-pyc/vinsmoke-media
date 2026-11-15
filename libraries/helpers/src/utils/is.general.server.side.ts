// Vinsmoke Media brand — single brand constant for the fork.
//
// The upstream code had a two-way Postiz-vs-Gitroom switch driven by the
// IS_GENERAL env var. This fork is Vinsmoke Media only, so the switch is
// collapsed: the brand name, domain and default frontend URL are constants,
// and the behaviour that used to be the IS_GENERAL=true (Postiz) path is now
// the only behaviour. isGeneralServerSide() is kept (always true) so existing
// call sites keep compiling; new code should use BRAND_NAME directly.
export const BRAND_NAME = 'Vinsmoke Media';
export const BRAND_DOMAIN = 'vinsmokemedia.online';
export const BRAND_FRONTEND_URL = 'https://app.vinsmokemedia.online';

export const isGeneralServerSide = () => {
  return true;
};
