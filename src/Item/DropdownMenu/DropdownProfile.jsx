import { useState, useEffect } from "react";
import { Dropdown } from "primereact/dropdown";
import { useNavigate } from "react-router-dom";

export default function DropdownProfile() {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState(null);

  const cities = [
    { name: "VISI MISI", code: "profil/visi&misi" },
    { name: "TENTANG STHG", code: "profil/sejarah" },
    { name: "FASILITAS", code: "profil/pasilitas" },
    { name: "AKREDITASI", code: "profil/akreditasi" },
  ];

  useEffect(() => {
    if (selectedCity) {
      navigate(`/${selectedCity.code}`);
    }
  }, [selectedCity, navigate]);

  return (
    <div className="card flex flex-column align-items-center outline-none">
      <Dropdown
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.value)}
        options={cities}
        optionLabel="name"
        placeholder="Profile"
        checkmark={true}
        highlightOnSelect={false}
        className="custom-placeholder flex uppercase bg-transparent text-sm" // Tambahkan kelas khusus di sini
      />
    </div>
  );
}
