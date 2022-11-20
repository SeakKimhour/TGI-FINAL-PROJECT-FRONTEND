import { NgModule } from "@angular/core";
import { UserComponentRoutingModule } from "./user-component-routing.module";

@NgModule({
  declarations: [
    ...UserComponentRoutingModule.components
  ],
  imports: [
    UserComponentRoutingModule
  ]
})
export class UserComponentModule { }
