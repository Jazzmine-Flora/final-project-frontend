import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ isOpen, onClose, onSubmit, onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.username) {
      newErrors.username = "Username is required";
    } else if (formData.username.length < 2) {
      newErrors.username = "Username must be at least 2 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
      // Reset form after submission
      setFormData({ email: "", password: "", username: "" });
      setErrors({});
    }
  };

  const handleClose = () => {
    setFormData({ email: "", password: "", username: "" });
    setErrors({});
    onClose();
  };

  const isValid =
    formData.email &&
    formData.password &&
    formData.username &&
    Object.keys(errors).length === 0;

  const alternativeAction = (
    <p className="modal__alternative-text">
      or{" "}
      <button
        type="button"
        className="modal__alternative-link"
        onClick={onSwitchToLogin}
      >
        Sign in
      </button>
    </p>
  );

  return (
    <ModalWithForm
      title="Sign up"
      isOpen={isOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}
      buttonText="Sign up"
      isValid={isValid}
      alternativeAction={alternativeAction}
    >
      <input
        className={`modal__input ${
          errors.email ? "modal__input_type_error" : ""
        }`}
        type="email"
        name="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <span className="modal__error">{errors.email || ""}</span>

      <input
        className={`modal__input ${
          errors.password ? "modal__input_type_error" : ""
        }`}
        type="password"
        name="password"
        placeholder="Enter password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <span className="modal__error">{errors.password || ""}</span>

      <input
        className={`modal__input ${
          errors.username ? "modal__input_type_error" : ""
        }`}
        type="text"
        name="username"
        placeholder="Enter your username"
        value={formData.username}
        onChange={handleChange}
        required
      />
      <span className="modal__error">{errors.username || ""}</span>
    </ModalWithForm>
  );
}

export default RegisterModal;
