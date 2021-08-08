import {IUser} from "../../utils/types";

export interface IAddUserModal {
    isOpen: boolean
    onClose: () => void
    onCancel: () => void
    onAdd: (user: IUser) => void
}