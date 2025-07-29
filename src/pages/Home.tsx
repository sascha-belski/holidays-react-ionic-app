import React from 'react';
import { IonPage, IonButtons, IonMenuButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

import HomeCountryPicker from '../components/HomeCountryPicker';
import HomeDatePicker from '../components/HomeDatePicker';

const Home: React.FC = () => {

  const currentYear = new Date().getFullYear();
  const defaultFrom = `${currentYear}-01-01`;
  const defaultTo = `${currentYear}-12-31`;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <HomeCountryPicker onChange={(country) => console.log('From:', country)}  />
        <HomeDatePicker id="dateFrom" defaultDate={defaultFrom} onChange={(date) => console.log('From:', date)} />
        <HomeDatePicker id="dateTo" defaultDate={defaultTo} onChange={(date) => console.log('To:', date)} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
