import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule],
    template: `<router-outlet></router-outlet>`
})
export class AppComponent {
    // private translate = inject(TranslateService);

    constructor() {
        // this.translate.addLangs(['bg', 'en']);
        // const savedLang = localStorage.getItem('Lang') || 'en';
        // this.translate.setFallbackLang('en');
        // this.translate.use(savedLang);
    }
}
