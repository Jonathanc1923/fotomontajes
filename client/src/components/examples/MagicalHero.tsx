import MagicalHero from '../MagicalHero';

export default function MagicalHeroExample() {
  return (
    <MagicalHero 
      onStartWizard={() => console.log('Start wizard clicked')} 
    />
  );
}