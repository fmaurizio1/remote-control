import { Component, OnInit } from '@angular/core';
import {Machine} from "../classes/Machine";
import {Status} from "../classes/Status";

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css']
})
export class MachineComponent implements OnInit {

  public machines:Machine[] = [];

  constructor() { }

  ngOnInit() {
    this.machines = this.buildMachines();
  }

  private buildMachines():Machine[] {
    let machine1:Machine = this.buildMachine(1, "Machine1", Status.STOP, "localhost:8080");
    let machine2:Machine = this.buildMachine(2, "Machine2", Status.STOP, "localhost:8081");
    let machine3:Machine = this.buildMachine(3, "Machine3", Status.STOP, "localhost:8082");

    return [machine1, machine2, machine3];
  }

  private buildMachine(id:number, name:string, status:Status, url:string):Machine{
      let machine:Machine = new Machine();
      machine.id = id;
      machine.name = name;
      machine.status = status;
      machine.url = url;

    return machine;
  }

}
