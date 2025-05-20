import React, { useState } from 'react';

import style from './index.module.scss'

const services = [
  { value: '', label: 'Select a service' },
  { value: 'design', label: 'Design' },
  { value: 'development', label: 'Development' },
  { value: 'marketing', label: 'Marketing' },
];

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Введите имя';
    if (!formData.email.trim()) newErrors.email = 'Введите email';
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email))
      newErrors.email = 'Неверный формат email';
    if (!formData.service) newErrors.service = 'Выберите услугу';
    if (!formData.phone.trim()) newErrors.phone = 'Введите номер телефона';
    // Можно добавить проверку формата телефона
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Отправка данных или другая логика
      console.log('Отправлено:', formData);
      alert('Форма успешно отправлена!');
      setFormData({ name: '', email: '', service: '', phone: '', message: '' });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };
  return (
    <>
    <form className={style.form} onSubmit={handleSubmit} noValidate>

      <div className={style.form__inputs_wrapper}>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          aria-describedby="name-error"
          placeholder='name'
          required
        />
        {errors.name && (
          <span id="name-error" role="alert" style={{ color: 'red' }}>
            {errors.name}
          </span>
        )}
      </div>

      <div className={style.form__inputs_wrapper}>
        <input
          type="email"
          placeholder='email'
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          aria-describedby="email-error"
          required
        />
        {errors.email && (
          <span id="email-error" role="alert" style={{ color: 'red' }}>
            {errors.email}
          </span>
        )}
      </div>

      <div className={style.form__inputs_wrapper}>
        <select
          className={style.select}
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          aria-describedby="service-error"
          required
        >
          {services.map(({ value, label }) => (
            <option key={value} value={value} disabled={value === ''}>
              {label}
            </option>
          ))}
        </select>
        {errors.service && (
          <span className={style.select} id="service-error" role="alert" style={{ color: 'red' }}>
            {errors.service}
          </span>
        )}
      </div>

      <div className={style.form__inputs_wrapper}>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          aria-describedby="phone-error"
          required
          pattern="[\d\s()+-]+"
          placeholder="+7 (999) 999-99-99"
        />
        {errors.phone && (
          <span id="phone-error" role="alert" style={{ color: 'red' }}>
            {errors.phone}
          </span>
        )}
      </div>

      <div className={style.form__inputs_wrapper}>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          placeholder="Type your message here"
        />
      </div>

      <button className={style.button} type="submit">Send message</button>
    </form>
    </>
  )
}

export default Index 