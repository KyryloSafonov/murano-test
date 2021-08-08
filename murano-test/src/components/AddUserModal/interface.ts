export interface IAddUserModal {
    isOpen: boolean
    onClose: () => void
    onCancel: () => void
    onAdd: (user: IUser) => void
}

export interface IUser {
    fullName: string,
    date: Date | null | undefined,
    profession: string,
    experience: string | undefined,
    gender: string,
}