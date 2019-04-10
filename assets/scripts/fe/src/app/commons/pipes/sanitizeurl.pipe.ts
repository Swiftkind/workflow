import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeurl'
})
export class SanitizeurlPipe implements PipeTransform {

  constructor(
    private sanitizer: DomSanitizer
  ){}

  transform(url: any, args?: any): any {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

}
