import React from "react";
import { Button, Input } from "antd";
const ApplicationFormOptions = ({ setFormData, formData }) => {
  return (
    <div
      className="d-flex flex-column rounded py-5"
      style={{
        // border: "1px solid #92b6f0",
        boxShadow: "1px 1px 5px lightgray",
      }}
    >
      <Button
        onClick={() => {
          setFormData([
            ...formData,
            { name: "Name Field", type: "text", label: "Write Label Name..." },
          ]);
        }}
        className="m-2"
      >
        Add Text Input
      </Button>

      <Button
        onClick={() => {
          setFormData([
            ...formData,
            { name: "Number Field", type: "number", label: "" },
          ]);
        }}
        className="m-2"
      >
        Add Number Input
      </Button>

      <Button
        onClick={() => {
          setFormData([
            ...formData,
            {
              name: "Checkbox",
              type: "checkbox",
              label: "Label Name",
              options: [{ label: "", checked: false }],
            },
          ]);
        }}
        className="m-2"
      >
        Add Checkbox
      </Button>

      <Button
        onClick={() => {
          setFormData([
            ...formData,
            {
              name: "Radio",
              type: "radio",
              label: "Label Name",
              options: [{ label: "", value: "", selected: false }],
            },
          ]);
        }}
        className="m-2"
      >
        Add Radio
      </Button>

      <Button
        onClick={() => {
          setFormData([
            ...formData,
            {
              name: "select",
              type: "select",
              label: "Label Name",
              options: [{ label: "", value: "", selected: false }],
            },
          ]);
        }}
        className="m-2"
      >
        Add DropDown
      </Button>
    </div>
  );
};

export default ApplicationFormOptions;
