import { NgModule } from "@angular/core";
import { AdminComponentRoutingModule } from "./admin-component-routing.module";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ...AdminComponentRoutingModule.component,
  ],
  imports: [

    CommonModule,
    AdminComponentRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
})
export class AdminComponentModule { }
