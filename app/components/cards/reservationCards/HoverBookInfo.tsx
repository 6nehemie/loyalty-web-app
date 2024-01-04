import { InformationCircleIcon } from '@heroicons/react/24/outline';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../../ui/hover-card';

const HoverBookInfo = () => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <InformationCircleIcon
          className="h-5 w-5 text-neutral-400"
          strokeWidth={1.4}
        />
      </HoverCardTrigger>
      <HoverCardContent className="bg-zinc-900 border border-zinc-800">
        <div className="font-exo text-neutral-200 text-sm flex flex-col gap-2">
          <p>Âge minimum requis : 22 ans.</p>
          <p>Caution requise : 4500.</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
export default HoverBookInfo;
