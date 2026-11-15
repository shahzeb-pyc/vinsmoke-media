import { Metadata } from 'next';
import { Agent } from '@gitroom/frontend/components/agents/agent';
import { BRAND_NAME } from '@gitroom/helpers/utils/is.general.server.side';
export const metadata: Metadata = {
  title: `${BRAND_NAME} Agent`,
  description: 'agents',
};
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Agent>{children}</Agent>;
}
