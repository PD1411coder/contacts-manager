import React from 'react'

const Contact = ({_id, name, designation, company, industry, email, phoneNumber,country }) => {
    
    


  return (
    <tr>
      <td className="checkbox">
        <input type="checkbox" />
      </td>
        <td className="name">Name</td>
        <td className="designation">Designation</td>
        <td className="company">Company</td>
        <td className="industry">Industry</td>
        <td className="email">Email</td>
        <td className="phoneNumber">Phone Number</td>
        <td className="country">Country</td>
        <td className="action">
            <img src={editPencil} alt="pencil" className='pencil'/>
            <RiDeleteBin5Line className='dustbin' />
        </td>

    </tr>
  );
}

export default Contact