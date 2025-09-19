export default async function SinglePokemon({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;

  // wants to acces value of params and search params
  return <div> {id}</div>;
}
