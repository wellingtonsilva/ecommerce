"use client"
import { useState } from 'react'
import { CustomInput } from '../layout/custom-input';
import { z } from 'zod';
import { Button } from '../ui/button';
import { api } from '@/lib/axios';

type Props = {
     onValidate: (hasEmail: boolean, email: string) => void;
}

const schema = z.object({
    email: z.string().email('Email inválido'),
})

export const LoginAreaStepEmail = ({onValidate}: Props) => {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<any>(null);
    const [emailField, setEmailField] = useState('');	

    const handleButton = async () => {
       setErrors(null);
       const validData = schema.safeParse({email: emailField});
       if(!validData.success) {
        setErrors(validData.error.flatten().fieldErrors);
        return false;
       }

       try{
        setLoading(true);
        const emailReq = await api.post('/auth/validate_email', {
            email: validData.data.email
        })
       
        setLoading(false);
        onValidate(emailReq.data.exists ? true : false, validData.data.email);
       } catch(err){
        setLoading(false);
       }
       
    }


  return (
    <>
        <div>
            <p className="mb-2">Digite seu e-mail</p>
            <CustomInput 
                name='email' 
                errors={errors}
                disabled={loading}
                type='email'
                value={emailField}
                onChange={e => setEmailField(e.target.value)}
            />
        </div>
        <Button disabled={loading} onClick={handleButton}>Continuar</Button>
    </>
  )
}
