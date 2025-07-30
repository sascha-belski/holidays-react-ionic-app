import React from 'react';
import { useState } from 'react';
import { IonPage, IonButtons, IonMenuButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import { IonCard, IonCardContent } from '@ionic/react';

import HomeCountryPicker from '../components/HomeCountryPicker';
import HomeDatePicker from '../components/HomeDatePicker';
import CountryPickerHoliday from '../components/CountryPickerHoliday';

import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';

import { IonIcon } from '@ionic/react';
import { logoIonic } from 'ionicons/icons';


const Home: React.FC = () => {

  const currentYear = new Date().getFullYear();
  const defaultFrom = `${currentYear}-01-01`;
  const defaultTo = `${currentYear}-12-31`;

  const [selectedCountry, setSelectedCountry] = useState<string>('DE');
  const [dateFrom, setDateFrom] = useState<string>(defaultFrom);
  const [dateTo, setDateTo] = useState<string>(defaultTo);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
              <span>Home</span>
              <span style={{ display: 'inline-flex', gap: '8px', alignItems: 'center' }}>
                <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
                  <img src={viteLogo} className="logo" alt="Vite logo" style={{ maxHeight: '24px' }} />
                </a>
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                  <img src={reactLogo} className="logo react" alt="React logo" style={{ maxHeight: '24px' }} />
                </a>
                <a href="https://ionicframework.com" target="_blank" rel="noopener noreferrer">
                  <IonIcon icon={logoIonic} color="primary"></IonIcon>
                </a>
              </span>
            </div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard color="white">
           <IonCardContent>
            <HomeCountryPicker selectedCountry={selectedCountry} onChange={(country) => setSelectedCountry(country) }  />
            <HomeDatePicker id="dateFrom" defaultDate={dateFrom} onChange={(date) => setDateFrom(date)} />
            <HomeDatePicker id="dateTo" defaultDate={dateTo} onChange={(date) => setDateTo(date)} />
          </IonCardContent>
        </IonCard>
        <IonCard color="white">
           <IonCardContent>
            <CountryPickerHoliday dateFrom={dateFrom} dateTo={dateTo} selectedCountry={selectedCountry} />
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
