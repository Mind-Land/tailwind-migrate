import { TextInput, Button, Badge, Dropdown } from "flowbite-react";
import {
  HiSearch,
  HiChatAlt2,
  HiUserGroup,
  HiTrendingUp,
} from "react-icons/hi";
import HeroArticle from "../../assets/lottie/heroArticle.json";
import Lottie from "lottie-react";
import Getarticles from "../templates/Getarticles";
import Getpopulararticles from "../templates/Getpopulararticles";

import { useState } from "react";

function Articles() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [articleCount, setArticleCount] = useState(0);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const hadnleButtonSearch = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleArticleCountChange = (count) => {
    setArticleCount(count);
  };

  return (
    <>
      <div className="h-screen">
        <section className="bg-white dark:from-gray-800 dark:bg-gray-900  h-full flex flex-col items-center justify-center">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div
              className="mr-auto place-self-center lg:col-span-7"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <h1 className="max-w-2xl text-color-primary-500 mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">
                Cari Artikel
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-100">
                tidak perlu cemas dengan kondisi kamu sekarang, setelah membaca
                kamu mungkin akan merasa lebih baik
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
              <div className="flex gap-2 mt-6">
                <TextInput
                  id=""
                  sizing="lg"
                  type="email"
                  placeholder="Taukah kamu pisang dapat.."
                  required
                  onChange={handleSearch}
                  value={searchTerm}
                  className="flex-1"
                />
                <Button
                  color="primary"
                  className="flex-2"
                  onClick={() => hadnleButtonSearch("article-section")}
                >
                  <HiSearch className="h-6 w-6" />
                </Button>
              </div>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <Lottie
                animationData={HeroArticle}
                alt="hero"
                data-aos="fade-left"
                data-aos-duration="1500"
              />
            </div>
          </div>
        </section>
      </div>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <section className="h-full flex flex-col items-center justify-center w-full">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 w-full">
            <h3 className="text-2xl font-bold dark:text-white mb-6 text-color-primary-500">
              Artikel Populer
            </h3>
            <div className="grid gap-8 lg:grid-cols-2 mb-12">
              <Getpopulararticles />
            </div>
            <h3
              className="text-2xl font-bold dark:text-white mb-6 text-color-primary-500"
              id="article-section"
            >
              Cari Artikel
            </h3>
            <div className="mx-auto text-center lg:mb-10 mb-8">
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-row justify-between items-center">
                <div className="flex gap-2 flex-grow">
                  <TextInput
                    id=""
                    sizing="sm"
                    type="email"
                    placeholder="Judul/Author"
                    required
                    icon={HiSearch}
                    onChange={handleSearch}
                    value={searchTerm}
                    className="flex-grow md:flex-grow-0 w-1/3"
                  />
                  <div className="hidden md:block">
                    <Dropdown
                      label={
                        selectedCategory === ""
                          ? "Semua Kategori"
                          : selectedCategory
                      }
                      size="sm"
                      color="primary"
                    >
                      <Dropdown.Item
                        onClick={() => handleCategorySelect("mental_health")}
                      >
                        Mental Health
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleCategorySelect("anxiety")}
                      >
                        Anxiety
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleCategorySelect("introvert")}
                      >
                        Introvert
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handleCategorySelect("")}>
                        Semua kategori
                      </Dropdown.Item>
                    </Dropdown>
                  </div>
                </div>
                <div className="hidden md:block">
                  <p className="text-gray-700 dark:text-gray-400 flex items-center text-sm">
                    Menampilkan {articleCount} artikel
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-3" data-aos="fade-up">
              <Getarticles
                searchTerm={searchTerm}
                selectedCategory={selectedCategory}
                onArticleCountChange={handleArticleCountChange}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Articles;
