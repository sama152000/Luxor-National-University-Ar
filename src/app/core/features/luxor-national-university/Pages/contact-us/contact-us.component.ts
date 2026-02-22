import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ContactService } from '../../Services/contact.service';
import { ContactInfo, ContactFormData, UniversityInfo } from '../../model/contact.model';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit, OnDestroy {
  contactForm: FormGroup;
  contactInfo: ContactInfo[] = [];
  universityInfo: UniversityInfo | null = null;
  isSubmitting = false;
  isSubmitted = false;
  private destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
    this.loadContactData();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadContactData(): void {
    this.contactService.getContactInfo()
      .pipe(takeUntil(this.destroy$))
      .subscribe(info => {
        this.contactInfo = info;
      });

    this.contactService.getUniversityInfo()
      .pipe(takeUntil(this.destroy$))
      .subscribe(info => {
        this.universityInfo = info;
      });
  }

  onSubmit(): void {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      const formData: ContactFormData = this.contactForm.value;

      this.contactService.submitContactForm(formData)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: () => {
            this.isSubmitted = true;
            this.isSubmitting = false;
            this.contactForm.reset();
          },
          error: () => {
            this.isSubmitting = false;
          }
        });
    }
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field && field.errors && field.touched) {
      if (field.errors['required']) return `${fieldName} مطلوب`;
      if (field.errors['email']) return 'البريد الإلكتروني غير صحيح';
      if (field.errors['minlength']) return `${fieldName} قصير جداً`;
    }
    return '';
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.errors && field.touched);
  }

  trackByContact(index: number, contact: ContactInfo): string {
    return contact.id;
  }
}