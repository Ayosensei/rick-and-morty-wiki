import Link from "next/link";

async function getCharacters() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json()
  return data.results;
}

export default async function Home() {
  const characters = await getCharacters();

  return (
    <>
      <div className="p-10">
        <h1 className="text-3xl font-bold text-center mb-10">
          Rick and Morty
        </h1>

        {/* Character Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {characters.map((character) => (
            <Link href={`/character/${character.id}`} key={character.id}>
              <div className="border border-gray-300 rounded-lg p-4 hover:shadow-lg transition">
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-full rounded mb-4"
                />
                <h2 className="text-xl font-bold text-center">{character.name}</h2>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </>
  )
}