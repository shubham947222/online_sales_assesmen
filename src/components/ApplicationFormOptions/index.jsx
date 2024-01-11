import React from "react";
import { Button, Input } from "antd";
const ApplicationFormOptions = ({ setFormData, formData }) => {
  return (
    <div className=" rounded p-3" style={{ border: "2px solid #92b6f0" }}>
      <Button
        onClick={() => {
          setFormData([
            ...formData,
            { name: "Name Field", type: "text", label: "Label Name" },
          ]);
        }}
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
        className="mx-5"
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
        className="mx-5"
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
        className="mx-5"
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
        className="mx-5"
      >
        Add DropDwon
      </Button>
    </div>
  );
};

export default ApplicationFormOptions;
