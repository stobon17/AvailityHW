import React from 'react'
import ReactDOM from 'react-dom'

import './App.css';
function RegForm(props) {
    const name1 = React.useRef(null);
    const name2 = React.useRef(null);
    const npinum = React.useRef(null);
    const bizadd = React.useRef(null);
    const telnum = React.useRef(null);
    const email = React.useRef(null);

    const handleSubmit = e => {
      e.preventDefault();
      const formData = {
        firstname: name1.current.value,
        lastname: name2.current.value,
        npi: npinum.current.value,
        businessaddress: bizadd.current.value,
        telephonenumber: telnum.current.value,
        emailval: email.current.value
      }
      alert('A new registration was made! Here is the data collected: \n' + 'First Name: ' + formData.firstname + '\nLast Name: ' + formData.lastname
                + '\nNPI Number: ' + formData.npi + '\nBusiness Address: ' + formData.businessaddress + '\nTelephone Number: ' + formData.telephonenumber
                + '\nEmail: ' + formData.emailval);
    };
  
    return (
       <form onSubmit={handleSubmit}>
         <input type="text" placeholder="First Name..." ref={name1} />
         <input type="text" placeholder="Last Name..." ref={name2} />
         <input type="text" placeholder="NPI Number..." ref={npinum} />
         <input type="text" placeholder="Business Address..." ref={bizadd} />
         <input type="text" placeholder="Telephone Number..." ref={telnum} />
         <input type="text" placeholder="Email..." ref={email} />
         <button type="submit" className="myButton">Submit</button>
       </form>
     );
  }
  
  ReactDOM.render(<div><RegForm /></div>, document.getElementById("root"));

  export default RegForm;
  