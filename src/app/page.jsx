import Image from "next/image";

export default function Home() {
  return (
    <form className="flex flex-col gap-3 justify-center items-center">
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
      />
      <button className="bg-green-600 font-bold text-white px-6 py-3 w-fit">
        ADD TODO
      </button>
    </form>
  );
}
