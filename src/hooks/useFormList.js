const useFormList = (formData, setFormData) => {
  const handleListChange = (field, value, index) => {
    const updated = [...formData[field]];
    updated[index] = value;

    if (index === formData[field].length - 1 && value !== "") {
      updated.push("");
    }

    setFormData({ ...formData, [field]: updated });
  };

  const handleListBlur = (field, value, index) => {
    if (value === "" && index !== formData[field].length - 1) {
      const updated = [...formData[field]];
      updated.splice(index, 1);
      setFormData({ ...formData, [field]: updated });
    }
  };

  return { handleListChange, handleListBlur };
};

export default useFormList;
