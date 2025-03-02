import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnChanges {
  @Input() contact: Contact | null = null;
  @Output() updateSuccess = new EventEmitter<void>();

  formContact: Contact = { id: 0, name: '', email: '', phone: '' };

  constructor(private contactService: ContactService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['contact'] && this.contact) {
      this.formContact = { ...this.contact }; 
    }
  }

  saveContact() {
    if (this.formContact.id) {
      this.contactService.updateContact(this.formContact);
      this.updateSuccess.emit(); 
    } else {
      this.contactService.addContact(this.formContact);
    }
    this.formContact = { id: 0, name: '', email: '', phone: '' }; 
  }
}
