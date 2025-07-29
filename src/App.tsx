import { useState } from 'react'
import { IonApp } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { IonRouterOutlet } from '@ionic/react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Redirect exact from="/" to="/home" />
        </Switch>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);


export default App
