import React from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";

const CourseGoals: React.FC = () => {
    return (
        <React.Fragment>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Course Goals</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <h2>Course Goals Page</h2>
            </IonContent>
        </React.Fragment>
    );
};

export default CourseGoals;