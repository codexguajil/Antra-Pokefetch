import { Component, OnInit, OnDestroy } from '@angular/core';
import { Input } from '@angular/core';
import { Pokemon } from '../interface/pokemon';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnDestroy {
@Input('item') pokemon!: Pokemon
display: boolean = false;
selectedId: number | undefined;

  constructor(private router: Router, private route: ActivatedRoute, private service: PokemonService) { }

  ngOnInit(): void {
    
  }

  ngOnDestroy() {
   
  }

  displayModal(e : any) {
    this.selectedId = Number(e.currentTarget.id);
    this.display = !this.display;
  }

  routePage(pokemon: Pokemon) {
    this.router.navigate(['card:id', {id: this.selectedId}])
  }

}
