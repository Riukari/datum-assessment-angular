import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contact: Contact = { id: 0, name: '', email: '', phone: '' };

  constructor(private contactService: ContactService) {}

  saveContact() {
    if (this.contact.id) {
      this.contactService.updateContact(this.contact);
    } else {
      this.contactService.addContact(this.contact);
    }
    this.contact = { id: 0, name: '', email: '', phone: '' }; // Reset form
  }
}
