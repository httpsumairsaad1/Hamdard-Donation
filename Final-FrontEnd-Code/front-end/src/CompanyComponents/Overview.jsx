import ReactSpeedometer from 'react-d3-speedometer';
import './Overview.css'
import { BarChart } from '@mui/x-charts/BarChart';

import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import BentoIcon from '@mui/icons-material/Bento';

const Overview = () => {
  
const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const amtData = [2400, 2210, 2290, 2000, 2181, 2500, 2100];

const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];



  return (
    <>
    <div className="Companycontainer">
      <div className='divCard div1'>
         <h2>Total Balance</h2>
         <div className='account'>
          <h6>Account Type</h6>
          <h1>Credit Card</h1>
          <h6>... .... .... 2598 <span>$25000</span></h6>
         </div>
         <div className='list'>
          <h5>Previous</h5>
          <h1 className='dots'>
            <span></span>
            <span></span>
            <span></span>
          </h1>
          <h3>
            Next
          </h3>
         </div>

      </div>
      <div className='divCard div2'>
          <div className='left'>
          <h1>$20,000</h1>
          <h5>Target Achieved</h5>
          <h3>$12,500</h3>
          <h5>This month Target</h5>
          <h3>$20,000</h3>
          </div>
          <div className='right'>
            <h2>May,2023</h2>
            <ReactSpeedometer
            maxValue={20000}
            value={12500}
            needleColor="red"
            startColor="green"
            segments={10}
            endColor="blue"
            height={200}
          />
            <h3>Target vs Achievment</h3>
          </div>
      </div>
      <div className='divCard div3'>
      </div>


      <div className='divCard div4'>
      <h2 className='statistic'>Statistics</h2>
      <h3>Weekly Comparison</h3>  
      <BarChart
      xAxis={[{ scaleType: 'band', data: ['Sun', 'Mun', 'Tues','Wed','Thur','Fri','Sat'] }]}
      series={[{ data: [14,13,10,10,7,9,12] }]}
      width={800}
      height={180}
    />
      </div>
      <div className='divCard div5'>
          <div className='breakdown'><h1>Expenses Breakdown</h1> <h3>*Compare to last month</h3></div>
          <div className='list'>
            
            <div>
              <div className='img'><HouseSidingIcon /></div>
              <h2>Housing <br /> <span className='price'>$250,000</span></h2>
              <div className='arrow'><ArrowRightAltIcon /></div>
            </div>
            <div>
              <div className='img'><FoodBankIcon /></div>
              <h2>Food <br /> <span className='price'>$350,000</span></h2>
              <div className='arrow'><ArrowRightAltIcon /></div>
            </div>
            <div>
              <div className='img'><EmojiTransportationIcon /></div>
              <h2>Transportation <br /> <span className='price'>$50.0</span></h2>
              <div className='arrow'><ArrowRightAltIcon /></div>
            </div>
            <div>
              <div className='img'><MovieCreationIcon /></div>
              <h2>Entertainment <br /> <span className='price'>$80.00</span></h2>
              <div className='arrow'><ArrowRightAltIcon /></div>
            </div>
            <div>
              <div className='img'><ShoppingBagIcon /></div>
              <h2>Shopping <br /> <span className='price'>$420.00</span></h2>
              <div className='arrow'><ArrowRightAltIcon /></div>
            </div>
            <div>
              <div className='img'><BentoIcon /></div>
              <h2>Other <br /> <span className='price'>$650.00</span></h2>
              <div className='arrow'><ArrowRightAltIcon /></div>
            </div>            
          </div>
      </div>
    </div>
    </>
  )
}

export default Overview