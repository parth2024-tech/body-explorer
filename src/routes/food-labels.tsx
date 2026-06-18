import { createFileRoute } from '@tanstack/react-router';
import { FoodLabelsIndex } from '../components/food-labels/FoodLabelsIndex';

export const Route = createFileRoute('/food-labels')({
  component: FoodLabels,
  head: () => ({
    meta: [
      {
        title: 'Food Label X-Ray - The Living Body Atlas',
      },
      {
        name: 'description',
        content: 'Expose supermarket lies. Learn how to read food labels, avoid hidden sugars, and decode misleading FMCG marketing claims.',
      },
    ],
  }),
});

function FoodLabels() {
  return <FoodLabelsIndex />;
}
