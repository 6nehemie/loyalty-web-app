import { ChevronUp } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../arcondeon/Accordion';
import SectionWrapper from '../../wrappers/SectionWrapper';
import React from 'react';

interface AccordionSectionProps {
  title: string;
  content: string;
  value: string;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({
  value,
  title,
  content,
}) => (
  <AccordionItem value={value} className="py-6 space-y-6">
    <AccordionTrigger className="w-full text-left text-gray-950 dark:text-gray-50">
      <div className="flex items-center justify-between">
        <div className="text-lg font-medium">{title}</div>
        <ChevronUp className="h-6 w-6 text-gray-950 transition-transform duration-200 group-data-[expanded]:-rotate-180 dark:text-gray-50" />
      </div>
    </AccordionTrigger>
    <AccordionContent>
      <p className="text-gray-500 dark:text-gray-400 text-base">{content}</p>
    </AccordionContent>
  </AccordionItem>
);

export default function FAQ() {
  return (
    <SectionWrapper>
      <Accordion
        className="flex w-full flex-col divide-y divide-gray-700 dark:divide-gray-300"
        transition={{ duration: 0.2, ease: 'easeInOut' }}
      >
        <AccordionSection
          value="conditions-generales"
          title="Conditions Générales"
          content="Loyalty-RC, une société par actions simplifiée enregistrée à Lille, régit l'utilisation de ses services de location de véhicules. En utilisant ces services, vous acceptez de respecter les conditions décrites, qui incluent des responsabilités pour l'utilisation du véhicule et des obligations pendant la période de location."
        />
        <AccordionSection
          value="conditions-de-location"
          title="Conditions de Location"
          content="Les conducteurs doivent avoir au moins 20 ans, posséder un permis valide et avoir au moins deux ans d'expérience de conduite. Vous devez également fournir une identification, une preuve de résidence et une carte de crédit valide. Les conducteurs supplémentaires doivent également répondre à ces critères et être enregistrés au moment de la location."
        />
        <AccordionSection
          value="modalites-de-paiement"
          title="Modalités de Paiement"
          content="Toutes les locations nécessitent un moyen de paiement valide au moment de la réservation, ainsi qu'un dépôt de garantie basé sur la catégorie de véhicule. Les retours tardifs entraînent des frais, et les véhicules doivent être restitués avec un plein d'essence pour éviter des frais supplémentaires."
        />
        <AccordionSection
          value="politique-dannulation"
          title="Politique d'Annulation"
          content="Les réservations peuvent être annulées jusqu'à cinq jours avant la date de location pour un remboursement complet. Les annulations après cette période entraîneront des frais équivalents au montant total de la location. Les absences donneront également lieu à la conservation du montant total."
        />
        <AccordionSection
          value="responsabilites-et-obligations"
          title="Responsabilités et Obligations"
          content="Les clients doivent assurer une utilisation responsable du véhicule et signaler tout problème rapidement. La responsabilité des dommages survenant pendant la période de location incombe au client, et le respect des lois de circulation locales est obligatoire."
        />
      </Accordion>
    </SectionWrapper>
  );
}
