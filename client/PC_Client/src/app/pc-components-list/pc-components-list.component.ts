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
  filteredComponents: IpcComponent[] = [];
  selectedType: string = 'All';  // Set default value to 'All'

  componentTypes = [
    'All',
    'CPU',
    'GPU', 
    'Motherboard',
    'RAM',
    'Storage',
    'Case',
    'PSU'
  ];

  constructor(private pcComponentsService: PcComponentDataService) { }

  ngOnInit() {
    console.log("Components list initialized");
    this.pcComponentsService.getData().subscribe(resp => {
      console.log(resp.body);
      if (resp.body) {
        this.pcComponents = resp.body;
        this.filterByType(this.selectedType); // Apply initial filter
      }
    });
  }

  deleteComponent(id: string) {
    this.pcComponentsService.deleteComponent(id).subscribe({
      next: () => {
        this.pcComponentsService.getData().subscribe(resp => {
          if (resp.body) {
            this.pcComponents = resp.body;
          }
        });
      },
      error: (error) => {
        console.error('Error deleting component:', error);
      }
    });
  }

  filterByType(type: string) {
    this.selectedType = type;
    if (type === 'All') {
      this.filteredComponents = this.pcComponents;
    } else {
      this.filteredComponents = this.pcComponents.filter(component => 
        component.type === type
      );
    }
  }
}
