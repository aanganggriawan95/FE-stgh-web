import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import { Tag } from "primereact/tag";
import { ProductService } from "../Servis/ProductService";

export default function CaroselBagian2() {
  const [products, setProducts] = useState([]);
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

  const getSeverity = (product) => {
    switch (product.inventoryStatus) {
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
    ProductService.getProductsSmall().then((data) =>
      setProducts(data.slice(0, 3))
    );
  }, []);

  const productTemplate = (product) => {
    return (
      <div className="surface-border border-round m-2 text-center py-5 px-3 flex h-screen items-center w-full">
        <div className="mb-3 w-1/2  h-screen flex items-center justify-start">
          <div className="bg-white border-[6px] rounded-full w-[80%] h-[80%] border-red-500">
            <img
              src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
              alt={product.name}
              className="w-full h-full shadow-2 rounded-full"
            />
          </div>
        </div>
        <div className="w-1/2 h-screen">
          <div className=" w-full h-full flex items-center">
            <div className=" flex flex-col items-start gap-6">
              <h1 className="text-5xl font-bold text-red-600">
                {product.category}
              </h1>
              <h4 className="text-5xl font-bold text-black text-start">
                {product.name}
              </h4>
              <h6 className="text-xl font-serif text-yellow-700 text-start">
                {product.description}
              </h6>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="card">
      <Carousel
        value={products}
        numVisible={3}
        numScroll={3}
        responsiveOptions={responsiveOptions}
        className="custom-carousel"
        circular
        autoplayInterval={3000}
        itemTemplate={productTemplate}
      />
    </div>
  );
}
