import Sidebar from "@/components/sidebar";
import AddPopup from "@/components/addPopup";
import Table from "@/components/table";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center ">
      <Sidebar />
      {/* <AddPopup /> */}

      <Table />
    </main>
  );
}
