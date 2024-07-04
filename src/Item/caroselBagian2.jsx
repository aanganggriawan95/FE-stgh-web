import "flowbite";
import "animate.css";
import { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import { Tag } from "primereact/tag";
import { StafService } from "../Servis/ProductService";

export default function CircularDemo() {
  const [staf, setStaf] = useState([]);
  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const getSeverity = (staf) => {
    switch (staf.inventoryStatus) {
      case "INSTOCK":
        return "success";
      case "LOWSTOCK":
        return "warning";
      case "OUTOFSTOCK":
        return "danger";
      default:
        return null;
    }
  };

  useEffect(() => {
    StafService.getStafSmall()
      .then((data) => setStaf(data))
      .catch((error) => {
        console.error("Error fetching staff data:", error);
        // Anda bisa menambahkan logika untuk menampilkan pesan kesalahan kepada pengguna
      });
  }, []);

  const productTemplate = (staf) => {
    return (
      <div className="border-1 surface-border m-2 text-center py-10 px-3 md:px-0 h-[500px] w-auto md:w-full flex flex-col md:flex-row ">
        <div className="mb-3 w-1/2 flex items-center justify-center">
          <img
            src={staf.foto} // Menggunakan URL gambar dari data staf
            alt={staf.nama}
            className="shadow-2 rounded-full h-full w-[70%] object-cover"
          />
        </div>
        <div className="w-1/2">
          <h4 className="mb-1">{staf.nama}</h4>
          <h6 className="mt-0 mb-3">{staf.jabatan}</h6>
          <Tag value={staf.inventoryStatus} severity={getSeverity(staf)}></Tag>
          <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
            <Button icon="pi pi-search" className="p-button p-button-rounded" />
            <Button
              icon="pi pi-star-fill"
              className="p-button-success p-button-rounded bg-white"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="card">
      <Carousel
        value={staf}
        numVisible={1}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        className="custom-carousel"
        circular
        autoplayInterval={3000}
        itemTemplate={productTemplate}
      />
    </div>
  );
}
