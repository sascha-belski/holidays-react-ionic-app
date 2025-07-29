import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

const About: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>About</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <p>educational purpose only</p>
    </IonContent>
  </IonPage>
);

export default About;
