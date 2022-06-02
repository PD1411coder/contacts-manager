import React from "react";
import "./Contacts.css";
import AuthContext from "../../context/AuthContext";
// import Contactsmap from "./Contactsmap";

const Contacts = () => {
  const initialState = [];
  const [contacts, setcontacts] = useState(initialState);
  const { user } = useContext(AuthContext);
  //get the contacts with particular user.
  const getuser = async (requser, user) => {
    try {
      if (requser === user) {
        const response = await fetch("http://localhost:5000/mycontacts", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: user.token,
          },
        });
        const data = await response.json();
        console.log(data);
        setcontacts(data);
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    getuser(user.userData._id, contacts._id);
  }, []);
  // // delete the contact
  // const deletecontact = async (requser, userid, id) => {
  //   try {
  //     if (userid === requser) {
  //       const response = await fetch(
  //         `http:localhost:5000/contactdelete/${id}`,
  //         {
  //           method: "DELETE",
  //           headers: {
  //             "Content-Type": "application/json",
  //             authorization: user.token,
  //           },
  //         }
  //       );
  //       const data = await response.json();
  //       setcontacts(data);
  //     } else {
  //     }
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

  return (
    <div className="Contacts">
      <div className="aside">
        <h2>Logo</h2>
        <p>Dashboard</p>
        <p>Total Contacts</p>
        <p id="logout">Logout</p>
      </div>

      <div className="splitscreen">
        <div className="searchbar">
          <h2 id="heading">Total Contacts</h2>
          <input
            id="search"
            type="text"
            className="search"
            placeholder="search"
          />
          <img
            id="image"
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            alt="img"
          />
          <div className="admin">
            <p id="admin">Admin</p>
            <p id="user">Normal User</p>
          </div>
        </div>
        <div className="buttons">
          <div className="left">
            <button>Select Date</button>
            <button>Filter</button>
          </div>
          <div className="right">
            <button>Delete</button>
            <button>Import</button>
            <button>Export</button>
          </div>
        </div>
        <div className="table">
          <table>
            <thead>
              <th className="column">
                {" "}
                <input type="checkbox" /> Name
              </th>
              <th className="column">Designation</th>
              <th className="column">Industry</th>
              <th className="column">Email</th>
              <th className="column">PhoneNumber</th>
              <th className="column">Country</th>
              <th className="column">Action</th>
            </thead>
            <tbody>
              <tr>
                <td>
                  {" "}
                  <input type="checkbox" /> Nick
                </td>
                <td>FSD</td>
                <td>10X</td>
                <td>nikhilkamble390@gmail.com</td>
                <td>7773946912</td>
                <td>IND</td>
                <td>delete</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
