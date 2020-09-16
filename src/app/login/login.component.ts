import {Component, OnInit} from '@angular/core';
import {NbSidebarService} from '@nebular/theme';
import {CommonService} from '../services/common.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(private readonly sidebarService: NbSidebarService,
              private commonService:CommonService,
              private router:Router) {

  }

  ngOnInit(): void {

  }

  login(){
    this.router.navigate(['/dashboard']);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle();
    return false;
  }
}
