import DesktopSideBar from "../../SideBar";
import TitleDescription from "../../TitleDescription";
import './step1Style.css'
import { useState } from "react";

function Step1({nextStep}) {
  const  stepContent = {
    number: 1,
    title: "Personal info",
    desc: "Please provide your name, email address and phone number.",
  }

  const [name, setName] = useState('w');
  const [email, setEmail] = useState('w@t.t');
  const [phone, setPhone] = useState('123456789');

  const [errors, setErrors] = useState({
      name: '',
      email: '',
      phone: '',
  });

  const handleSubmit = (e) => {
      e.preventDefault();
      const newErrors = { name: '', email: '', phone: '' };

      if (!name) newErrors.name = 'This field is required';
      if (!email) newErrors.email = 'This field is required';
      else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Enter a valid email';
      if (!phone) newErrors.phone = 'This field is required';
      else if (!/^\+?\d{1,15}$/.test(phone)) newErrors.phone = 'Enter a valid number';

      setErrors(newErrors);

      if (!newErrors.name && !newErrors.email && !newErrors.phone) {
          console.log({ name, email, phone });
          nextStep();
      }
  };
  return (
    <>
      <DesktopSideBar currentStep={stepContent.number} />
        <form className="step-content" onSubmit={handleSubmit}>
          
          <div className="content-step-with-no-buttons">
            <TitleDescription  stepContent={stepContent}/>
            <div className="form-group">
              <div className='error-name-container'>
                <label htmlFor="name">Name</label>
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Stephen King"
              />
            </div>
            <div className="form-group">
              <div className='error-name-container'>
                <label htmlFor="email">Email</label>
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder= "e.g. stephenking@lorem.com"
              />
            </div>
            <div className="form-group">
              <div className='error-name-container'>
                <label htmlFor="phone">Phone Number</label>
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. +1 234567890"
              />
            </div>
          </div>
          <div className="buttons-container button-step1">
            <button type={"submit"}>next</button>
          </div>
        </form>
    </>
  );
}


export default Step1;