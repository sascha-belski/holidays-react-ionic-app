import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonMenuToggle } from '@ionic/react';

const AppMenu: React.FC = () => {
  return (
    <IonMenu contentId="main-content" side="start">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonMenuToggle>
            <IonItem routerLink="/home" routerDirection="none" detail={false}>
              <IonLabel>Home</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="/school" routerDirection="none" detail={false}>
              <IonLabel>School holidays</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="/about" routerDirection="none" detail={false}>
              <IonLabel>About</IonLabel>
            </IonItem>
          </IonMenuToggle>
          {/* add more menu items here */}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default AppMenu;
