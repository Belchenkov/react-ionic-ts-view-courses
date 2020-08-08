import React from 'react';
import {
    IonPage,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton
} from "@ionic/react";

const CourseGoals: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                    </IonButtons>
                    <IonTitle>Course Goals</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <h2>Course Goals Page</h2>
            </IonContent>
        </IonPage>
    );
};

export default CourseGoals;