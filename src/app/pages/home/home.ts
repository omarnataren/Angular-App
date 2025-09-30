import { Component } from '@angular/core';
import { CardProductComponent } from '../../components/card_product/card_product.component';
import { Product } from '../../app.interfaces';

@Component({
  selector: 'app-home',
  imports: [ CardProductComponent ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  products : Product [] = [
    {
      id: 1,
      name: 'Hamburguesa Sencilla',
      description: 'Una deliciosa hamburguesa sencilla con todos los ingredientes clásicos.',
      price: 120,
      img_url: 'https://img.hogar.mapfre.es/wp-content/uploads/2018/09/hamburguesa-sencilla.jpg'
    },
    {
      id: 2,
      name: 'Hotdog',
      description: 'Un delicioso hotdog con todos los ingredientes clásicos.',
      price: 40,
      img_url: 'https://www.vvsupremo.com/wp-content/uploads/2016/02/900X570_Mexican-Style-Hot-Dogs.jpg'
    },
    {
      id: 3,
      name: 'Papas Fritas',
      description: 'Unas deliciosas papas fritas crujientes.',
      price: 50,
      img_url: 'https://www.recetasderechupete.com/wp-content/uploads/2023/12/Patatas-fritas-al-horno-portada-1200x828.jpg'
    },
    {
      id: 4,
      name: 'Quesadilla',
      description: 'Una deliciosa quesadilla con todos los ingredientes clásicos.',
      price: 5.99,
      img_url: 'https://www.vvsupremo.com/wp-content/uploads/2015/11/900X570_Two-Cheese-Quesadillas.jpg'
    },
    {
      id: 5,
      name: 'Tacos de Arrachera',
      description: 'Deliciosos tacos de arrachera con todos los ingredientes clásicos.',
      price: 5.99,
      img_url: 'https://img.hogar.mapfre.es/wp-content/uploads/2018/09/hamburguesa-sencilla.jpg'
    },
    {
      id: 6,
      name: 'Helado',
      description: 'Un delicioso helado con todos los ingredientes clásicos.',
      price: 5.99,
      img_url: 'https://easyways.cl/storage/20210330080108helado-de-chocolate.jpg'
    },
  ]
}
