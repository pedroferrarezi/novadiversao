import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'ad-astra',
    loadChildren: () => import('./filmes/ad-astra/ad-astra.module').then( m => m.AdAstraPageModule)
  },
  {
    path: 'frozen2',
    loadChildren: () => import('./filmes/frozen2/frozen2.module').then( m => m.Frozen2PageModule)
  },
  {
    path: 'flash',
    loadChildren: () => import('./series/flash/flash.module').then( m => m.FlashPageModule)
  },
  {
    path: 'simpsons',
    loadChildren: () => import('./series/simpsons/simpsons.module').then( m => m.SimpsonsPageModule)
  },  
  {
    path: 'tabs2',
    redirectTo: '/tabs/tab2',
    pathMatch: 'full'
  },
  {
    path: 'tabs3',
    redirectTo: '/tabs/tab3',
    pathMatch: 'full'
  },
  {
    path: 'ursinho',
    loadChildren: () => import('./desenhos/ursinho/ursinho.module').then( m => m.UrsinhoPageModule)
  },
  {
    path: 'bobesponja',
    loadChildren: () => import('./desenhos/bobesponja/bobesponja.module').then( m => m.BobesponjaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
