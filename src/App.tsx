import React from 'react';
import { Redirect, Route } from "react-router-dom";
import {
    IonApp,
    IonIcon,
    IonLabel,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonList,
    IonContent,
    IonMenuToggle,
    IonItem,
    IonRouterOutlet,
} from '@ionic/react';
import { IonReactRouter } from "@ionic/react-router";
import { list, options } from 'ionicons/icons';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import './theme/variables.css';
import './theme/theme.css';

import CourseTabs from "./pages/CourseTabs";
import Filter from "./pages/Filter";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
        <IonMenu contentId="main">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Course Goals</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonMenuToggle>
                        <IonItem
                            routerDirection="none"
                            button
                            routerLink="/courses/all-goals"
                        >
                            <IonIcon
                                icon={list}
                                slot="start"
                            />
                            <IonLabel>All Goals</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                    <IonMenuToggle>
                        <IonItem
                            routerDirection="none"
                            button
                            routerLink="/filter"
                        >
                            <IonIcon
                                icon={options}
                                slot="start"
                            />
                            <IonLabel>Filter</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                </IonList>
            </IonContent>
        </IonMenu>
        <IonRouterOutlet id="main">
            <Route path="/filter" exact>
                <Filter />
            </Route>
            <Route path="/courses" exact>
                <CourseTabs />
            </Route>
            <Redirect to="/courses" />
        </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
