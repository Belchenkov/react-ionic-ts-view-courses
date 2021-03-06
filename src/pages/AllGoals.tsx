import React from 'react';
import {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonPage
} from "@ionic/react";

const AllGoals: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>All Goals</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <h2>All Goals Page</h2>
            </IonContent>
        </IonPage>
    );
};

export default AllGoals;