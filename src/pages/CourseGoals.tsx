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
                <h2>{ selectCourse?.title }</h2>
            </IonContent>
        </IonPage>
    );
};

export default CourseGoals;