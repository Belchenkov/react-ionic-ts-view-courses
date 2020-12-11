import React, { useState } from 'react';
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
    IonFabButton,
    IonAlert
} from "@ionic/react";
import { addOutline, create, trash } from 'ionicons/icons';
import { useParams } from "react-router-dom";

import { COURSE_DATA } from "./Courses";

const CourseGoals: React.FC = () => {
    const [startedDeleting, setStartedDeleting] = useState(false);

    const selectCourseId = useParams<{ courseId: string }>().courseId;
    const selectCourse = COURSE_DATA.find(c => c.id === selectCourseId);

    const startDeleteGoalHandler = () => {
        setStartedDeleting(true);
    };

    const deleteGoalHandler = () => {
        console.log('deleteGoalHandler')
        setStartedDeleting(false);
    };

    const startEditGoalHandler = (event: React.MouseEvent) => {
        event.stopPropagation();
        console.log('startEditGoalHandler')
    };

    const startAddGoalHandler = () => {
        console.log('add goal')
    };

    return (
        <React.Fragment>
            <IonAlert
                isOpen={startedDeleting}
                header="Are you sure?"
                message="Do you want to delete the goal?"
                buttons={[
                    {
                        text: 'No',
                        role: 'cancel',
                        handler: () => {
                            setStartedDeleting(false);
                        }
                    },
                    {
                        text: 'Yes',
                        handler: deleteGoalHandler
                    }
                ]}
            />
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
                                            onClick={startDeleteGoalHandler}
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
        </React.Fragment>
    );
};

export default CourseGoals;
