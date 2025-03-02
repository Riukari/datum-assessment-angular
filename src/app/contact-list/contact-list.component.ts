import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  contacts: Contact[];
  selectedContact: Contact | null = null;

  constructor(private contactService: ContactService) {
    this.contacts = this.contactService.getContacts();
  }

  deleteContact(id: number) {
    this.contactService.deleteContact(id);
    this.contacts = this.contactService.getContacts(); 
  }

  editContact(contact: Contact) {
    this.selectedContact = { ...contact }; 
  }

  onUpdateSuccess() {
    this.contacts = this.contactService.getContacts(); 
    this.selectedContact = null;
  }
}
