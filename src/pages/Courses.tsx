import React from 'react';
import {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol,
    IonCardContent,
    IonCard,
    IonButton,
    IonPage
} from "@ionic/react";
// import { useHistory } from 'react-router-dom';

const COURSE_DATA = [
    {
        id: 'c1',
        title: 'React - The Complete Guide (incl Hooks, React Router, Redux)'
    },
    {
        id: 'c2',
        title: 'React Front To Back'
    },
    {
        id: 'c3',
        title: 'Ionic - Build iOS, Android & Web Apps with Ionic'
    }
];

const Courses: React.FC = () => {
    /*
    const history = useHistory();

    const changePageHandler = () => {
        history.push('/course-goals');
    };
    */

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Courses</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent class="ion-padding">
                <h2>Courses Page</h2>
                <IonGrid>
                    { COURSE_DATA.map(course => (
                        <IonRow key={course.id}>
                            <IonCol size-md="4" offset-md="4">
                                <IonCard>
                                    <IonCardContent>
                                        <h2 className="ion-text-center">{ course.title }</h2>
                                        <div className="ion-text-center ion-margin-top">
                                            <IonButton
                                                color="success"
                                                routerLink=""
                                            >Details</IonButton>
                                        </div>
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        </IonRow>
                    ))}
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Courses;