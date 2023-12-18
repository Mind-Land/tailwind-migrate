import chatdokter from "../assets/icons/chatdokter.png";
import cekstress from "../assets/icons/cekstress.png";
import artikel from "../assets/icons/artikel.png";
import chatai from "../assets/icons/chatai.png";

export const MyFeature = [
  {
    id: 1,
    image: chatdokter,
    title: "Chat dokter",
    link: "/doctor",
  },
  {
    id: 2,
    image: cekstress,
    title: "Cek Depresi",
    link: "/checkdepression"
  },
  {
    id: 3,
    image: artikel,
    title: "Cek Kecemasan",
    link: "/checkanxiety"
  },
  {
    id: 4,
    image: chatai,
    title: "Chat AI",
    link: "/chatai",
  },
];

export const navLinks = [
  {
    id: 1,
    path: "/",
    text: "Beranda",
  },
  {
    id: 2,
    path: "/articles",
    text: "Artikel",
  },
  {
    id: 3,
    path: "/doctor",
    text: "Dokter",
  },
  {
    id: 4,
    path: "/about",
    text: "Tentang",
  },
  
];


export const people = [
  {
    id: 1,
    name: "Abdul Malik Matoha",
    role: "UI Designer / Frontend Developer",
    imageUrl: "img/avatar/malik.png",
  },
  {
    id: 2,
    name: "Mohamad Rafiq Daud",
    role: "Frontend Developer",
    imageUrl: "img/avatar/rafiq.jpg",
  },
  {
    id: 3,
    name: "M. Diki Iswari",
    role: "Frontend Developer",
    imageUrl: "img/avatar/diki.jpg",
  },
  {
    id: 4,
    name: "Yanuar Faturahman",
    role: "Backend Developer",
    imageUrl: "img/avatar/yanuar.jpg",
  },
  {
    id: 5,
    name: "Azmi Maulidan",
    role: "Frontend Developer",
    imageUrl: "img/avatar/azmi.png",
  },
];

export const navLinksAfterLogin = [
  {
    id: 1,
    path: "/user",
    text: "Beranda",
  },
  {
    id: 2,
    path: "/user/article",
    text: "Article",
  },
  {
    id: 3,
    path: "/user/dokter",
    text: "Dokter",
    icon: "HiUsers",
  },
  {
    id: 4,
    path: "/chatai",
    text: "Chat AI",
    icon: "HiGlobeAlt",
  },
];

export const sidebarLinks = [
  {
    id: 1,
    path: "/user",
    text: "Beranda",
    icon: "HiHome",
  },
  {
    id: 2,
    path: "/user/article",
    text: "Article",
    icon: "HiBookOpen",
  },
  {
    id: 3,
    path: "/user/dokter",
    text: "Dokter",
    icon: "HiUsers",
  },
  {
    id: 4,
    path: "/user/ai",
    text: "Chat Ai",
    icon: "HiGlobeAlt",
  },
];

export const faq = [
  {
    id: 1,
    title: "apa itu mindland?",
    desc: "Mindland, sebuah platform kesehatan mental menyediakan fitur-fitur seperti Chat AI, evaluasi tingkat depresi dan kecemasan berlebihan, konsultasi dengan tenaga medis, dan artikel khusus untuk pasien. Dengan akses mudah dan dukungan komprehensif, Mindland hadir sebagai sumber pertolongan pertama yang dapat diandalkan bagi kesehatan mental masyarakat.",
  },
  {
    id: 2,
    title: "Bagaimana artikel kesehatan mental dapat memberikan inspirasi?",
    desc: "LMindland menyajikan artikel kesehatan mental yang menginspirasi, memberikan wawasan, dan membantu pengguna mencapai keseimbangan emosional.",
  },
  {
    id: 3,
    title: "Apa yang dimaksud dengan Chat AI di Mindland?",
    desc: "Chat AI adalah fitur yang membantu pengguna menjaga kesejahteraan mental melalui interaksi percakapan dengan kecerdasan buatan.",
  },
  {
    id: 4,
    title: "Bagaimana beragam fitur di Mindland dapat membantu pengguna?",
    desc: "Mindland menyediakan fitur-fitur seperti Chat AI, artikel kesehatan mental, dan lainnya untuk membantu pengguna menemukan solusi terbaik dalam menjaga kesehatan mental.",
  },
  {
    id: 5,
    title: "Apakah kebebasan eksplorasi di Mindland memiliki batasan?",
    desc: "Tidak ada batasan dalam eksplorasi fitur di Mindland. Pengguna bebas menjelajahi dan memanfaatkan sumber daya yang tersedia sesuai kebutuhan mereka.",
  },
  {
    id: 6,
    title: "apakah Mindland mengutamakan kesejahteraan, kebebasan eksplorasi?",
    desc: "Mindland didesain untuk memberikan pengalaman holistik. Dengan fitur-fitur seperti Chat AI, artikel kesehatan mental, dan evaluasi cek mental, Mindland mendukung pengguna mencapai kesejahteraan dan keseimbangan dalam hidup. ",
  },
];
