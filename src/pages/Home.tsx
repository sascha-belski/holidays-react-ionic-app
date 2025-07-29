import React from 'react';
import { IonPage, IonButtons, IonMenuButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

import HomeCountryPicker from '../components/HomeCountryPicker';

const Home: React.FC = () => (
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
      <HomeCountryPicker />
    </IonContent>
  </IonPage>
);

export default Home;
