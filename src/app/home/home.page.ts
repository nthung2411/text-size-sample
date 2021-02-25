import {
  AfterViewInit,
  Component,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {

  @ViewChild('size18') size18;
  @ViewChild('size16') size16;
  @ViewChild('size14') size14;
  @ViewChild('size12') size12;

  public size18Computed: string;
  public size16Computed: string;
  public size14Computed: string;
  public size12Computed: string;

  ngAfterViewInit(): void {
    this.size18Computed = window.getComputedStyle(this.size18.nativeElement).fontSize;
    this.size16Computed = window.getComputedStyle(this.size16.nativeElement).fontSize;
    this.size14Computed = window.getComputedStyle(this.size14.nativeElement).fontSize;
    this.size12Computed = window.getComputedStyle(this.size12.nativeElement).fontSize;
  }

}
