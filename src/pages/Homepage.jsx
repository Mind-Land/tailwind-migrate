import { Badge } from "flowbite-react";
import { HiChatAlt2, HiTrendingUp, HiUserGroup } from "react-icons/hi";
import Articlecard from "../components/Articlecard";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import HeroImage from "../assets/Hero.json";

import ArticlecardSkeleton from "../components/ArticlecardSkeleton";

const fetchArticles = async () => {
  const respon = await fetch("http://localhost:3000/articles");
  const data = await respon.json();
  return data;
};

function Homepage() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["ArticleQuery"],
    queryFn: fetchArticles,
  });

  const renderContent = () => {
    if (isLoading) {
      return (
        <>
          <ArticlecardSkeleton />
          <ArticlecardSkeleton />
        </>
      );
    }

    if (isError) {
      return <p>Error fetching data</p>;
    }

    return data.map((article) => (
      <Articlecard key={article.id} article={article} />
    ));
  };

  let naviget = useNavigate();
  return (
    <>
      <div className="h-screen">
        <section className="bg-gradient-to-br from-white via-color-primary-100 to-red-200 dark:from-gray-800 dark:via-color-primary-900 dark:to-gray-800  h-full flex flex-col items-center justify-center">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl text-color-primary-500 mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">
                Mindland
                <br />
                Teman Setia Kamu
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-100">
                Chat psikolog, test tingkat stress, forum diskusi, artikel
                kesehatan mental, dan chat bersama expoert.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-color-primary-500 hover:bg-color-primary-600 focus:ring-4 focus:ring-color-primary-300 dark:focus:ring-color-primary-900"
                onClick={() => naviget("/checknow")}
              >
                Periksa Sekarang
              </a>
              <p className="mt-6 mb-4 font-bold text-gray-600 dark:text-white">
                Layanan Favorite Kami
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge color="primary" icon={HiChatAlt2}>
                  Chat AI
                </Badge>
                <Badge color="primary" icon={HiUserGroup}>
                  Forum Diskusi
                </Badge>
                <Badge color="primary" icon={HiTrendingUp}>
                  Cek Tingkat Stress
                </Badge>
              </div>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <Lottie animationData={HeroImage} alt="hero" />
            </div>
          </div>
        </section>
      </div>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <section className="h-full flex flex-col items-center justify-center">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
              <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Article terbaru
              </h2>
              <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                Tidak perlu cemas dengan kondisi kamu sekarang, setelah membaca
                kamu mungkin akan merasa lebih baik
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">{renderContent()}</div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Homepage;
