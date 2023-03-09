import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudformComponent } from './crudform/crudform.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Route, RouterModule } from '@angular/router';
import { CrudService } from './Services/crud.service';


const routes:Route[]=[

  {
  path:'crud',component:CrudformComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    CrudformComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
