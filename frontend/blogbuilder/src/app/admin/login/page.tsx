'use client';

import TextInput from '@/shared/components/TextInput';
import styles from './styles.module.scss';
import Button from '@/shared/components/Button';
import { ChangeEvent, useState } from 'react';

type FormData = {
  username?: string;
  password?: string;
}

const AdminLoginPage = () => {
  const [formData, setFormData] = useState<FormData>({});

  const handleInputChange = (data: ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [data.target.name]: data.target.value
    }))
  }

  const handleSubmit = () => {
    console.log('Data:', formData);
  }

  return (
    <main className={styles.container}>
      <TextInput
        name="username"
        placeholder="Username"
        onChange={handleInputChange}
      />
      <TextInput
        name="password"
        placeholder="Password"
        type="password"
        onChange={handleInputChange}
      />
      <Button onClick={handleSubmit}>Login</Button>
    </main>
  )
}

export default AdminLoginPage;
