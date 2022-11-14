import { Component, OnInit } from '@angular/core';
import { Observable, take, timer } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  constructor() {}

  userData = {
    pi: {
      fname: 'test',
      lname: 'value',
    },
  };
  number$!: Observable<number>;
  ngOnInit(): void {
    this.number$ = timer(1000, 1000).pipe(
      // tap((val) => {
      //   if (val === 5) {
      //     throw new Error('invalid');
      //   }
      // }),
      take(3)
    );
  }
}
