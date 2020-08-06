import React from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";

const Courses: React.FC = () => {
    return (
        <React.Fragment>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Courses</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <h2>Courses Page</h2>
            </IonContent>
        </React.Fragment>
    );
};

export default Courses;