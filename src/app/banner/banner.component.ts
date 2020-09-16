import { Component, OnInit } from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  settings = {
    actions:{
      add:false,
      edit:false,
      delete:false,
      custom:[
        {
        name:'view', title:'<i class="nb-delete"></i>'
        },
        { name: 'editrecord', title: ' <i class="nb-edit"></i>' }
      ],
      position:'right'
    },
    mode:'external',
    filter:false,
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'S.No',
        type: 'number',
      },
      banner: {
        title: 'Banner',
        type: 'string',
      }
    },
  };

  data = [{
    id: 1,
    banner: 'Mark',
  },
    {
      id: 2,
      banner: 'Mark',
    },
    {
      id: 3,
      banner: 'Mark',
    }];


  source: LocalDataSource = new LocalDataSource();

  constructor() {
    const data = this.data;
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  ngOnInit(): void {
  }

  onCustomAction(event) {
    switch ( event.action) {
      case 'viewrecord':
        alert('View');
        break;
      case 'editrecord':
        alert('Edit');
    }
  }

}
