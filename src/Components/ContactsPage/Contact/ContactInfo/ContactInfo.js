import React, { Component } from 'react';
import { contacts } from "../../../../utils/const.js";
import "./ContactInfo.scss"

class ContactInfo extends Component {

   render() {
      const index = this.props.match.params.id;
      const contact = contacts[index]

      return (
         <section className='section__contact-info'>
            <div className='contact__wrapper-card contact-info-wrapper' key={contact.id}>
               <p className='card__wrapper icon'>
                  {contact.gender == 'male' ? <img className='card__icon' src='https://cdn-icons-png.flaticon.com/512/1340/1340619.png' /> :
                     contact.gender == 'female' ? <img className='card__icon' src='https://cdn-icons-png.flaticon.com/512/766/766514.png' /> :
                        contact.firstName[0]}
               </p>
               <div className='card__info'>
                  <p className='card__info-name'>
                     {contact.firstName} {contact.lastName}
                  </p>
               </div>
               <div className='contact-info__icon'>
                  <div className='item-icon'>
                     <a href={`tel:${contact.phone}`}><i className="fa-solid fa-phone"></i></a>
                     <p>Call</p>
                  </div>
                  <div className='item-icon'>
                     <a href={`mailto:${contact.email}`}><i className="fas fa-comment-alt"></i></a>
                     <p>Text</p>
                  </div>
                  <div className='item-icon'>
                     <a><i className="fas fa-video"></i></a>
                     <p>Set up</p>
                  </div>
               </div>
               <div className='contact-info__info'>
                  <p>Contact info:</p>
                  <div className='contact-info__info-call'>
                     <div className='phone-icon'><a href={`tel:${contact.phone}`}> <i className="fa-solid fa-phone"></i></a></div>
                     <div className='phone-text'>
                        <a href={`tel:${contact.phone}`}>{contact.phone} </a>
                        <p>mobile</p>
                     </div>
                     <div className='message'>
                        <a href={`mailto:${contact.email}`}><i className="fas fa-comment-alt"></i></a>
                     </div>
                  </div>
                  <div className='contact-info__info-call'>
                     <div className='phone-icon what'><a href={`tel:${contact.phone}`}> <i className="fa-brands fa-square-whatsapp"></i></a></div>
                     <div className='phone-text'>
                        <a href={`tel:${contact.phone}`}>Message {contact.phone} </a>
                     </div>
                  </div>
                  <div className='contact-info__info-call'>
                     <div className='phone-icon what'><a href={`tel:${contact.phone}`}> <i className="fa-brands fa-square-whatsapp"></i></a></div>
                     <div className='phone-text'>
                        <a href={`tel:${contact.phone}`}>Voice call {contact.phone} </a>
                     </div>
                  </div>
                  <div className='contact-info__info-call'>
                     <div className='phone-icon what'><a href={`tel:${contact.phone}`}> <i className="fa-brands fa-square-whatsapp"></i></a></div>
                     <div className='phone-text'>
                        <a href={`tel:${contact.phone}`}>Video call {contact.phone} </a>
                     </div>
                  </div>
                  <div className='contact-info__info-call'>
                     <div className='phone-icon viber'><a href={`tel:${contact.phone}`}> <i className="fa-brands fa-viber"></i></a></div>
                     <div className='phone-text'>
                        <a href={`tel:${contact.phone}`}>Message {contact.phone} </a>
                     </div>
                  </div>
                  <div className='contact-info__info-call'>
                     <div className='phone-icon viber'><a href={`tel:${contact.phone}`}> <i className="fa-brands fa-viber"></i></a></div>
                     <div className='phone-text'>
                        <a href={`tel:${contact.phone}`}>Voice call {contact.phone} </a>
                     </div>
                  </div>
                  <div className='contact-info__info-call'>
                     <div className='phone-icon viber'><a href={`tel:${contact.phone}`}> <i className="fa-brands fa-viber"></i></a></div>
                     <div className='phone-text'>
                        <a href={`tel:${contact.phone}`}>Video call {contact.phone} </a>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}

export default ContactInfo;