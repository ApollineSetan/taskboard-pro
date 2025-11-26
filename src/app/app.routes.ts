import { Routes } from '@angular/router';
import { About } from './about/about';
import { Home } from './home/home';

export const routes: Routes = [
    {path: "about", component:About},
    {path: "home", component:Home},
];
