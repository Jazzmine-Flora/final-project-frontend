import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ isOpen, onClose, onSubmit, onSwitchToRegister }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
      // Reset form after submission
      setFormData({ email: "", password: "" });
      setErrors({});
    }
  };

  const handleClose = () => {
    setFormData({ email: "", password: "" });
    setErrors({});
    onClose();
  };

  const isValid =
    formData.email && formData.password && Object.keys(errors).length === 0;

  const alternativeAction = (
    <p className="modal__alternative-text">
      Don&apos;t have an account?{" "}
      <button
        type="button"
        className="modal__alternative-link"
        onClick={onSwitchToRegister}
      >
        Sign up
      </button>
    </p>
  );

  return (
    <ModalWithForm
      title="Sign in"
      isOpen={isOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}
      buttonText="Sign in"
      isValid={isValid}
      alternativeAction={alternativeAction}
    >
      <input
        className={`modal__input ${
          errors.email ? "modal__input_type_error" : ""
        }`}
        type="email"
        name="email"
        placeholder="Email"
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
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <span className="modal__error">{errors.password || ""}</span>
    </ModalWithForm>
  );
}

export default LoginModal;
