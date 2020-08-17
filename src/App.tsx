import React from 'react';
import {
    IonApp,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
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
    IonTabs
} from '@ionic/react';
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import { list, options, trophyOutline } from 'ionicons/icons';

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

import Courses from "./pages/Courses";
import CourseGoals from "./pages/CourseGoals";
import AllGoals from "./pages/AllGoals";
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
                            routerLink="/all-goals"
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
        <IonTabs>
            <IonRouterOutlet id="main">
                <Route path="/filter" exact>
                    <Filter />
                </Route>
                <Route path="/courses" exact>
                    <Courses />
                </Route>
                <Route path="/all-goals" exact>
                    <AllGoals />
                </Route>
                <Route path="/courses/:courseId">
                    <CourseGoals />
                </Route>
                <Redirect to="/courses" />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
                <IonTabButton tab="all-goals" href="/all-goals">
                    <IonIcon icon={list} />
                    <IonLabel>All Goals</IonLabel>
                </IonTabButton>
                <IonTabButton tab="courses" href="/courses">
                    <IonIcon icon={trophyOutline} />
                    <IonLabel>Courses</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
