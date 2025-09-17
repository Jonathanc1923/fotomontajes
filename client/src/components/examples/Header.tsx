import Header from '../Header';

export default function HeaderExample() {
  return (
    <div className="h-32 bg-gray-100">
      <Header onStartWizard={() => console.log('Start wizard from header')} />
    </div>
  );
}