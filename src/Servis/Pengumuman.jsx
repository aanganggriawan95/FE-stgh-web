import axios from "axios";
const token = "4|jRVYMzYZaUnZwdIm5D21i5PloINkwTCN8urF9ICz9fdc0f2a";
export const Pengumuman = {
  async getInfo() {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/cms/getPengumuman",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching staff data:", error);
      throw error;
    }
  },

  getPengumuman() {
    return this.getInfo();
  },
};
