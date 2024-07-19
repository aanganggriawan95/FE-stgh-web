import { Carousel } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import JudulInformasi from "../../../Item/judulInformasi";

export function Pengmuman() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://sthg.labtekcmr.com/api/cms/getPengumuman"
        );
        setData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <div>
      <JudulInformasi title={"Pengumuman"} />
      <Carousel transition={{ duration: 2 }} className="">
        {data.map((item, key) => (
          <img
            key={key}
            src={item.foto}
            alt="image 1"
            className="h-full w-full object-cover"
          />
        ))}
      </Carousel>
    </div>
  );
}
