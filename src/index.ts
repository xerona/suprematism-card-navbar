import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule }   from '@angular/router';
import { StateManagerService } from './state-manager.service';
import { CardNavbarComponent } from './card-navbar/card-navbar.component';
import { CardNavbarLogoComponent } from './card-navbar/logo/logo.component';
import { CardNavbarMenuItemComponent } from './card-navbar/menu-item/menu-item.component';
import { CardNavbarCardsComponent } from './card-navbar/cards/cards.component';
import { CardNavbarCardComponent } from './card-navbar/cards/card/card.component';
import { CardNavbarCardTitleComponent } from './card-navbar/cards/card/card-title/card-title.component';
import { CardNavbarCardIconComponent } from './card-navbar/cards/card/card-icon/card-icon.component';
import { CardNavbarCustomCardComponent } from './card-navbar/cards/custom-card/custom-card.component';

export * from './state-manager.service';
export * from './card-navbar/card-navbar.component';
export * from './card-navbar/logo/logo.component';
export * from './card-navbar/menu-item/menu-item.component';
export * from './card-navbar/cards/cards.component';
export * from './card-navbar/cards/card/card.component';
export * from './card-navbar/cards/card/card-title/card-title.component';
export * from './card-navbar/cards/card/card-icon/card-icon.component';
export * from './card-navbar/cards/custom-card/custom-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    StateManagerService
  ],
  declarations: [
    CardNavbarComponent,
    CardNavbarLogoComponent,
    CardNavbarMenuItemComponent,
    CardNavbarCardsComponent,
    CardNavbarCardComponent,
    CardNavbarCardTitleComponent,
    CardNavbarCardIconComponent,
    CardNavbarCustomCardComponent,
  ],
  exports: [
    CardNavbarComponent,
    CardNavbarLogoComponent,
    CardNavbarMenuItemComponent,
    CardNavbarCardsComponent,
    CardNavbarCardComponent,
    CardNavbarCardTitleComponent,
    CardNavbarCardIconComponent,
    CardNavbarCustomCardComponent,
  ],
  entryComponents: [
    CardNavbarComponent,
    CardNavbarLogoComponent,
    CardNavbarMenuItemComponent,
    CardNavbarCardsComponent,
    CardNavbarCardComponent,
    CardNavbarCardTitleComponent,
    CardNavbarCardIconComponent,
    CardNavbarCustomCardComponent,
  ]
})
export class CardNavbarModule {}
