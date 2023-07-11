import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [MainComponent, CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
