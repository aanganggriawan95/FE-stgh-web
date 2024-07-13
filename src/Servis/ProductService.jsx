import axios from "axios";
const token = "3|jRCC39mbYstS3oraFVn4zzmmCk6ghJqY3p5Sz4Ae875828fb";

// Sebaiknya token disimpan dalam variabel lingkungan

export const StafService = {
  async getStaf() {
    try {
      const response = await axios.get(
        "https://sthg.labtekcmr.com/api/cms/getStaf",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data.data;
    } catch (error) {
      console.error("Error fetching staff data:", error);
      throw error; // atau handle error sesuai kebutuhan Anda
    }
  },

  getStafSmall() {
    return this.getStaf(); // Jika tidak ada perbedaan, cukup panggil getStaf
  },
};
