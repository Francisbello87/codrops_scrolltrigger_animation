import Column from "@/components/Column/Column";
import Layout from "@/components/Layout/Layout";
import Loader from "@/components/Loader/Loader";
import { useLoading } from "@/hooks/useLoading";
import useSmoothScroll from "@/utils/useSmoothScroll";
import { useScrollAnimations_4 } from "@/hooks/useScrollAnimation_4";

export default function Two() {
  const isLoading = useLoading();
  useSmoothScroll();

  useScrollAnimations_4(isLoading);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <Layout>
      <div id="#main-container" className="columns demo-4">
        <Column
          images={[
            "/img/10.jpg",
            "/img/2.jpg",
            "/img/3.jpg",
            "/img/6.jpg",
            "/img/4.jpg",
            "/img/7.jpg",
            "/img/8.jpg",
          ]}
        />
        <Column
          images={[
            "/img/30.jpg",
            "/img/32.jpg",
            "/img/13.jpg",
            "/img/16.jpg",
            "/img/25.jpg",
            "/img/10.jpg",
            "/img/9.jpg",
          ]}
        />
        <Column
          images={[
            "/img/17.jpg",
            "/img/11.jpg",
            "/img/28.jpg",
            "/img/40.jpg",
            "/img/15.jpg",
            "/img/24.jpg",
            "/img/19.jpg",
          ]}
        />
        <Column
          images={[
            "/img/27.jpg",
            "/img/21.jpg",
            "/img/28.jpg",
            "/img/30.jpg",
            "/img/29.jpg",
            "/img/25.jpg",
            "/img/39.jpg",
          ]}
        />
        <Column
          images={[
            "/img/27.jpg",
            "/img/21.jpg",
            "/img/28.jpg",
            "/img/30.jpg",
            "/img/29.jpg",
            "/img/25.jpg",
            "/img/39.jpg",
          ]}
        />
        <Column
          images={[
            "/img/27.jpg",
            "/img/21.jpg",
            "/img/28.jpg",
            "/img/30.jpg",
            "/img/29.jpg",
            "/img/25.jpg",
            "/img/39.jpg",
          ]}
        />
        <Column
          images={[
            "/img/22.jpg",
            "/img/12.jpg",
            "/img/39.jpg",
            "/img/26.jpg",
            "/img/34.jpg",
            "/img/27.jpg",
            "/img/28.jpg",
          ]}
        />
      </div>
    </Layout>
  );
}
