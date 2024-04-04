//😈 
interface Payment {
    id: number,
    amount: number,
    to: string,
    notes: string
}
type PaymentColumns = ('id' | 'amount' | 'to' | 'notes')[]
class CSVWriter {
    constructor(private columns: PaymentColumns) {
        this.csv = this.columns.join(',')
    }
    private csv: string
    addRows(values: Payment[]): void {
        let rows = values.map((v) => this.formatRow(v))
        this.csv += rows.join(' \n ');
        console.log(this.csv)
    }
    private formatRow(p: Payment): string {
        return this.columns.map((col) => p[col]).join(',')
    }
}

const writer = new CSVWriter(['id', 'amount', 'to', 'notes'])
writer.addRows(
    [
        {
            id: 1,
            amount: 1234,
            to: 'safdar',
            notes: 'this is a note'
        }
    ]
)