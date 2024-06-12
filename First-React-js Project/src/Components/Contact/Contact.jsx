import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arror from '../../assets/white-arrow.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e4f34b7f-0aff-4d60-87f7-6e7fdc1449c9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>Feel free to reach out though contact from or find our contact information below. your feedback, question, and suggestion are important to us as we strive to provide expactional service to our university community. </p>
        <ul>
            <li><img src={mail_icon} alt="" />Contact AnantSingh321123@gmail.com</li>
            <li><img src={phone_icon} alt="" />+91 9450810681</li>
            <li><img src={location_icon} alt="" />Utter Pradesh Varanasi <br /> Babatpur Mangari 221202</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label >Your name</label>
            <input type="text" name="name" placeholder='Enter your name' required/>
            <label >Phone Number</label>
            <input type='tel' name='phone' placeholder='Enter your mobile Number' />
            <label >Write your messages here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>
                Submit now <img src={white_arror} alt="" />
            </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
