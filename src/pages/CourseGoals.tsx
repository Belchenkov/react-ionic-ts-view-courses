import React from 'react';
import {
    isPlatform,
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
    IonIcon,
    IonFab,
    IonFabButton
} from "@ionic/react";
import { addOutline, create, trash } from 'ionicons/icons';
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

    const startAddGoalHandler = () => {
        console.log('add goal')
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/courses/list" />
                    </IonButtons>
                    <IonTitle>{ selectCourse ? selectCourse.title : 'No course found!' }</IonTitle>
                    { !isPlatform('android') && (
                        <IonButtons slot="end">
                            <IonButton onClick={startAddGoalHandler}>
                                <IonIcon slot="icon-only" icon={addOutline} />
                            </IonButton>
                        </IonButtons>
                    ) }
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
                { isPlatform('android') && (
                    <IonFab
                        horizontal="end"
                        vertical="bottom"
                        slot="fixed"
                    >
                        <IonFabButton color="success" onClick={startAddGoalHandler}>
                            <IonIcon icon={addOutline} />
                        </IonFabButton>
                    </IonFab>
                ) }
            </IonContent>
        </IonPage>
    );
};

export default CourseGoals;
