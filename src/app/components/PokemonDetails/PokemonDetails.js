import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

export default function PokemonDetails({ pokemonDetails }) {
  return (
    <>
      {pokemonDetails.map((pokemon) => (
        <div
          key={pokemon.id}
          className={
            pokemon.types[0].type.name === 'fire'
              ? 'bg-orange-400'
              : pokemon.types[0].type.name === 'water'
              ? 'bg-blue-400'
              : pokemon.types[0].type.name === 'grass'
              ? 'bg-green-400'
              : pokemon.types[0].type.name === 'bug'
              ? 'bg-green-700'
              : pokemon.types[0].type.name === 'normal'
              ? 'bg-slate-400'
              : ''
          }
        >
          <div className="text-white p-4">
            <div className="capitalize">
              <h1 className="text-4xl">{pokemon.name}</h1>
            </div>
            <div className="flex row gap-2 mt-4 mb-4">
              <div className="bg-indigo-500 shadow-lg shadow-indigo-500/50 p-2 rounded-lg text-sm">
                Height: {pokemon.height}
              </div>
              <div className="bg-indigo-500 shadow-lg shadow-indigo-500/50 p-2 rounded-lg text-sm">
                Weight: {pokemon.weight}
              </div>
            </div>
            <div className="bg-white text-black rounded-lg p-4">
              {pokemon.stats.map((stat) => (
                <div key={uuidv4()}>
                  <div className="capitalize flex row items-center gap-2">
                    <table>
                      <tr>
                        <td width={110}>{stat.stat.name}</td>
                        <td width={40}>{stat.base_stat}</td>
                        <td width={40}>
                          <div
                            style={{
                              width: `${stat.base_stat}px`,
                              height: '0.5rem',
                              backgroundColor: `${
                                stat.base_stat <= 29
                                  ? 'red'
                                  : stat.base_stat <= 60
                                  ? 'yellow'
                                  : 'green'
                              }`,
                            }}
                          ></div>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <Image
                priority
                alt={pokemon.name}
                height={300}
                width={300}
                src={pokemon.sprites.other.home.front_default}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
