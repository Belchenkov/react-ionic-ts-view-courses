import React from 'react';
import {
    IonPage,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonList,
    IonItem,
    IonLabel
} from "@ionic/react";
import { useParams } from "react-router-dom";

import { COURSE_DATA } from "./Courses";

const CourseGoals: React.FC = () => {
    const selectCourseId = useParams<{ courseId: string }>().courseId;
    const selectCourse = COURSE_DATA.find(c => c.id === selectCourseId);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                    </IonButtons>
                    <IonTitle>{ selectCourse?.title }</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                { selectCourse && (
                    <IonList>
                        { selectCourse?.goals.map(goal => (
                            <IonItem key={goal.id} lines="full">
                                <IonLabel>{goal.text}</IonLabel>
                            </IonItem>
                        )) }
                    </IonList>
                )}
            </IonContent>
        </IonPage>
    );
};

export default CourseGoals;