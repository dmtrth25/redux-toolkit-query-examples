export interface IUser {
  id: number
  name: string
}

export interface IStateInitial {
  isLoading: boolean
  error: string | null
  user: IUser
}
