import { BiWifi, BiReceipt } from 'react-icons/bi';
import { FcSimCard } from 'react-icons/fc';

export const SideCardWithDetails = () => {
  return (
    <aside>
      <div className='card-transaction-wrapper'>
        <span className='blue-nudge'></span>
        <div className='card'>
          <div className='flex sim-wifi'>
            <FcSimCard size={40} opacity={0.8} />
            <BiWifi size={40} opacity={0.8} />
          </div>
          <div className='card-details'>
            <div>
              <p style={{ color: '#3f3f3fdc' }}>Jonathan Michael</p>
              <h4 style={{ margin: '10px 0' }}>&#x2022; &#x2022; &#x2022; &#x2022; &nbsp;&nbsp;54355</h4>
            </div>
            <div className='flex date-logo'>
              <p>09/23</p>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='30px' height='30px'>
                <path fill='#ff9800' d='M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z' />
                <path fill='#d50000' d='M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z' />
                <path fill='#ff3d00' d='M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z' />
              </svg>
            </div>
          </div>
        </div>
        <div className='flex transactiondetails'>
          <div className='flex dir-col' style={{ gap: '12px', padding: '0 1.5rem' }}>
            <div className='flex-between'>
              <span>Company</span>
              <strong>Apple</strong>
            </div>
            <div className='flex-between'>
              <span>Order Number</span>
              <strong>123456</strong>
            </div>
            <div className='flex-between'>
              <span>Product</span>
              <strong>Macbook Air</strong>
            </div>
            <div className='flex-between'>
              <span>VAT(20%)</span>
              <strong>$100.00</strong>
            </div>
          </div>

          <div className='horizontal-dash'></div>

          <div className='flex flex-between you-have-top-pay'>
            <div>
              <p>You have to pay</p>
              <div>
                <h2>594.99</h2>
                <small>USD</small>
              </div>
            </div>
            <BiReceipt size={25} />
          </div>
        </div>
      </div>
    </aside>
  );
};
