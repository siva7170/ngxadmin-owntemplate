import { Component, OnInit } from '@angular/core';
import {NbComponentStatus, NbGlobalPhysicalPosition, NbMenuItem, NbSidebarService, NbToastrService} from '@nebular/theme';
import {CommonService} from '../services/common.service';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  menu: NbMenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'person-outline',
    },
    {
      title: 'Content Management',
      icon: 'lock-outline',
    },
    {
      title: 'Settings',
      icon: { icon: 'checkmark-outline', pack: 'eva' },
    },
    {
      title: 'Logout',
      icon: 'unlock-outline',
    },
  ];

  toaster_status: NbComponentStatus = 'primary';

  constructor(private readonly sidebarService: NbSidebarService,
              public toastrService: NbToastrService,
              private commonService:CommonService,) { }

  ngOnInit(): void {
    console.log('=>'+this.commonService.getPrevUrl());

    if(this.commonService.getPrevUrl()=='/login'){
      this.commonService.showToast('success','Welcome','You have successfully logged!',5000);
    }
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle();
    return false;
  }
}
