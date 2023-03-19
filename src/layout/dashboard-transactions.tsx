import Card from '../components/Card'
import SendMoney from '../components/SendMoney'
import QuickTransfer from '../components/QuickTransfer';
export default function Transactions() {
  return (
    <section className=" col-span-4">
      <Card/>
      <SendMoney/>
      <QuickTransfer/>
    </section>
  )
}
