import {createFileRoute} from '@tanstack/react-router'
import Input from "../../components/form/Input.tsx";
import Layout from "../../components/Layout.tsx";
import Textarea from "../../components/form/Textarea.tsx";
import Button from "../../components/form/Button.tsx";
import {type FormEvent, useRef} from "react";
import ContentWidth from "../../components/ContentWidth.tsx";

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  const ref = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault()

    if (!ref.current) return

    // const SERVICE_ID = 'service_yegveoi'
    // const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
    // const PUBLIC_KEY = 'UU6sVyateTE2IWc7X'

    // emailjs
    //   .sendForm(SERVICE_ID, TEMPLATE_ID, ref.current, {
    //     publicKey: PUBLIC_KEY,
    //   })
    //   .then(() => {
    //       alert('Message envoyé avec succès !')
    //       ref.current?.reset()
    //     },
    //     (error) => {
    //       console.error('Échec de l\'envoi...', error.text)
    //       alert('Une erreur est survenue lors de l\'envoi.')
    //     },
    //   )
  }

  return (
    <Layout
      highlightedBackgroundSrc="/voyage.jpg"
      selectedMenu="CONTACT"
    >
      <ContentWidth>
        <form
          ref={ref}
          onSubmit={sendEmail}
          className="flex justify-center w-full"
        >
          <div className="flex flex-col gap-8 w-1/2">
            <h2 className="font-['Jomhuria'] text-6xl text-center text-white uppercase">
              Contactez moi !
            </h2>

            <div className="flex gap-8">
              <Input placeholder="nom" name="lastname"/>
              <Input placeholder="prénom" name="firstname"/>
            </div>

            <Input type="email" placeholder="email" name="email"/>
            <Textarea placeholder="message" name="message"/>

            <div className="flex justify-center">
              <Button label="Envoyer"/>
            </div>
          </div>
        </form>
      </ContentWidth>
    </Layout>
  )
}
