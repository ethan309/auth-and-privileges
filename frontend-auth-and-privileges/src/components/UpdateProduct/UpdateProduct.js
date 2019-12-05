import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import updateProduct from "../../containers/Products/Products";

import "./UpdateProduct.css";

export default function UpdateProduct(props) {
  const [name, setName] = useState(null);
  const [updatedPrice, updatePrice] = useState(0.0);
  const [updatedQuanity, updateQuanity] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event) {
    updateProduct(name, updatedPrice, updatedQuanity);
  }

  return (
    <div className="bg-dark text-light p-5">
      <h2 className="mb-5">{props.heading}</h2>
      <Form
        inline
        className="d-flex justify-content-around"
        onSubmit={handleSubmit}
      >
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="name" className="mr-sm-2">
            Product Name:
          </Label>
          <Input
            type="string"
            id="name"
            placeholder="Name"
            onChange={e => setName(e.target.value)}
          />
        </FormGroup>

        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="price" className="mr-sm-2">
            Price:
          </Label>
          {"$"}
          <Input
            type="number"
            min="0.00"
            step="0.01"
            id="price"
            placeholder="0.00"
            onChange={e => updatePrice(e.target.value)}
          />
        </FormGroup>

        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="quanity" className="mr-sm-2">
            Quanity:
          </Label>
          {"$"}
          <Input
            type="number"
            min="0"
            id="quanity"
            placeholder="0"
            onChange={e => updateQuanity(e.target.value)}
          />
        </FormGroup>

        <Button id="red-button">Update</Button>
      </Form>
    </div>
  );
}
