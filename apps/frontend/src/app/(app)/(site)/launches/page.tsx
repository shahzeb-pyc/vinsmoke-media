export const dynamic = 'force-dynamic';
import { LaunchesComponent } from '@gitroom/frontend/components/launches/launches.component';
import { Metadata } from 'next';
import { BRAND_NAME } from '@gitroom/helpers/utils/is.general.server.side';
export const metadata: Metadata = {
  title: `${BRAND_NAME} Calendar`,
  description: '',
};
export default async function Index() {
  return <LaunchesComponent />;
}
