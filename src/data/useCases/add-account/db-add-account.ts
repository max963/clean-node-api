import { AddAccount, AddAccountModel, AccountModel, Encrypter } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter

  constructor (encrypter: Encrypter) {
    this.encrypter = encrypter
  }

  async add (account: AddAccountModel): Promise<AccountModel> {
    const accountModel = new Account()
    await this.encrypter.encrypt(account.password)
    return new Promise(resolve => resolve(accountModel))
  }
}

class Account implements AccountModel {
  id: string
  name: string
  email: string
  password: string
}
