import Sidebar from "@/components/sidebar";
import AddElementForm from "@/components/addElementForm";
import Table from "@/components/table";

export default function Home() {
  return (
    <main className="flex ">
      <Sidebar />
      <section className="flex flex-col  items-center  w-full">
        {/* <AddElementForm /> */}

        <Table />
      </section>
    </main>
  );
}
