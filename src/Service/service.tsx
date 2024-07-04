import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8000/api", // Ganti dengan base URL API Anda
  headers: {
    "Content-Type": "application/json",
  },
});

// Fungsi untuk menambahkan token ke header Authorization
export const setAuthToken = (token: string | null) => {
  if (token) {
    apiClient.defaults.headers.common["Authorization"] = token;
  } else {
    delete apiClient.defaults.headers.common["Authorization"];
  }
};

// Fungsi untuk melakukan permintaan sambutan
// export const sambutan = async () => {
//   try {
//     const response = await apiClient.get("/cms/getSambutan");
//     return response.data;
//   } catch (error) {
//     throw new Error("Failed to fetch sambutan.");
//   }
// };

export const detailSambutan = async (id) => {
  try {
    const response = await apiClient.post("/cms/detailSambutan", {
       id });
    return response.data;
  } catch (error) {
    throw new Error("Gagal mengambil detail sambutan.");
  }
};
