import Sidebar from "@/components/sidebar";
import AddElementForm from "@/components/addElementForm";
import Table from "@/components/table";
// import Map from "@/components/map";
import { GET } from "@/utils/http";
import { shuttlesDataType } from "@/mocks/dataType";
import { popupType } from "@/mocks/dataType";
import { useState, useEffect } from "react";
import Popup from "@/components/popup";
import * as React from "react";
import dynamic from "next/dynamic";
// import Map from "react-map-gl/maplibre";
// import Map from "@/components/map";

const Map = dynamic(() => import("@/components/map"), { ssr: false });

export default function Dashboard() {
  const [dataShuttles, setDataShuttles] = useState<shuttlesDataType[]>([]);
  const [menuView, setMenuView] = useState<string>("view");
  const [popupSettings, setPopupSettings] = useState<popupType>({
    text: "ciao",
    isActive: false,
    animation: "",
  });

  useEffect(() => {
    GET("shuttles").then((data) => setDataShuttles(data));
  }, []);

  return (
    <main className="flex ">
      <Sidebar setMenuView={setMenuView} />
      <section className="flex flex-col  items-center  w-full py-10 px-4">
        <Popup popupSettings={popupSettings} />
        {menuView === "view" && (
          <>
            <h2 className="self-start mb-3 text-text text-xl font-semibold">
              Shuttle attivi
            </h2>
            <Table dataShuttles={dataShuttles} />
          </>
        )}
        {menuView === "add" && (
          <>
            <h2 className="self-start mb-3 text-text text-xl font-semibold">
              Inserisci un nuovo shuttle
            </h2>
            <AddElementForm
              dataShuttles={dataShuttles}
              setPopupSettings={setPopupSettings}
            />
          </>
        )}
        {menuView === "track" && (
          <>
            <h2 className="self-start mb-3 text-text text-xl font-semibold">
              Posizione ISS in tempo reale
            </h2>
            <Map />
          </>
        )}
      </section>
    </main>
  );
}
