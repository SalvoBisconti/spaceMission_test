import Sidebar from "@/components/sidebar";
import AddElementForm from "@/components/addElementForm";
import Table from "@/components/table";
import Map from "@/components/map";
import { GET } from "@/utils/http";
import { shuttlesDataType } from "@/mocks/dataType";
import { useState, useEffect } from "react";

export default function Home() {
  const [dataShuttles, setDataShuttles] = useState<shuttlesDataType[]>([]);

  useEffect(() => {
    GET("shuttles").then((data) => setDataShuttles(data));
  }, []);

  const ISSData = {
    name: "iss",
    id: 25544,
    latitude: -48.297331139348,
    longitude: -106.73686021548,
    altitude: 426.70166092797,
    velocity: 27566.507974614,
    visibility: "eclipsed",
    footprint: 4541.4025544911,
    timestamp: 1717584905,
    daynum: 2460466.954919,
    solar_lat: 22.625181001928,
    solar_lon: 15.882158988019,
    units: "kilometers",
  };

  return (
    <main className="flex ">
      <Sidebar />
      <section className="flex flex-col  items-center  w-full">
        {/* <AddElementForm
          dataShuttles={dataShuttles}
          setDataShuttles={setDataShuttles}
        />

        <Table dataShuttles={dataShuttles} /> */}
        <Map />
      </section>
    </main>
  );
}
