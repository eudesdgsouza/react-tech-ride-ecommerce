import React, { useContext } from "react";
import { DataContext } from "../../../App";
import "../CheckoutForms/checkoutStyles/personalDetails.css";

function PersonalDetails() {
  const { cartState, dispatchCart } = useContext(DataContext);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatchCart({
      type: "UPDATE_PERSONAL_DETAILS",
      payload: {
        name,
        value,
      },
    });
  };

  const personalData = [
    {
      id: 0,
      label: "Primeiro Nome",
      name: "firstName",
      value: cartState.personalDetails.firstName,
      placeholder: "Eudes",
    },
    {
      id: 1,
      label: "Sobrenome",
      name: "lastName",
      value: cartState.personalDetails.lastName,
      placeholder: "Gomes",
    },
    {
      id: 2,
      label: "Endereço de e-mail",
      name: "email",
      value: cartState.personalDetails.email,
      placeholder: "eudes@example.com",
    },
    {
      id: 3,
      label: "Celular",
      name: "phone",
      value: cartState.personalDetails.phone,
      placeholder: "+55 87 12345-6789",
    },
  ];

  return (
    <section className="personal-wrapper">
      {personalData.map((field) => {
        return (
          <fieldset key={field.id} className="field personal">
            <label className="personal-label" htmlFor={field.id}>
              {field.label}
            </label>
            <input
              type="text"
              value={field.value}
              name={field.name}
              id={field.id}
              className={`personal-input`}
              onChange={handleChange}
              placeholder={field.placeholder}
            />
            {!cartState.isValid[field.name] && (
              <span className="error-message">
                Forneça um documento válido {field.label}
              </span>
            )}
          </fieldset>
        );
      })}
    </section>
  );
}

export default PersonalDetails;
