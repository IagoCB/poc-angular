import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { HeaderService } from './../../components/template/header/header.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Produtos',
      icon: 'storefront',
      routeUrl: '/products'
    }
  }

  navigateToCreate(): void {
    this.router.navigate(['/products/create'])
  }

}
