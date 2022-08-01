import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Contact.scss';
import { contacts } from "../../../utils/const.js"


class Contact extends Component {
   constructor() {
      super();
      this.state = {
         search: '',
         checkedMale: true,
         checkedFemale: true,
         checkedNotSpecified: true
      }
   }

   handleSearchChange = (e) => {
      this.setState({ search: e.target.value })
   }

   handleCheckboxMale = (e) => {
      this.setState({ checkedMale: e.target.checked })
   }

   handleCheckboxFemale = (e) => {
      this.setState({ checkedFemale: e.target.checked })
   }

   handleCheckedNotSpecified = (e) => {
      this.setState({ checkedNotSpecified: e.target.checked })
   }

   filter = () => {
      let filterContact = [];
      contacts.filter(e => {

         if (e.gender === 'female' && this.state.checkedFemale == true && Object.values(e).join().toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase())) {
            filterContact.push(e)
         } else if (e.gender === undefined && this.state.checkedNotSpecified == true && Object.values(e).join().toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase())) {
            filterContact.push(e)
         } else if (e.gender === 'male' && this.state.checkedMale == true && Object.values(e).join().toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase())) {
            filterContact.push(e);
         }
      })

      return filterContact;
   }

   render() {

      return (
         <section className='section__contact'>
            <div className='contact__wrapper'>
               <div className='checkbox'>
                  <input className='contacts__search'
                     placeholder='Search contact'
                     value={this.state.search}
                     onChange={this.handleSearchChange.bind(this)} >
                  </input>
                  <div>
                     <label htmlFor='male'> Male </label>
                     <input
                        id='male' type={'checkbox'}
                        checked={this.state.checkedMale}
                        onChange={this.handleCheckboxMale.bind(this)}>
                     </input>
                  </div>
                  <div>
                     <label htmlFor='female'> Female </label>
                     <input
                        id='female' type={'checkbox'}
                        checked={this.state.checkedFemale}
                        onChange={this.handleCheckboxFemale.bind(this)} >
                     </input>
                  </div>
                  <div>
                     <label htmlFor='not__specified'> Not specified </label>
                     <input
                        id='not__specified'
                        type={'checkbox'}
                        checked={this.state.checkedNotSpecified}
                        onChange={this.handleCheckedNotSpecified.bind(this)} >
                     </input>
                  </div>
               </div>
               {
                  this.filter().map((el, index) =>
                     <Link to={`/contacts/${index}`} >
                        <div className='contact__wrapper-card' key={el.id}>
                           <p className='card__wrapper'>
                              {el.gender == 'male' ? <img className='card__icon' src='https://cdn-icons-png.flaticon.com/512/1340/1340619.png' /> :
                                 el.gender == 'female' ? <img className='card__icon' src='https://cdn-icons-png.flaticon.com/512/766/766514.png' /> :
                                    el.firstName[0]}
                           </p>
                           <div className='card__info'>
                              <p className='card__info-name'>
                                 {el.firstName} {el.lastName}
                              </p>
                              <p className='card__info-phone'>
                                 {el.phone}
                              </p>
                           </div>
                        </div>
                     </Link>
                  )
               }
            </div>
         </section>
      )
   }
}

export default Contact;
