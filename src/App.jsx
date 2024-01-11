import { useState } from "react";
import "./App.css";
import Preview from "./components/Preview";
import ApplicationFormOptions from "./components/ApplicationFormOptions";
import { Button, Input, Modal, Checkbox, Radio, Select } from "antd";

function App() {
  const [formName, setFormName] = useState("Dyanamic Form");
  const [formData, setFormData] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const handleInput = (event, index) => {
    const { name, value } = event.target;
    const updatedForm = [...formData];
    updatedForm[index].name = value;
    setFormData(updatedForm);
  };

  const handleLabel = (event, index) => {
    const { name, value } = event.target;

    const updatedForm = [...formData];
    updatedForm[index].label = value;
    setFormData(updatedForm);
  };
  const addBox = (index, type) => {
    console.log(index, "indexsss");
    let updatedForm = [...formData];
    if (type == "checkbox") {
      updatedForm[index].options = [
        ...updatedForm[index].options,
        { label: "", value: "" },
      ];
    } else if (type == "radio") {
      updatedForm[index].options = [
        ...updatedForm[index].options,
        { label: "", value: "", selected: false },
      ];
    } else {
      updatedForm[index].options = [
        ...updatedForm[index].options,
        { label: "", value: "", selected: "" },
      ];
    }
    setFormData(updatedForm);
  };
  const handleInputBox = (e, index, ind, type) => {
    const { name, value } = e.target;

    console.log(index, "index from check", ind);
    const updatedForm = [...formData];
    console.log(updatedForm[index]?.options, "ha bhai");
    const updatedOptions = [...updatedForm[index]?.options];
    updatedOptions[ind].label = value;
    if (type == "select") {
      updatedOptions[ind].value = value;
    }
    setFormData(updatedForm);
  };
  const handleSelectedCheckBox = (e, index, ind) => {
    const updatedForm = [...formData];
    const updatedOptions = [...updatedForm[index]?.options];
    updatedOptions[ind].checked = !updatedOptions[ind].checked;
    setFormData(updatedForm);
  };

  const handleSelectedRadio = (e, index, ind) => {
    console.log(e.target, "value");
    const { name, value } = e.target;

    const updatedForm = [...formData];
    const updatedOptions = [...updatedForm[index]?.options];
    updatedOptions?.map((each) => (each.selected = false));
    updatedOptions[ind].selected = true;
    setFormData(updatedForm);
  };

  const handleDropdownChange = (value, index, ind) => {
    const updatedForm = [...formData];
    const updatedOptions = [...updatedForm[index]?.options];
    console.log(updatedOptions, "updatedOptions");
    // updatedOptions?.map((each) => (each.selected = value));
    const a = updatedOptions.find((each) => each.value === value);
    a.selected = true;
    setFormData(updatedForm);
  };

  const handleDelete = (index) => {
    console.log(index, "index");
    const updatedForm = [...formData];
    updatedForm.splice(index, 1);
    setFormData(updatedForm);
  };
  console.log(formData, "formData");

  const handleCopyClick = (textToCopy) => {
    // Create a new textarea element to hold the text temporarily
    const textarea = document.createElement("textarea");
    textarea.value = textToCopy;

    document.body.appendChild(textarea);

    textarea.select();

    document.execCommand("copy");

    document.body.removeChild(textarea);

    alert("Text copied to clipboard!");
  };

  return (
    <>
      <div
        className="d-flex w-100 justify-content-center align-items-center"
        style={{ height: "50px", background: "#c2d6f6" }}
      >
        <div className="w-50">
          <Input
            type="text"
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
          />
        </div>
      </div>
      <div className="row w-100 th-container align-center">
        <div className="w-100 m-5">
          <h5> Selection options</h5>
          <ApplicationFormOptions
            setFormData={setFormData}
            formData={formData}
          />
        </div>
        <div className="col-md-10">
          <Preview
            formData={formData}
            setFormData={setFormData}
            handleInput={handleInput}
            handleLabel={handleLabel}
            addBox={addBox}
            handleInputBox={handleInputBox}
            handleSelectedCheckBox={handleSelectedCheckBox}
            handleSelectedRadio={handleSelectedRadio}
            handleDelete={handleDelete}
          />
        </div>
      </div>
      {formData?.length > 0 && (
        <div className="d-flex w-75 my-2 justify-content-end" style={{}}>
          <Button onClick={() => setOpenModal(true)}>View In Full Mode</Button>
        </div>
      )}
      <Modal
        open={openModal}
        title={formName}
        width={"100%"}
        height={"100%"}
        onOk={() => setOpenModal(false)}
        onCancel={() => setOpenModal(false)}
        footer={[
          <Button key="back" onClick={() => setOpenModal(false)}>
            Return
          </Button>,
        ]}
      >
        <div className="">
          <div className="">
            {formData?.map((each, index) => (
              <div
                className="d-flex flex-column my-1 p-2 border rounded"
                key={index + each}
                style={{ background: "#faf9f6" }}
              >
                <div className="d-flex flex-column align-items-start">
                  <div className="w-50">
                    <label>{each?.label}</label>
                  </div>
                  {["number", "text"]?.includes(each?.type) && (
                    <Input
                      name={each?.name}
                      type={each?.type}
                      placeholder="Enter Field Value"
                      onChange={(e) => handleInput(e, index)}
                      size="medium"
                      className="w-100"
                    />
                  )}
                  {["checkbox", "radio"]?.includes(each?.type) && (
                    <>
                      {each?.options?.map((item, ind) => (
                        <div className="d-flex align-items-center">
                          {each?.type == "checkbox" && (
                            <Checkbox
                              checked={item?.checked}
                              onChange={(e) =>
                                handleSelectedCheckBox(e, index, ind)
                              }
                            />
                          )}
                          {each?.type == "radio" && (
                            <Radio
                              checked={item?.selected}
                              value={item?.label}
                              name={item?.name}
                              onChange={(e) =>
                                handleSelectedRadio(e, index, ind)
                              }
                            />
                          )}
                          <p className="m-0 px-1">{item?.label}</p>
                        </div>
                      ))}
                    </>
                  )}
                  {each?.type == "select" && (
                    <Select
                      style={{
                        width: 120,
                      }}
                      options={each?.options}
                      value={each?.selected}
                      onChange={(e) => {
                        handleDropdownChange(e, index);
                      }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
          <div>
            <Button onClick={() => handleCopyClick(JSON.stringify(formData))}>
              Copy Text
            </Button>
            {/* <p>{JSON.stringify(formData)}</p> */}
          </div>
        </div>
      </Modal>
    </>
  );
}

export default App;
