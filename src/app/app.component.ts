import {AfterViewChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NbComponentStatus, NbGlobalPhysicalPosition, NbMenuItem, NbToastrService} from '@nebular/theme';
import {CommonService} from './services/common.service';
import {ActivatedRoute, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit,AfterViewChecked {
  isShowHeaderFooter:any="alwaysOpen";
  currentUrl:string="";
  title = 'nbadmin1';
  menu: NbMenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'person-outline',
      link: '/dashboard'
    },
    {
      title: 'Banner Management',
      link: '/banner',
      icon: 'person-outline',
    },
    {
      title: 'Content Management',
      icon: 'file-text-outline',
      children: [
        {
          title: 'Banner Management',
          link: '/banner',
        }
      ]
    },
    {
      title: 'Settings',
      icon: { icon: 'settings-2-outline', pack: 'eva' },
      children: [
        {
          title: 'Change Password',
          link: '/changepassword',
        }
        ]
    },
    {
      title: 'Logout',
      icon: 'unlock-outline',
      link: '/login',
    },
  ];

  toaster_status: NbComponentStatus = 'primary';

  constructor(private commonService:CommonService,
              private changeDetector:ChangeDetectorRef,
              private router:Router) {
    this.commonService.currentMessage.subscribe(isShowHeaderFooter=>this.isShowHeaderFooter=isShowHeaderFooter);
    // @ts-ignore
    this.router.events.subscribe((event:Event)=>{
      if(event instanceof NavigationStart){
        if(event.url=='/' || event.url=='/login'){
          this.commonService.changeMsg('hide');
        }
      }
      if(event instanceof NavigationEnd){
        //console.log("url2:"+event,event.url);
        if(event.url=='/' || event.url=='/login'){
          this.commonService.changeMsg('hide');
        }
        else{
          this.commonService.changeMsg('alwaysOpen');
        }

        if(this.currentUrl=='/login' && event.url=='/dashboard'){
          //console.log('curr:'+this.currentUrl+';forward:'+event.url);

        }
        this.commonService.setPrevUrl(this.currentUrl);
        this.currentUrl=event.url;
      }
      if(event instanceof NavigationError){

      }
    });
    this.router.events.subscribe(url=>{
      //console.log("url:"+url);
    });
  }

  ngOnInit() {
    this.currentUrl=this.router.url;
  }

  // to prevent expression issue
  ngAfterViewChecked(): void {
    this.changeDetector.detectChanges();
  }
}
