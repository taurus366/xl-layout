import { Injectable, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { GLOBAL_MENU_STORE } from 'xl-util';

@Injectable({
    providedIn: 'root'
})
export class MenuRegistryService {
    // Взимаме всички регистрирани класове, които имплементират IMenuProvider
    private menuItems = signal<MenuItem[]>([]);
    public menu = this.menuItems.asReadonly();

    constructor() {
      this.buildMenu();
    }

    private buildMenu() {
        this.menuItems.set([
            { label: 'Home', items: [{ label: 'Dashboard', icon: 'pi pi-home', routerLink: ['/'] }] },
            ...GLOBAL_MENU_STORE
        ]);
    }
}
