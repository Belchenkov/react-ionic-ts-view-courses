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
    IonLabel,
    IonButton,
    IonIcon
} from "@ionic/react";
import { create } from 'ionicons/icons';
import { useParams } from "react-router-dom";

import { COURSE_DATA } from "./Courses";

const CourseGoals: React.FC = () => {
    const selectCourseId = useParams<{ courseId: string }>().courseId;
    const selectCourse = COURSE_DATA.find(c => c.id === selectCourseId);

    const deleteItemHandler = () => {
        console.log('delete')
    };

    const startEditGoalHandler = (event: React.MouseEvent) => {
        event.stopPropagation();
        console.log('startEditGoalHandler')
    };

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
                            <IonItem
                                key={goal.id}
                                lines="full"
                                button
                                onClick={deleteItemHandler}
                            >
                                <IonLabel>{goal.text}</IonLabel>
                                <IonButton
                                    fill="clear"
                                    color="dark"
                                    slot="end"
                                    onClick={startEditGoalHandler}
                                >
                                    <IonIcon slot="icon-only" icon={create} />
                                </IonButton>
                            </IonItem>
                        )) }
                    </IonList>
                )}
            </IonContent>
        </IonPage>
    );
};

export default CourseGoals;