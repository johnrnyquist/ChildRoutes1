// 4)
import {RouterModule, Routes} from '@angular/router';
import {TwoComponent} from './two/two.component';
import {FourComponent} from './four/four.component';
import {OneComponent} from './one/one.component';
import {ThreeComponent} from './three/three.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: '', redirectTo: 'one', pathMatch: 'full'},
  {path: 'one', component: OneComponent},
  {path: 'two', component: TwoComponent},
  {path: 'three', component: ThreeComponent, children: [
      {path: 'four', component: FourComponent}
    ]
  },
];


@NgModule(
  {
    imports: [     // 3)
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
  }
)
export class AppRoutingModule {
}
