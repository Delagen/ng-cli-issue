import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppSubModule} from 'ng-cli-submodule-issue';

@NgModule({
    imports: [AppSubModule],
    exports: [AppSubModule],
    declarations: [AppComponent],
    providers: [],
    entryComponents: [AppComponent]
})
export class AppModule {
}
