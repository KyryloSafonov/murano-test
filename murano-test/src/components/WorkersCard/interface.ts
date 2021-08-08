import {IUser} from "../AddUserModal/interface";

export interface IWorkersCard {
    onPressButton?: () => void
    users: IUser[]
}