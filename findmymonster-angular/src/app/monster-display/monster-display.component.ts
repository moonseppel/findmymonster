import { Component, OnInit } from '@angular/core';
import {HippoContentService} from "../services/hippo-content.service";
import {GeneralMonsterInformation} from "../dataclasses/general-monster-information";

@Component({
  selector: 'app-monster-display',
  templateUrl: './monster-display.component.html',
  styleUrls: ['./monster-display.component.css']
})
export class MonsterDisplayComponent implements OnInit {

  monsters: GeneralMonsterInformation[];

  constructor(private contentService: HippoContentService) { }

  ngOnInit() {
    this.contentService
      .getAllMonsters()
      .subscribe(
        (monsters) => {
          this.monsters = monsters;
        }
      );
  }

}
