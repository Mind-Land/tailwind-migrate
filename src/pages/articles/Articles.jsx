import { TextInput, Button, Badge } from "flowbite-react";
import {
  HiSearch,
  HiChatAlt2,
  HiUserGroup,
  HiTrendingUp,
} from "react-icons/hi";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import heroarticle from "../../assets/heroarticle.png";
import Showarticles from "./Showarticles";
import artikel from "/img/hero/artikel.png"

function Articles() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const hadnleButtonSearch = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/user/article");
    }
  }, [navigate]);

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
              <img src={artikel} alt="mockup" className="" />
            </div>
          </div>
        </section>
      </div>
      <Showarticles />
    </>
  );
}

export default Articles;
