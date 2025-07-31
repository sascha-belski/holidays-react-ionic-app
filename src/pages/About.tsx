import React from 'react';
import { IonPage, IonButtons, IonMenuButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import { IonCard, IonCardContent } from '@ionic/react';

import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';

import { IonIcon } from '@ionic/react';
import { logoIonic } from 'ionicons/icons';

const About: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <span>About</span>
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
    <IonContent>
      <IonCard>
        <IonCardContent>
          <p>This is a demonstration project built using **React**, **TypeScript**, **Vite**, and **Ionic Framework** to explore public holidays by country and date.
              **Note:** This app uses a free REST API courtesy of [openholidaysapi.org](https://openholidaysapi.org/swagger/index.html)
              for **educational and demonstrational purposes only**.</p>
          <p>fork the corresponding GitHub repo. Amerliorations are highly appreciated</p>
</IonCardContent>
      </IonCard>
    </IonContent>
  </IonPage>
);

export default About;
