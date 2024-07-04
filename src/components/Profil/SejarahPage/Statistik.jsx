import { useState, useEffect, useRef } from "react";

const Statistik = () => {
  const [countProgramStudi, setCountProgramStudi] = useState(0);
  const [countDosenTetap, setCountDosenTetap] = useState(0);
  const [countMahasiswa, setCountMahasiswa] = useState(0);
  const [countAlumni, setCountAlumni] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const targetProgramStudi = 2;
  const targetDosenTetap = 16;
  const targetMahasiswa = 535;
  const targetAlumni = 486;

  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const increment = (setCount, target) => {
      let count = 0;
      const interval = setInterval(() => {
        count += Math.ceil(target / 100);
        setCount(count > target ? target : count);
        if (count >= target) {
          clearInterval(interval);
        }
      }, 20);
    };

    increment(setCountProgramStudi, targetProgramStudi);
    increment(setCountDosenTetap, targetDosenTetap);
    increment(setCountMahasiswa, targetMahasiswa);
    increment(setCountAlumni, targetAlumni);
  }, [isVisible]);

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-red-700 to-black text-white py-20 my-20">
      <div
        ref={counterRef}
        className="flex flex-col items-center px-4 justify-center gap-2"
      >
        <h1 className="text-2xl lg:text-[30px]">Statistik STHG</h1>
        <p className="text-center font-bold">
          Sejak 1997, STT Cipasung telah berkarya di dunia pendidikan teknologi
          di Tasikmalaya
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 justify-center py-10">
        <div className="flex flex-col text-center">
          <span className="text-[70px] font-semibold">{countProgramStudi}</span>
          <span>Program Studi</span>
          <span className="text-sm px-4">
            Program Studi Teknik Industri dan Informatika
          </span>
        </div>
        <div className="flex flex-col text-center">
          <span className="text-[70px] font-semibold">{countDosenTetap}</span>
          <span>Dosen Tetap</span>
          <span className="px-4 text-sm">
            Dosen Tetap yang ber-homebase di STT Cipasung
          </span>
        </div>
        <div className="flex flex-col text-center">
          <span className="text-[70px] font-semibold">{countMahasiswa}</span>
          <span>Mahasiswa</span>
          <span className="text-sm px-4">
            Mahasiswa seluruh angkatan di STT Cipasung
          </span>
        </div>
        <div className="flex flex-col text-center">
          <span className="text-[70px] font-semibold">{countAlumni}</span>
          <span>Alumni</span>
          <span className="text-sm px-4">
            Lulusan STT Cipasung sejak berdiri tahun 1997 sampai 2018
          </span>
        </div>
      </div>
    </div>
  );
};

export default Statistik;
