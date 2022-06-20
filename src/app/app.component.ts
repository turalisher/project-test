import {AfterViewInit, ChangeDetectorRef, Component, OnDestroy, ViewChild} from '@angular/core';
import { Paths } from './app-routing.module';
import {BreakpointObserver} from "@angular/cdk/layout";
import {Subscription} from "rxjs";
import {MatSidenav} from "@angular/material/sidenav";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy{

  public readonly Paths = Paths;
  private subscriptionOnWindowSize!: Subscription;
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver, private cdr: ChangeDetectorRef, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.registerNewIcon('file-icon', '../assets/file-icon.svg');
    this.registerNewIcon('notification-icon', '../assets/notification-icon.svg');
    this.registerNewIcon('overview-icon', '../assets/overview-icon.svg');
    this.registerNewIcon('report-icon', '../assets/report-icon.svg');

    //Magic Message :)
    setTimeout(() => window.alert('Ahoj, tohle je testovaci ukol pro Brand Master :)'), 2000);
  }

  ngAfterViewInit(): void {
    this.subscriptionOnWindowSize = this.observer.observe(['(max-width: 576px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
    this.cdr.detectChanges();
  }

  private registerNewIcon(label: string, path: string) {
    this.matIconRegistry.addSvgIcon(
        label,
        this.domSanitizer.bypassSecurityTrustResourceUrl(path)
    );
  }

  ngOnDestroy(): void {
  }
}
