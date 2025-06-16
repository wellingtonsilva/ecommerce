"use client"
import { useState } from 'react';
import { Dialog, DialogHeader, DialogContent, DialogTitle } from '../ui/dialog'
import { useAuth } from '@/stores/auth'
import { ArrowLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { LoginAreaStepEmail } from './login-area-step-email';
import { LoginAreaSignup } from './login-area-signup';

type Steps = "EMAIL" | "SIGNUP" | "SIGNIN";

export const LoginAreaDialog  = () => {

  const auth = useAuth();

  const [step, setStep] = useState<Steps>("EMAIL");

  const [emailField, setEmailField] = useState('');

  const handleStepEmail = (hasEmail: boolean, email: string) => {
    setEmailField(email);
    if(hasEmail){
        setStep("SIGNIN");
    } else{
        setStep("SIGNUP");
    }
  }

  return (
    <Dialog 
        open={auth.open} 
        onOpenChange={open => auth.setOpen(open)}>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle className='flex items-center gap-4'>

                    {step === "EMAIL" && (
                        <Button 
                            variant="ghost"
                            size="icon"
                            onClick={() => setStep("EMAIL")}
                            className='mr-2'
                        >
                            <ArrowLeft className='size-4'  />
                        </Button>
                    )}

                    {step === "EMAIL" && "Login / Cadastro"}
                    {step === "SIGNUP" && "Cadastro"}
                    {step === "SIGNIN" && "Login"}
                    
                </DialogTitle>
            </DialogHeader>

            <div className="flex flex-col gap-4">
                {step === "EMAIL" && (
                    <>
                        <LoginAreaStepEmail 
                            onValidate={handleStepEmail} 
                        />
                    </>
                )}

                {step === "SIGNUP" && (
                    <>
                        <LoginAreaSignup email={emailField} />
                    </>
                )}

                {step === "SIGNIN" && (
                    <>
                        <Button onClick={() => setStep("EMAIL")}>Voltar</Button>
                    </>
                )}
            </div>
        </DialogContent>
    </Dialog>
  )
}
