import { TextInput, Button, Badge, Dropdown } from "flowbite-react";
import {
  HiSearch,
  HiChatAlt2,
  HiUserGroup,
  HiTrendingUp,
} from "react-icons/hi";
import heroarticle from "../../assets/heroarticle.png";
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
    if(section) {
      section.scrollIntoView({behavior: 'smooth'})
    }
  }

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
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl text-color-primary-500 mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">
                Cari Artikel
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-100">
                tidak perlu cemas dengan kondisi kamu sekarang, setelah membaca
                kamu mungkin akan merasa lebih baik
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge color="primary" icon={HiChatAlt2}  >
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
                <Button color="primary" className="flex-2"  onClick={() => hadnleButtonSearch('article-section')}>
                  <HiSearch className="h-6 w-6" />
                </Button>
              </div>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img src={heroarticle} alt="mockup" className="" />
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
            <h3 className="text-2xl font-bold dark:text-white mb-6 text-color-primary-500" id="article-section">
              Cari Artikel
            </h3>
            <div className="mx-auto text-center lg:mb-10 mb-8"  >
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
                    <Dropdown label={selectedCategory === '' ? 'Semua Kategori' : selectedCategory} size="sm" color="primary">
                      <Dropdown.Item onClick={() => handleCategorySelect('mental_health')} >
                        Mental Health
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handleCategorySelect('anxiety')}>
                      Anxiety
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handleCategorySelect('introvert')}>
                      Introvert
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handleCategorySelect('')}>
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
            <div className="grid gap-6 lg:grid-cols-3">
              <Getarticles searchTerm={searchTerm} selectedCategory={selectedCategory} onArticleCountChange={handleArticleCountChange}/>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Articles;

{
  /* <article className="flex-2 p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <svg
                    className="mr-1 w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                  </svg>
                  Tutorial
                </span>
                <span className="text-sm">14 days ago</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">How to quickly deploy a static website</a>
              </h2>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                Static websites are now used to bootstrap lots of websites and
                are becoming the basis for a variety of tools that even
                influence both web designers and developers influence both web
                designers and developers.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img
                    className="w-7 h-7 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                    alt="Jese Leos avatar"
                  />
                  <span className="font-medium dark:text-white">Jese Leos</span>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                  Read more
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </article> */
}
