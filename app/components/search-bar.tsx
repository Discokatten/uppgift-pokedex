export default function SearchBar() {
  return (
    <section className="p-9 bg-white flex justify-around">
      <input
        className="bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        placeholder="Search for a Pokémon"
      />
    </section>
  );
}
