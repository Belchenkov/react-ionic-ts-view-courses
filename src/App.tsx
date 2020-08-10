import React from 'react';
import {
    IonApp,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    IonTabs
} from '@ionic/react';
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import { list, trophyOutline } from 'ionicons/icons';

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

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
        <IonTabs>
            <IonRouterOutlet>
                <Route path="/courses" exact>
                    <Courses />
                </Route>
                <Route path="/all-goals" exact>
                    <AllGoals />
                </Route>
                <Route path="/course-goals">
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
