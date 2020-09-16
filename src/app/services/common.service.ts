import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {
  NbComponentStatus,
  NbGlobalLogicalPosition,
  NbGlobalPhysicalPosition,
  NbGlobalPosition,
  NbToastrConfig,
  NbToastrService
} from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  toaster_config: NbToastrConfig;

  toaster_destroyByClick = true;
  toaster_duration = 2000;
  toaster_hasIcon = true;
  toaster_position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  toaster_preventDuplicates = false;
  toaster_status: NbComponentStatus = 'primary';

  toaster_title = 'HI there!';
  toaster_content = `I'm cool toaster!`;

  toaster_positions: string[] = [
    NbGlobalPhysicalPosition.TOP_RIGHT,
    NbGlobalPhysicalPosition.TOP_LEFT,
    NbGlobalPhysicalPosition.BOTTOM_LEFT,
    NbGlobalPhysicalPosition.BOTTOM_RIGHT,
    NbGlobalLogicalPosition.TOP_END,
    NbGlobalLogicalPosition.TOP_START,
    NbGlobalLogicalPosition.BOTTOM_END,
    NbGlobalLogicalPosition.BOTTOM_START,
  ];

  private msgSource=new BehaviorSubject('alwaysOpen');
  private previousUrl=new BehaviorSubject('/');
  currentMessage=this.msgSource.asObservable();

  constructor(private toastrService: NbToastrService) { }

  changeMsg(msg:string){
    this.msgSource.next(msg);
  }
  getMsg() {
    return this.msgSource.getValue();
  }

  setPrevUrl(prevUrl:string){
    this.previousUrl.next(prevUrl);
  }
  getPrevUrl() {
    return this.previousUrl.getValue();
  }

  showToast(type: NbComponentStatus,
                    title: string,
                    body: string,
                    duration:any=this.toaster_duration,
                    position:NbGlobalPosition=this.toaster_position,
                    has_icon:boolean=this.toaster_hasIcon,
                    destroybyclick:boolean=this.toaster_destroyByClick,
                    preventduplicates:boolean=this.toaster_preventDuplicates,
                   ) {
    const config = {
      status: type,
      destroyByClick:destroybyclick,
      duration:duration,
      hasIcon: has_icon,
      position: position,
      preventDuplicates: preventduplicates,
    };
    const titleContent = title ? `${title}` : '';

    this.toastrService.show(
      body,
      `${titleContent}`,
      config);
  }
}
