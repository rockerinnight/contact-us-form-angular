import { Component } from '@angular/core';

class ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  form = new ContactForm();
  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log(this.form);
  }

  newMessage(): void {
    for (const propNames in this.form) {
      if (Object.prototype.hasOwnProperty.call(this.form, propNames)) {
        let propName = this.form['propName'];
        propName = null;
      }
    }
    // this.form = null;
  }
}
