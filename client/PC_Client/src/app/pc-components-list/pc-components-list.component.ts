import { Component } from '@angular/core';
import { PcComponentDataService } from '../pc-component-data.service';
import { IpcComponent } from '../interfaces/ipc-component';


@Component({
  selector: 'app-pc-components-list',
  standalone: false,
  templateUrl: './pc-components-list.component.html',
  styleUrl: './pc-components-list.component.css'
})
export class PcComponentsListComponent {
  listTitle = 'PC Components List';
  pcComponents: IpcComponent[] = [];


  constructor(private pcComponentsService: PcComponentDataService) { }

  ngOnInit() {
    console.log("Components list initialized");
    this.pcComponentsService.getData().subscribe(resp => {
      console.log(resp.body);
      if (resp.body) {
        this.pcComponents = resp.body;
      }
    });
  }
}
