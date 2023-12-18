import { TextInput, Dropdown } from "flowbite-react";
import { HiSearch } from "react-icons/hi";

import Getarticles from "../templates/Getarticles";
import Getpopulararticles from "../templates/Getpopulararticles";

import { useState } from "react";

function Articleshow() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [articleCount, setArticleCount] = useState(0);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleArticleCountChange = (count) => {
    setArticleCount(count);
  };

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <section className="h-full flex flex-col items-center justify-center w-full">
          <div className="py-8 mx-auto max-w-screen-xl lg:py-16  w-full">
            <h3 className="text-2xl font-bold dark:text-white mb-6 text-color-primary-500">
              Artikel Populer
            </h3>
            <div className="grid gap-8 lg:grid-cols-2 mb-12">
              <Getpopulararticles />
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
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

            <Getarticles
              searchTerm={searchTerm}
              selectedCategory={selectedCategory}
              onArticleCountChange={handleArticleCountChange}
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default Articleshow;
