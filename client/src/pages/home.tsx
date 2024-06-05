import Sidebar from "@/components/sidebar";
import AddElementForm from "@/components/addElementForm";
import Table from "@/components/table";
import { GET } from "@/utils/http";
import { shuttlesDataType } from "@/mocks/dataType";
import { useState, useEffect } from "react";

export default function Home() {
  const [dataShuttles, setDataShuttles] = useState<shuttlesDataType[]>([]);

  useEffect(() => {
    GET("shuttles").then((data) => setDataShuttles(data));
  }, []);

  return (
    <main className="flex ">
      <Sidebar />
      <section className="flex flex-col  items-center  w-full">
        <AddElementForm
          dataShuttles={dataShuttles}
          setDataShuttles={setDataShuttles}
        />

        <Table dataShuttles={dataShuttles} />
      </section>
    </main>
  );
}
