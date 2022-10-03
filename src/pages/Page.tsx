import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import { Route } from 'react-router-dom';
import { Calculadora } from '../components/Calculadora';
import ExploreContainer from '../components/ExploreContainer';
import { Home } from '../components/Home';
import { Multiplicador } from '../components/Multiplicador';
import { Traductor } from '../components/Traductor';
import './Page.css';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='header'>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

        <IonRouterOutlet className='rutas'>
            <Route path="/page/home" exact={true}>
              <Home/> 
            </Route>
            <Route path="/page/sumadora" exact={true}>
              <Calculadora />
            </Route>
            <Route path="/page/traductor" exact={true}>
              <Traductor/> 
            </Route>
            <Route path="/page/multiplicador" exact={true}>
              <Multiplicador />
            </Route>
            
          </IonRouterOutlet>
    </IonPage>
  );
};

export default Page;
