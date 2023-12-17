import CONFIG from "./config";

const fetchData = async (endpoint, options = {}) => {
  const response = await fetch(`${CONFIG.BASE_URL}${endpoint}`, options);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};

const postData = async (headers, endpoint, body) => {
  const response = await fetch(`${CONFIG.BASE_URL}${endpoint}`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: headers,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};

const putData = async (headers, endpoint, body) => {
  const response = await fetch(`${CONFIG.BASE_URL}${endpoint}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: headers,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};

const deleteData = async (headers, endpoint) => {
  const response = await fetch(`${CONFIG.BASE_URL}${endpoint}`, {
    method: "DELETE",
    headers: headers,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};

export const getDoctors = async (page) => {
  return fetchData(`/doctor?page=${page}`);
};

export const getArticleBySlug = async (slug) => {
  return fetchData(`/article/${slug}`);
};

export const getArticles = async (currentPage = 1, hit) => {
  return fetchData(`/article?page=${currentPage}&${hit ? `?hit=${hit}` : ""}`);
};

export const getUserArticles = async (data) => {
  const { id, token } = data;

  return fetchData(`/article/user/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getPopularArticle = async (currentPage = 1, hit = 50) => {
  return fetchData(`/article?page=${currentPage}&${hit ? `?hit=${hit}` : ""}`);
};

export const getDetailUser = async (id) => {
  return fetchData(`/user/${id}`);
};

export const getDetailDokter = async (id) => {
  return fetchData(`/doctor/${id}`);
};

export const postArticle = async ({
  title,
  summary,
  category,
  content,
  imageUrl,
  token,
}) => {
  return postData(
    {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    "/article",
    {
      title,
      summary,
      category,
      content,
      imageUrl,
    }
  );
};

export const updateUserProfile = async ({
  id,
  firstName,
  lastName,
  about,
  job,
  praktik,
  pengalaman,
  followers,
  alumnus,
  token,
}) => {
  console.log(token);
  return putData(
    {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    `/doctor/${id}`,
    {
      firstName,
      lastName,
      about,
      job,
      praktik,
      pengalaman,
      followers,
      alumnus,
    }
  );
};

export const deleteArticle = async ({ id, token }) => {
  return deleteData(
    {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    `/article/${id}`
  );
};
