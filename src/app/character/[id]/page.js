import Link from "next/link";

async function getCharacter(id) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    return response.json();
}

export default async function CharacterPage({ params }) {
    const { id } = await params;

    const character = await getCharacter(id);

    return (
        <div className="p-10 flex flex-col items-center">
            {/*Back Button */}
            <Link href="/" className="mb-10 text-blue-500 hover:underline">←Back to Home</Link>
            
            <div className="border border-gray-300 rounded-lg p-6 max-w-md w-full shadow-xl">
                <h1 className="text3xl font-bold mb-4 text-center">{character.name}</h1>

                <img 
                    src={character.image}
                    alt={character.name}
                    className="w-full rounded-lg mb-6"
                />
                <div>
                    <p><strong>Status:</strong> {character.status}</p>
                    <p><strong>Species:</strong> {character.species}</p>
                    <p><strong>Gender:</strong> {character.gender}</p>
                    <p><strong>Origin:</strong> {character.origin.name}</p>
                </div>
            </div>
        </div>
    )
}