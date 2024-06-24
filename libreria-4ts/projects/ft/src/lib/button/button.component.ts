import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'ft-button',
  standalone: true,
  imports: [
    FormsModule,
    ButtonModule,],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
text = input();
event = output();

clearFilters(){
  this.event.emit
}
}
