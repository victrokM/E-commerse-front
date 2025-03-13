import PageLayout from '@/layouts/PageLayout';
// import Principal from "./principal";
import Showcase from '@/components/Showcase';
import Principal from '@/components/Principal';
import Offers from '@/components/Offers';

export default function Home() {
  return (
    <PageLayout>
      <Principal />
      <Showcase />
      <Offers />
    </PageLayout>
  );
}
