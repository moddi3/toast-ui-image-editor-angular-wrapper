import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToastUiImageEditorModule } from 'projects/toast-ui-image-editor/src/public_api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ToastUiImageEditorModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
