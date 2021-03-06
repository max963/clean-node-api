import { AccountModel } from '../../data/useCases/add-account/db-add-account-protocols'

export interface AddAccountModel {
  name: string
  email: string
  password: string
}

export interface AddAccount {
  add (account: AddAccountModel): Promise<AccountModel>
}
