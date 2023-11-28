import CONFIG from "./config";

const fetchData = async (endpoint, options = {}) => {
  const response = await fetch(`${CONFIG.BASE_URL}${endpoint}`, options);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};

export const getArticles = async () => {
  return fetchData("/articles");
};