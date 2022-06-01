import React from 'react'
import '../styles/ContactsTable.css'
import calendarButton from "../utils/calendarButton.svg";
// import filterButton from "../utils/filterButton.svg";
import deleteButton from "../utils/deleteButton.svg";
import importButton from "../utils/importButton.svg";
import exportButton from "../utils/exportButton.svg";
import { RiDeleteBin5Line } from 'react-icons/ri'
import editPencil from '../utils/editPencil.svg'
import Importer from './Importer'
import { useState } from 'react'



const ContactsTable = () => {

    const [showImporter, setShowImporter] = useState(false);



  return (
    <div className="table_container">
      <section className="button_container">
        <div className="right-buttons">
          <img src={calendarButton} alt="date" />
        </div>
        <div className="left-buttons">
          <img src={deleteButton} alt="delete" />
          <img src={importButton} alt="import" onClick={setShowImporter(true) ? false : true} />
          <img src={exportButton} alt="export" />
        </div>
      </section>

    {showImporter ? (<Importer/>): ("")}
      <div table-container>
        <table>
          <thead>
            <tr>
              <th className="checkbox">
                <input type="checkbox" />
              </th>
              <th className="name">Name</th>
              <th className="designation">Designation</th>
              <th className="company">Company</th>
              <th className="industry">Industry</th>
              <th className="email">Email</th>
              <th className="phoneNumber">Phone Number</th>
              <th className="country">Country</th>
              <th className="action">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="checkbox-conatiner">
                <input type="checkbox" className="checkbox" />
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
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContactsTable