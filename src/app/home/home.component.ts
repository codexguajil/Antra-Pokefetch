import { Component, OnInit, OnDestroy } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../interface/pokemon';
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pokemons: Pokemon[] = [];
  
  constructor(private service: PokemonService) { }
  
  ngOnInit(): void {
    this.getPokemon()
  }

  getPokemon() {
    const starterPokemon = [ "bulbasaur", "squirtle", "charmander" ]
    from(starterPokemon).subscribe(str => {
      this.service.getPokemon(str).subscribe((data:Pokemon) => {
        this.pokemons.push(data)
    })
  })

}

}
