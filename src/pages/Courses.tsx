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
    IonPage,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle
} from "@ionic/react";
// import { useHistory } from 'react-router-dom';

export const COURSE_DATA = [
    {
        id: 'c1',
        title: 'React - The Complete Guide (incl Hooks, React Router, Redux)',
        enrolled: new Date('12/01/2020'),
        goals: [
            { id: 'c1g1', text: 'Finish the course!' },
            { id: 'c1g2', text: 'Learn a lot!' },
        ]
    },
    {
        id: 'c2',
        title: 'React Front To Back',
        enrolled: new Date('12/03/2020'),
        goals: [
            { id: 'c2g1', text: 'Finish the course!' },
            { id: 'c2g2', text: 'Learn a lot!' },
        ]
    },
    {
        id: 'c3',
        title: 'Ionic - Build iOS, Android & Web Apps with Ionic',
        enrolled: new Date('12/09/2020'),
        goals: [
            { id: 'c3g1', text: 'Finish the course!' },
            { id: 'c3g2', text: 'Learn a lot!' },
        ]
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
                                    <IonCardHeader>
                                        <IonCardTitle>{ course.title }</IonCardTitle>
                                        <IonCardSubtitle>
                                            Enrolled on
                                            {course.enrolled.toLocaleString('en-US', {
                                                year: '2-digit',
                                                month: '2-digit',
                                                day: '2-digit'
                                            })}
                                        </IonCardSubtitle>
                                    </IonCardHeader>
                                    <IonCardContent className="ion-text-center">

                                        <div className="ion-margin-top ion-text-right">
                                            <IonButton
                                                fill="clear"
                                                color="success"
                                                routerLink={`/courses/${course.id}`}
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