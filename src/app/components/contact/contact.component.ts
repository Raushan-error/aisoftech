import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    message: ''
  };
  submitted = false;

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted', this.contactData);
      this.submitted = true;
      form.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        this.submitted = false;
      }, 5000);
    }
  }
}
