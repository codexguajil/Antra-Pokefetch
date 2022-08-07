import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Pokemon } from '../interface/pokemon';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-selectedcard',
  templateUrl: './selectedcard.component.html',
  styleUrls: ['./selectedcard.component.scss']
})
export class SelectedcardComponent implements OnInit, OnDestroy {
  pokemon!: Pokemon;
  id!: string | null
  private _subscription!:Subscription

  constructor(private route: ActivatedRoute, private router: Router, private service: PokemonService ) { }

  ngOnInit(): void {
    this._subscription = this.route.paramMap.subscribe(param => {
      this.id = param.get('id');
      this.service.getPokemon(this.id!).subscribe((data:Pokemon) => {
        this.pokemon = data;
      });
    })
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  routePage() {
    this.router.navigate(['/home-component'], {replaceUrl: true})
  }
}
