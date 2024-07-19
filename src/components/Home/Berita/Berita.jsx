import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import JudulInformasi from "../../../Item/judulInformasi";

export function BeritaSTHG() {
  const [berita, setBerita] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://sthg.labtekcmr.com/api/cms/getBerita"
        );
        setBerita(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  console.log(berita);
  return (
    <div className="w-full">
      <JudulInformasi title={"Kegiatan STHG"} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {berita.map((berita, key) => (
          <a key={key} href="">
            <Card className="max-w-[24rem] hover:scale-105 transition-all ease-in-out overflow-hidden">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <img src={berita.foto} alt="ui/ux review check" />
              </CardHeader>
              <CardBody>
                <Typography variant="h4" color="blue-gray">
                  {berita.judul}
                </Typography>
                <Typography
                  variant="lead"
                  color="gray"
                  className="mt-3 font-normal"
                >
                  {berita.deskripsi}
                </Typography>
              </CardBody>
              <CardFooter className="flex items-center justify-between">
                <div className="flex items-center -space-x-3">
                  <Tooltip content="Natali Craig">
                    <Avatar
                      size="sm"
                      variant="circular"
                      alt="natali craig"
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                      className="border-2 border-white hover:z-10"
                    />
                  </Tooltip>
                  <Tooltip content="Tania Andrew">
                    <Avatar
                      size="sm"
                      variant="circular"
                      alt="tania andrew"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      className="border-2 border-white hover:z-10"
                    />
                  </Tooltip>
                </div>
                <Typography className="font-normal">
                  {berita.tanggal_berita}
                </Typography>
              </CardFooter>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
}
