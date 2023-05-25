import './App.css';
import { PaymentForm } from './components/PaymentForm';
import { SideCardWithDetails } from './components/SideCardWithDetails';

function App() {
  return (
    <main className='main-page'>
      <div className='payment-modal-wrapper'>
        <PaymentForm />
        <SideCardWithDetails />
      </div>
    </main>
  );
}

export default App;
