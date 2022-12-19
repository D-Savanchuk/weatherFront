import React from 'react';
import { useSelector } from 'react-redux';

import Header from './components/Header/Header';
import MainModal from './components/Modal/MainModal';

import './App.css';

function App() {
  const { isOpen } = useSelector((state) => state.modal);

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    const crd = pos.coords;
  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  <div id="forecast" class="section section_grey">

    <div class="section_header clearfix">
        <h2>
            Следующие 24 часа        </h2>
    </div>


    <div class="forecast_block">
        <table class="mesto-predpoved">
            <thead>
                <tr>
                    <th>18:00</th><th>19:00</th><th>20:00</th><th>21:00</th><th>22:00</th><th>23:00</th><th>00:00 <span>завтра</span></th><th>01:00 <span>завтра</span></th><th>02:00 <span>завтра</span></th><th>03:00 <span>завтра</span></th><th>04:00 <span>завтра</span></th><th>05:00 <span>завтра</span></th><th>06:00 <span>завтра</span></th><th>07:00 <span>завтра</span></th><th>08:00 <span>завтра</span></th><th>09:00 <span>завтра</span></th><th>10:00 <span>завтра</span></th><th>11:00 <span>завтра</span></th><th>12:00 <span>завтра</span></th><th>13:00 <span>завтра</span></th><th>14:00 <span>завтра</span></th><th>15:00 <span>завтра</span></th><th>16:00 <span>завтра</span></th><th>17:00 <span>завтра</span></th><th>18:00 <span>завтра</span></th>                </tr>
            </thead>
                        <tbody>
                <tr>
                    
                        <td>
                            <span class="big_ico big_ico_1_noc"></span>
                            <b class="teplota">-2 °C</b> <br>
                            <span>0 mm</span><br>
                            <div title="Вероятность осадков 0 %"><span class="prob-line">0 %</span></div>
                            <span class="wind_ico arrow_315">СЗ</span><br>
                            <span>10 km/h</span><br>
                            
                        </td>
                        
                        <td>
                            <span class="big_ico big_ico_1_noc"></span>
                            <b class="teplota">-3 °C</b> <br>
                            <span>0 mm</span><br>
                            <div title="Вероятность осадков 0 %"><span class="prob-line">0 %</span></div>
                            <span class="wind_ico arrow_315">СЗ</span><br>
                            <span>9 km/h</span><br>
                            
                        </td>
                        
                        <td>
                            <span class="big_ico big_ico_1_noc"></span>
                            <b class="teplota">-3 °C</b> <br>
                            <span>0 mm</span><br>
                            <div title="Вероятность осадков 0 %"><span class="prob-line">0 %</span></div>
                            <span class="wind_ico arrow_315">СЗ</span><br>
                            <span>10 km/h</span><br>
                            
                        </td>
                        
                        <td>
                            <span class="big_ico big_ico_1_noc"></span>
                            <b class="teplota">-3 °C</b> <br>
                            <span>0 mm</span><br>
                            <div title="Вероятность осадков 0 %"><span class="prob-line">0 %</span></div>
                            <span class="wind_ico arrow_315">СЗ</span><br>
                            <span>9 km/h</span><br>
                            
                        </td>
                        
                        <td>
                            <span class="big_ico big_ico_1_noc"></span>
                            <b class="teplota">-4 °C</b> <br>
                            <span>0 mm</span><br>
                            <div title="Вероятность осадков 0 %"><span class="prob-line">0 %</span></div>
                            <span class="wind_ico arrow_315">СЗ</span><br>
                            <span>7 km/h</span><br>
                            
                        </td>
                        
                        <td>
                            <span class="big_ico big_ico_1_noc"></span>
                            <b class="teplota">-5 °C</b> <br>
                            <span>0 mm</span><br>
                            <div title="Вероятность осадков 0 %"><span class="prob-line">0 %</span></div>
                            <span class="wind_ico arrow_315">СЗ</span><br>
                            <span>7 km/h</span><br>
                            
                        </td>
                        
                        <td>
                            <span class="big_ico big_ico_1_noc"></span>
                            <b class="teplota">-5 °C</b> <br>
                            <span>0 mm</span><br>
                            <div title="Вероятность осадков 0 %"><span class="prob-line">0 %</span></div>
                            <span class="wind_ico arrow_315">СЗ</span><br>
                            <span>7 km/h</span><br>
                            
                        </td>
                        
                        <td>
                            <span class="big_ico big_ico_1_noc"></span>
                            <b class="teplota">-5 °C</b> <br>
                            <span>0 mm</span><br>
                            <div title="Вероятность осадков 0 %"><span class="prob-line">0 %</span></div>
                            <span class="wind_ico arrow_315">СЗ</span><br>
                            <span>6 km/h</span><br>
                            
                        </td>
                        
                        <td>
                            <span class="big_ico big_ico_1_noc"></span>
                            <b class="teplota">-5 °C</b> <br>
                            <span>0 mm</span><br>
                            <div title="Вероятность осадков 0 %"><span class="prob-line">0 %</span></div>
                            <span class="wind_ico arrow_315">СЗ</span><br>
                            <span>6 km/h</span><br>
                            
                        </td>
                        
                        <td>
                            <span class="big_ico big_ico_1_noc"></span>
                            <b class="teplota">-5 °C</b> <br>
                            <span>0 mm</span><br>
                            <div title="Вероятность осадков 0 %"><span class="prob-line">0 %</span></div>
                            <span class="wind_ico arrow_315">СЗ</span><br>
                            <span>6 km/h</span><br>
                            
                        </td>
                        
                        <td>
                            <span class="big_ico big_ico_1_noc"></span>
                            <b class="teplota">-5 °C</b> <br>
                            <span>0 mm</span><br>
                            <div title="Вероятность осадков 0 %"><span class="prob-line">0 %</span></div>
                            <span class="wind_ico arrow_270">З</span><br>
                            <span>5 km/h</span><br>
                            
                        </td>
                        
                        <td>
                            <span class="big_ico big_ico_1_noc"></span>
                            <b class="teplota">-5 °C</b> <br>
                            <span>0 mm</span><br>
                            <div title="Вероятность осадков 0 %"><span class="prob-line">0 %</span></div>
                            <span class="wind_ico arrow_270">З</span><br>
                            <span>5 km/h</span><br>
                            
                        </td>
                        
                        <td>
                            <span class="big_ico big_ico_1_noc"></span>
                            <b class="teplota">-5 °C</b> <br>
                            <span>0 mm</span><br>
                            <div title="Вероятность осадков 0 %"><span class="prob-line">0 %</span></div>
                            <span class="wind_ico arrow_270">З</span><br>
                            <span>5 km/h</span><br>
                            
                        </td>
                        
                        <td>
                            <span class="big_ico big_ico_1_noc"></span>
                            <b class="teplota">-5 °C</b> <br>
                            <span>0 mm</span><br>
                            <div title="Вероятность осадков 0 %"><span class="prob-line">0 %</span></div>
                            <span class="wind_ico arrow_270">З</span><br>
                            <span>5 km/h</span><br>
                            
                        </td>
                        
                        <td>
                            <span class="big_ico big_ico_1_noc"></span>
                            <b class="teplota">-6 °C</b> <br>
                            <span>0 mm</span><br>
                            <div title="Вероятность осадков 0 %"><span class="prob-line">0 %</span></div>
                            <span class="wind_ico arrow_270">З</span><br>
                            <span>3 km/h</span><br>
                            
                        </td>
                        
                        <td>
                            <span class="big_ico big_ico_1"></span>
                            <b class="teplota">-5 °C</b> <br>
                            <span>0 mm</span><br>
                            <div title="Вероятность осадков 0 %"><span class="prob-line">0 %</span></div>
                            <span class="wind_ico arrow_270">З</span><br>
                            <span>3 km/h</span><br>
                            
                        </td>
                        
                        <td>
                            <span class="big_ico big_ico_1"></span>
                            <b class="teplota">-4 °C</b> <br>
                            <span>0 mm</span><br>
                            <div title="Вероятность осадков 0 %"><span class="prob-line">0 %</span></div>
                            <span class="wind_ico arrow_270">З</span><br>
                            <span>3 km/h</span><br>
                            
                        </td>
                        
                        <td>
                            <span class="big_ico big_ico_1"></span>
                            <b class="teplota">-2 °C</b> <br>
                            <span>0 mm</span><br>
                            <div title="Вероятность осадков 0 %"><span class="prob-line">0 %</span></div>
                            <span class="wind_ico arrow_270">З</span><br>
                            <span>5 km/h</span><br>
                            
                        </td>
                        
                        <td>
                            <span class="big_ico big_ico_1"></span>
                            <b class="teplota">-1 °C</b> <br>
                            <span>0 mm</span><br>
                            <div title="Вероятность осадков 0 %"><span class="prob-line">0 %</span></div>
                            <span class="wind_ico arrow_270">З</span><br>
                            <span>5 km/h</span><br>
                            
                        </td>
                        
                        <td>
                            <span class="big_ico big_ico_1"></span>
                            <b class="teplota">0 °C</b> <br>
                            <span>0 mm</span><br>
                            <div title="Вероятность осадков 0 %"><span class="prob-line">0 %</span></div>
                            <span class="wind_ico arrow_270">З</span><br>
                            <span>3 km/h</span><br>
                            
                        </td>
                        
                        <td>
                            <span class="big_ico big_ico_1"></span>
                            <b class="teplota">0 °C</b> <br>
                            <span>0 mm</span><br>
                            <div title="Вероятность осадков 0 %"><span class="prob-line">0 %</span></div>
                            <span class="wind_ico arrow_225">ЮЗ</span><br>
                            <span>4 km/h</span><br>
                            
                        </td>
                        
                        <td>
                            <span class="big_ico big_ico_1"></span>
                            <b class="teplota">0 °C</b> <br>
                            <span>0 mm</span><br>
                            <div title="Вероятность осадков 0 %"><span class="prob-line">0 %</span></div>
                            <span class="wind_ico arrow_225">ЮЗ</span><br>
                            <span>4 km/h</span><br>
                            
                        </td>
                        
                        <td>
                            <span class="big_ico big_ico_1"></span>
                            <b class="teplota">0 °C</b> <br>
                            <span>0 mm</span><br>
                            <div title="Вероятность осадков 0 %"><span class="prob-line">0 %</span></div>
                            <span class="wind_ico arrow_180">Ю</span><br>
                            <span>3 km/h</span><br>
                            
                        </td>
                        
                        <td>
                            <span class="big_ico big_ico_1_noc"></span>
                            <b class="teplota">-1 °C</b> <br>
                            <span>0 mm</span><br>
                            <div title="Вероятность осадков 0 %"><span class="prob-line">0 %</span></div>
                            <span class="wind_ico arrow_180">Ю</span><br>
                            <span>3 km/h</span><br>
                            
                        </td>
                        
                        <td>
                            <span class="big_ico big_ico_2_noc"></span>
                            <b class="teplota">-2 °C</b> <br>
                            <span>0 mm</span><br>
                            <div title="Вероятность осадков 0 %"><span class="prob-line">0 %</span></div>
                            <span class="wind_ico arrow_225">ЮЗ</span><br>
                            <span>1 km/h</span><br>
                            
                        </td>
                                        </tr>
            </tbody>

        </table>

    </div>
</div>
  navigator.geolocation.getCurrentPosition(success, error, options);

  return (
    <div className="app">
      <Header></Header>
      <div className='app__main-container'>
      {isOpen && <MainModal /> }
      </div>
    </div>
  );
}

export default App;
