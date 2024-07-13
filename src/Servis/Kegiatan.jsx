import axios from "axios";

const token = "3|jRCC39mbYstS3oraFVn4zzmmCk6ghJqY3p5Sz4Ae875828fb";

// Sebaiknya token disimpan dalam variabel lingkungan

const KegiatanAPI = {
  async getKegiatan() {
    try {
      const response = await axios.get(
        "https://sthg.labtekcmr.com/api/cms/getKegiatan",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  },

  getKegiatanSmall() {
    return this.getKegiatan();
  },
};

export default KegiatanAPI;
