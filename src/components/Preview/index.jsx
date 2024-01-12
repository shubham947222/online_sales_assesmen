import { Checkbox, Input, Radio, Select } from "antd";
import React from "react";

const Preview = ({
  formData,
  handleInput,
  handleLabel,
  addBox,
  handleInputBox,
  handleSelectedCheckBox,
  handleSelectedRadio,
  handleDelete,
}) => {
  console.log(formData, "formData");
  return (
    <div
      className="d-flex flex-column "
      style={{ height: "550px", overflow: "scroll" }}
    >
      {formData?.map((each, index) => (
        <div
          className="d-flex flex-column my-1 p-2 border rounded"
          key={index + each}
          style={{ background: "#faf9f6" }}
        >
          <div className="d-flex flex-column align-items-start">
            <div className="w-50">
              <Input
                name={each?.name}
                placeholder="Write Label Name..."
                type="text"
                value={each?.label}
                onChange={(e) => handleLabel(e, index)}
                className="mb-1"
                size="small"
              />{" "}
            </div>
            {["number", "text"]?.includes(each?.type) && (
              <Input
                disabled
                name={each?.name}
                type={each?.type}
                placeholder={`Enter Field ${each?.type}`}
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
                        onChange={(e) => handleSelectedCheckBox(e, index, ind)}
                        disabled
                      />
                    )}
                    {each?.type == "radio" && (
                      <Radio
                        disabled
                        checked={item?.selected}
                        value={item?.label}
                        name={item?.name}
                        onChange={(e) => handleSelectedRadio(e, index, ind)}
                      />
                    )}
                    <Input
                      name={item?.name}
                      type={"text"}
                      placeholder="Enter Field Value"
                      onChange={(e) => handleInputBox(e, index, ind)}
                      size="medium"
                      className="w-100 m-1"
                    />
                    {ind === each?.options?.length - 1 && (
                      <div className="d-flex w-100 justify-content-end">
                        <div
                          className="rounded border p-1 bg-white th-pointer"
                          onClick={() => {
                            each?.type == "checkbox"
                              ? addBox(index, "checkbox")
                              : addBox(index, "radio");
                          }}
                        >
                          Add Choice +
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </>
            )}
            {each?.type == "select" && (
              <>
                {each?.options?.map((item, ind) => (
                  <div className="d-flex align-items-center">
                    <Input
                      name={item?.name}
                      type={"text"}
                      placeholder="Enter Option"
                      onChange={(e) => handleInputBox(e, index, ind, "select")}
                      size="medium"
                      className="w-100 m-1"
                    />
                    {ind === each?.options?.length - 1 && (
                      <div className="d-flex w-100 justify-content-end">
                        <div
                          className="rounded border p-1"
                          onClick={() => {
                            addBox(index, "select");
                          }}
                        >
                          Add Choice +
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </>
            )}
          </div>
          <div className="d-flex text-danger justify-content-end ">
            <p
              onClick={() => {
                handleDelete(index);
                console.log("delete", index);
              }}
            >
              Delete {index + 1}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Preview;
