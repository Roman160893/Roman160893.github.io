import React, { Component } from 'react';
import Contact from './Contact/Contact';

class ContactsPage extends Component {
   constructor() {
      super();
   }
   render() {
      return (
         <div>
            <Contact />
         </div>
      )
   }
}

export default ContactsPage;