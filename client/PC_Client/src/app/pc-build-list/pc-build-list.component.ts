import { Component } from '@angular/core';
import { IpcBuild } from '../interfaces/ipc-build';
import { PcBuildDataService } from '../pc-build-data.service';

@Component({
  selector: 'app-pc-build-list',
  standalone: false,
  templateUrl: './pc-build-list.component.html',
  styleUrl: './pc-build-list.component.css'
})
export class PcBuildListComponent {
listTitle = 'PC Build List';
pcBuilds: IpcBuild[]=[];
objectValues = Object.values;
sortField: string = 'name';
sortOrder: 'asc' | 'desc' = 'asc';

constructor(private pcBuildsService: PcBuildDataService
){ }
      ngOnInit() {
        console.log("Listat d'builds inicialiced");
        this.pcBuildsService.getData().subscribe(resp => {
        // accedim al body de la resposta HTTP.+
        console.log(resp.body);
        if (resp.body) {
          this.pcBuilds = resp.body;
        }
        });
      }
      deleteBuild(id: string) {
        this.pcBuildsService.deleteBuild(id).subscribe(resp => {
          console.log(resp);
          this.pcBuildsService.getData().subscribe(resp => {
            console.log(resp.body);
            if (resp.body) {
              this.pcBuilds = resp.body;
            }
          });
        });
      }

      sortBuilds(field: string) {
        if (this.sortField === field) {
          this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
        } else {
          this.sortField = field;
          this.sortOrder = 'asc';
        }
    
        this.pcBuilds.sort((a, b) => {
          const valueA = a[field];
          const valueB = b[field];
          
          if (valueA < valueB) return this.sortOrder === 'asc' ? -1 : 1;
          if (valueA > valueB) return this.sortOrder === 'asc' ? 1 : -1;
          return 0;
        });
      }
    }

