export interface PushType {
    registration_ids: string[]
    notification: Noti
    data?: Data
}

export interface Noti {
    title: string
    body: string
}

export interface Data {
    trimNo: string
    model: string
    diverLoc: string
    destination: string
    swBzr: string
    rrack: string
    qualChk?: string
    qualFile?: string
    carColor?: string
}