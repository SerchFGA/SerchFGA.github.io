"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LegalModalProps {
  type: 'privacy' | 'terms';
  children: React.ReactNode;
}

export function LegalModal({ type, children }: LegalModalProps) {
  const content = {
    privacy: {
      title: "Política de Privacidad",
      description: "Última actualización: Noviembre 2024",
      content: `
# Política de Privacidad

## 1. Información que recopilamos

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

### Información personal
- Nombre completo
- Dirección de correo electrónico
- Información de la empresa
- Mensajes y comunicaciones

### Información técnica
- Dirección IP
- Tipo de navegador
- Páginas visitadas
- Tiempo de permanencia

## 2. Cómo utilizamos su información

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris viverra veniam.

## 3. Compartir información

Nunca vendemos, comercializamos o transferimos de otra manera su información personal a terceros sin su consentimiento.

## 4. Seguridad de los datos

Implementamos medidas de seguridad apropiadas para proteger contra el acceso, alteración, divulgación o destrucción no autorizada de su información personal.

## 5. Sus derechos

Usted tiene derecho a:
- Acceder a su información personal
- Rectificar datos inexactos
- Solicitar la eliminación de sus datos
- Oponerse al procesamiento

## 6. Contacto

Para cualquier pregunta sobre esta política de privacidad, puede contactarnos en: privacidad@pixanai.com
      `
    },
    terms: {
      title: "Términos y Condiciones",
      description: "Última actualización: Noviembre 2024",
      content: `
# Términos y Condiciones

## 1. Aceptación de los términos

Al acceder y utilizar nuestros servicios, usted acepta cumplir con estos términos y condiciones. Si no está de acuerdo, por favor no utilice nuestros servicios.

## 2. Descripción del servicio

Pixan AI proporciona servicios de automatización e inteligencia artificial para pequeñas y medianas empresas.

### Servicios incluidos:
- Automatización de procesos
- Chatbots y asistentes IA
- Sistemas de agendamiento
- Integraciones no-code

## 3. Uso aceptable

Usted se compromete a:
- Utilizar los servicios de manera legal y ética
- No interferir con el funcionamiento de los servicios
- Proporcionar información precisa y actualizada
- Mantener la confidencialidad de sus credenciales

## 4. Limitaciones de responsabilidad

Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non. Nisl condimentum id venenatis a condimentum vitae sapien.

## 5. Modificaciones

Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios serán efectivos inmediatamente después de su publicación.

## 6. Ley aplicable

Estos términos se rigen por las leyes de México.

## 7. Contacto

Para preguntas sobre estos términos: legal@pixanai.com
      `
    }
  };

  const modalContent = content[type];

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] bg-white text-gray-900">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900">
            {modalContent.title}
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            {modalContent.description}
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] w-full rounded-md p-4">
          <div className="prose prose-sm max-w-none">
            {modalContent.content.split('\n').map((line, index) => {
              if (line.startsWith('# ')) {
                return <h1 key={index} className="text-2xl font-bold mb-4 text-gray-900">{line.substring(2)}</h1>;
              }
              if (line.startsWith('## ')) {
                return <h2 key={index} className="text-xl font-semibold mb-3 mt-6 text-gray-900">{line.substring(3)}</h2>;
              }
              if (line.startsWith('### ')) {
                return <h3 key={index} className="text-lg font-medium mb-2 mt-4 text-gray-900">{line.substring(4)}</h3>;
              }
              if (line.startsWith('- ')) {
                return <li key={index} className="mb-1 text-gray-700">{line.substring(2)}</li>;
              }
              if (line.trim() === '') {
                return <br key={index} />;
              }
              return <p key={index} className="mb-3 text-gray-700 leading-relaxed">{line}</p>;
            })}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}