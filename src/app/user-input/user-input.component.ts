import { Component, signal } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestment = signal('');
  annualInvestment = signal('');
  expertReturn = signal('');
  duration = signal('');

  constructor(private investmentService: InvestmentService) {}

  onCalculate() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.initialInvestment(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expertReturn(),
      duration: +this.duration(),
    });
  }
}
