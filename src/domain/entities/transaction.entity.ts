interface Props {
  amount: number
}

export class TransactionEntity {
  private props: Props
  private _id: number

  constructor(props: Props, id?: number) {
    this.props = props
    if (id) this._id = id
  }

  get id() {
    return this._id
  }

  get amount() {
    return this.props.amount
  }
}
