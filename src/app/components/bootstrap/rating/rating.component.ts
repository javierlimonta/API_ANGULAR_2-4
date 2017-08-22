import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {
  //value used with custom icons demo above
  private rateValueExample1: number = 5;
  //value used with custom icons demo above
  private rateValueExample2: number = 2;
  //the maximum allowed value
  private maxRateValue: number = 10;
  //contains the current value entred by the user
  private currentRate: number = 7;
  //make the rating component readonly
  private isRatingReadonly: boolean = false;
  private overStar: number;
  private ratingPercent: number;

  private ratingStatesItems: any = [
    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-star-empty'},
    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'}
  ];

  //reset the rating value to null
  private resetRatingStar() {
    this.overStar = null;
  }

  //call this method when over a star
  private overStarDoSomething(value: number): void {
    this.overStar = value;
    this.ratingPercent = 100 * (value / this.maxRateValue);
  };

  constructor() {
  }

  onHover(data: number): void {
    console.log('Hove ' + data);
  }

  onLeave(data: any): void {
    console.log('Leave ' + data);
  }

  ngOnInit() {
  }

}
