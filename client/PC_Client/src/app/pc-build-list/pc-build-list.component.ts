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
constructor(private pcBuildsService: PcBuildDataService
){ }
      ngOnInit() {
        console.log("Listat d'builds inicialiced");
        this.pcBuildsService.getDades().subscribe(resp => {
        // accedim al body de la resposta HTTP.+
        console.log(resp.body);
        if (resp.body) {
          this.pcBuilds = resp.body;
        }
        });
      }
    }

