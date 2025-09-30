import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '../../app.interfaces';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-card-product',
  imports: [CurrencyPipe],
  template: `<div class="card shadow rounded-4" >
                <img class="card-img-top" [src]="item.img_url" alt="Title" />
                <div class="card-body">
                    <h4 class="card-title">{{item.name}}</h4>
                    <p class="card-text">{{item.description}}</p>
                    <h5 class="card-text ">{{ item.price | currency }}</h5>
                    <button class="btn bg-success">Comprar</button>
                    <button class="btn bg-danger ms-2 fc-white">Favoritos</button>
                </div>
            </div>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardProductComponent {
  @Input({required: true}) item!: Product;
}
