import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http'; // <-- import HttpClientModule

@Component({
  selector: 'app-contact-page',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule], // <-- add HttpClientModule
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    ]),
    message: new FormControl('', [Validators.required])
  });

  isSubmitting = false;
  showToast = false;

  constructor(private http: HttpClient) {}

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }

  submitForm() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;

      const formData = {
        name: this.name?.value,
        email: this.email?.value,
        message: this.message?.value
      };

      this.http.post('https://formspree.io/f/mwvwzzaq', formData, {
        headers: new HttpHeaders({ 'Accept': 'application/json' })
      }).subscribe({
        next: () => {
          this.contactForm.reset();
          this.isSubmitting = false;
          this.showToast = true;
          setTimeout(() => this.showToast = false, 4000);
        },
        error: () => {
          this.isSubmitting = false;
          alert('Oops! Something went wrong. Please try again.');
        }
      });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}