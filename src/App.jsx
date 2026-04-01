import Hero from './components/Hero';
import CelebrationDetails from './components/CelebrationDetails';
import Events from './components/Events';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full min-h-screen bg-ivory text-taupe flex flex-col items-center">
      <div className="w-full max-w-7xl overflow-x-hidden shadow-[0_0_20px_rgba(0,0,0,0.03)] bg-white/50">
        <Hero />
        <CelebrationDetails />
        <Events />
        <Footer />
      </div>
    </div>
  );
}

export default App;
