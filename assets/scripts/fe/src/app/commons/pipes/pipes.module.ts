import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SanitizeurlPipe } from './sanitizeurl.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SanitizeurlPipe
  ],
  declarations: [SanitizeurlPipe]
})
export class PipesModule { }
