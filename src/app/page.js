'use client';
import Header from './components/Header/Header';
import Pokemon from './components/Pokemon/Pokemon';

export default function PokemonList() {
  return (
    <div className="p-5">
      <Header />
      <h1 className="text-4xl mt-4 mb-4">Pokédex</h1>
      <Pokemon />
    </div>
  );
}
