
export default async function SinglePokemon({
  params,
  searchParams,
}: {
  params: Promise<{ id: number }>;
  searchParams: Promise<{ query?: string }>;
}) {
  const { id } = await params;
  const { query } = await searchParams;
  // wants to acces value of params and search params
  return (
    <div>
      {" "}
      {id}
      {/* {<Card2 id={id} />}{" "} */}
    </div>
  );
}
