import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [people, setPeople] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      setShowModal(true);
      setPeople([...people, { name }]);
    } else {
      setShowModal(true);
    }
  };
  return (
    <>
      
    </>
  );
};

export default ControlledInputs;
