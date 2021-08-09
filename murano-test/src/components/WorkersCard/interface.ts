import {IUser} from "../../utils/types";
import {Dispatch, SetStateAction} from "react";

export interface IWorkersCard {
    onPressButton?: () => void
    users: IUser[]
    setUsers: Dispatch<SetStateAction<IUser[]>>
}