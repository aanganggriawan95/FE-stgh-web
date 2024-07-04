import { useState, useEffect, useRef } from "react";

const NumberCounter = () => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    // Membuat observer untuk memonitor visibilitas elemen
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Atur threshold sesuai kebutuhan
    );

    // Mulai mengamati elemen
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    // Hentikan pengamatan ketika komponen tidak lagi ada
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let timer;
    // Memulai hitungan saat elemen terlihat
    if (isVisible && count < 100) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 10); // Ubah angka setiap detik (1000ms)
    }
    // Membersihkan interval ketika elemen tidak lagi terlihat atau hitungan selesai
    return () => clearInterval(timer);
  }, [isVisible, count]);

  return (
    <div ref={counterRef} style={{ margin: "900px" }}>
      <h1>Hitungan Berjalan</h1>
      <span>{count}</span>
    </div>
  );
};

export default NumberCounter;
