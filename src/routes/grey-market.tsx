import { createFileRoute } from '@tanstack/react-router';
import { GreyMarketIndex } from '@/components/grey-market/GreyMarketIndex';

export const Route = createFileRoute('/grey-market')({
  component: GreyMarketRoute,
});

function GreyMarketRoute() {
  return <GreyMarketIndex />;
}
