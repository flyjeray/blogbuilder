'use client';

import TextInput from '@/shared/components/atoms/TextInput';
import styles from './styles.module.scss';
import Button from '@/shared/components/atoms/Button';
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
        variant="large"
      />
      <TextInput
        name="password"
        placeholder="Password"
        type="password"
        onChange={handleInputChange}
        variant="large"
      />
      <Button
        variant="large"
        onClick={handleSubmit}
      >
        Login
      </Button>
    </main>
  )
}

export default AdminLoginPage;
