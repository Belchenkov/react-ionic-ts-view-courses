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
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonIcon
} from "@ionic/react";
import { create, trash } from 'ionicons/icons';
import { useParams } from "react-router-dom";

import { COURSE_DATA } from "./Courses";

const CourseGoals: React.FC = () => {
    const selectCourseId = useParams<{ courseId: string }>().courseId;
    const selectCourse = COURSE_DATA.find(c => c.id === selectCourseId);

    const deleteGoalHandler = () => {
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
                            <IonItemSliding key={goal.id}>
                                <IonItemOptions side="start">
                                    <IonItemOption
                                        color="danger"
                                        onClick={deleteGoalHandler}
                                    >
                                        <IonIcon slot="icon-only" icon={trash} />
                                    </IonItemOption>
                                </IonItemOptions>
                                <IonItem lines="full">
                                    <IonLabel>{goal.text}</IonLabel>
                                </IonItem>
                                <IonItemOptions side="end">
                                    <IonItemOption
                                        color="warning"
                                        onClick={startEditGoalHandler}
                                    >
                                        <IonIcon slot="icon-only" icon={create} />
                                    </IonItemOption>
                                </IonItemOptions>

                            </IonItemSliding>
                        )) }
                    </IonList>
                )}
            </IonContent>
        </IonPage>
    );
};

export default CourseGoals;
