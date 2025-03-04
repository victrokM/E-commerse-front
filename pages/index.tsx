import PageLayout from "@/layouts/PageLayout";
import Principal from "./principal";
import Showcase from "@/components/Showcase";

export default function Home() {
  return (
    <PageLayout>
      {/* <div>Hola</div> */}
      <Principal />
      <Showcase />
    </PageLayout>
  );
}
