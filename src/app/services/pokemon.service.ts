import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../interface/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  public pokemon!: Pokemon
  
  constructor(private http : HttpClient) { }
  
  getPokemon(str: string) {
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${str}`)
  }
}
