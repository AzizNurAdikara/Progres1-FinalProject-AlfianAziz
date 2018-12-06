import{ NgModule} from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { FotoComponent } from './galery/foto/foto.component';
import { BerandaComponent } from './beranda/beranda.component';

const appRoutes:Routes=[
{path:'',redirectTo:'beranda',pathMatch:'full'},
// {path:'beranda',component:BerandaComponent},
{path:'foto',component:FotoComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})

export class AppRoutingModule{}