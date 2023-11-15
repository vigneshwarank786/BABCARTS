import React, { Fragment, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    country: '',
    selectedProduct: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [errors, setErrors] = useState({});

  const { fullName, phoneNumber, email, country, selectedProduct, message } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: validateField(e.target.id, e.target.value) });
  };

  const validateField = (id, value) => {
    switch (id) {
      case 'fullName':
        return value.trim() ? '' : 'Full Name is required.';
      case 'phoneNumber':
        return value.trim() ? '' : 'Phone Number is required.';
      case 'email':
        return value.trim() && !/^\S+@\S+\.\S+$/.test(value) ? 'Invalid email format.' : '';
      case 'country':
        return value.trim() ? '' : 'Country is required.';
      case 'selectedProduct':
        return value ? '' : 'Please select a product.';
      case 'message':
        return value.trim() ? '' : 'Message is required.';
      default:
        return '';
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {
      fullName: validateField('fullName', fullName),
      phoneNumber: validateField('phoneNumber', phoneNumber),
      email: validateField('email', email),
      country: validateField('country', country),
      selectedProduct: validateField('selectedProduct', selectedProduct),
      message: validateField('message', message),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error !== '')) {
      Object.values(newErrors).forEach((error) => {
        error && toast.error(error);
      });
      return;
    }

    if (isSubmitting) {
        return;
      }
  
      setIsSubmitting(true);

    try {
      await axios.post('/api/v1/contact', {
        fullName,
        phoneNumber,
        email,
        country,
        selectedProduct,
        message,
      });

      toast.success('Form submitted successfully!', {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      setFormData({ fullName: '', phoneNumber: '', email: '', country: '', selectedProduct: '', message: '' });
     } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again later.', {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } finally {
      // After submission (success or failure), re-enable the submit button
      setIsSubmitting(false);
    }
  };

  const isFormValid = () => {
    return (
      fullName.trim() !== '' &&
      phoneNumber.trim() !== '' &&
      email.trim() !== '' &&
      country.trim() !== '' &&
      selectedProduct !== '' &&
      message.trim() !== ''
    );
  };

  const products = [
    "Dairy Products",
    "Canned Foods",
    "Chocolates",
    "Breakfast Cereals",
    "Sauces and Spreads",
    "Juices and Drinks",
    "Candy and Mints",
    "Cooking Ingredients",
    "Bakery Items",
  ];

return (
<Fragment>
<div class="bg-image mt-2">
    <div class="container">
        <div class="row">
        <div class="col-md-4 order-md-2 ">
            <img src="/images/contact/callwoman.png" class="img-fluid rounded-top contact-image" alt="contact frond  bab sindh" />
          </div>
      <div class=" col-md-8 order-md-1 about-us pt-5">
        Approach US 
      </div>
    </div>
    </div>
  </div>


  <div className="container">
        <div className="row pt-5">
          <div className="col-md-6">
            <div>
              <h1 className="title">General Enquiries</h1>
              <i className="fa fa-map fa-lg"></i>
              <span className="custom-span">Embark on a journey of discovery...</span>
            </div>
            <div>
              <i className="fa fa-phone fa-lg"></i>
              <span className="custom-span"> +971 543182072</span>
            </div>
            <div>
              <i className="fa fa-phone fa-lg"></i>
              <span className="custom-span"> +971 502084514</span>
            </div>
            <div>
              <i className="fa fa-envelope fa-lg"></i>
              <span className="custom-span"> mac@babsindh.com</span>
            </div>
            <div>
              <i className="fa fa-envelope fa-lg"></i>
              <span className="custom-span"> sales@babsindh.com</span>
            </div>
            <h1 className="title">Follow Us On</h1>
            <ul className="list-unstyled follow-icons">
              <li>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                  <i className="fa fa-facebook fa-lg fa-circle-border"></i>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                  <i className="fa fa-twitter fa-lg fa-circle-border"></i>
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                  <i className="fa fa-linkedin fa-lg  fa-circle-border"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
          <form onSubmit={onSubmit}>
        <div className={`form-group ${errors.fullName ? 'input-error' : 'input-no-error'}`}>
          <input
            type="text"
            className="form-control"
            id="fullName"
            placeholder="Full Name"
            value={fullName}
            onChange={onChange}
            onBlur={(e) => {
              setErrors({ ...errors, fullName: validateField('fullName', e.target.value) });
            }}
            required
          />
          {errors.fullName && <div className="alert alert-danger">{errors.fullName}</div>}
        </div>
        <div className={`form-group ${errors.phoneNumber ? 'input-error' : 'input-no-error'}`}>
          <input
            type="text"
            className="form-control"
            id="phoneNumber"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={onChange}
            onBlur={(e) => {
              setErrors({ ...errors, phoneNumber: validateField('phoneNumber', e.target.value) });
            }}
            required
          />
          {errors.phoneNumber && <div className="alert alert-danger">{errors.phoneNumber}</div>}
        </div>
        <div className={`form-group ${errors.email ? 'input-error' : 'input-no-error'}`}>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="E-mail"
            value={email}
            onChange={onChange}
            onBlur={(e) => {
              setErrors({ ...errors, email: validateField('email', e.target.value) });
            }}
            required
          />
          {errors.email && <div className="alert alert-danger">{errors.email}</div>}
        </div>
        <div className={`form-group ${errors.country ? 'input-error' : 'input-no-error'}`}>
          <input
            type="text"
            className="form-control"
            id="country"
            placeholder="Country"
            value={country}
            onChange={onChange}
            onBlur={(e) => {
              setErrors({ ...errors, country: validateField('country', e.target.value) });
            }}
            required
          />
          {errors.country && <div className="alert alert-danger">{errors.country}</div>}
        </div>
        <div className={`form-group ${errors.selectedProduct ? 'input-error' : 'input-no-error'}`}>
          <select
            className="form-control"
            id="selectedProduct"
            value={selectedProduct}
            onChange={onChange}
            onBlur={(e) => {
              setErrors({ ...errors, selectedProduct: validateField('selectedProduct', e.target.value) });
            }}
            required
          >
            <option value="" disabled>Select a product</option>
            {products.map((product, index) => (
              <option key={index} value={product}>
                {product}
              </option>
            ))}
          </select>
          {errors.selectedProduct && <div className="alert alert-danger">{errors.selectedProduct}</div>}
        </div>
        <div className={`form-group ${errors.message ? 'input-error' : 'input-no-error'}`}>
          <textarea
            className="form-control"
            id="message"
            placeholder="Messages"
            rows="5"
            value={message}
            onChange={onChange}
            onBlur={(e) => {
              setErrors({ ...errors, message: validateField('message', e.target.value) });
            }}
            required
          ></textarea>
          {errors.message && <div className="alert alert-danger">{errors.message}</div>}
        </div>
        <div className="contact-button">
          <button type="submit" className="btn btn-primary btn-primarys" disabled={!isFormValid()}>
            Submit
          </button>
        </div>
      </form>
</div>



          </div>
          </div>
  
</Fragment>
  )
}

export default Contact