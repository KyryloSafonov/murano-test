import {IUser} from "../../utils/types";

export interface IWorkersCard {
    onPressButton?: () => void
    users: IUser[]
}