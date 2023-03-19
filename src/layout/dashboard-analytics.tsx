import MoneyFlow from "../components/MoneyFlow";
import RecentContacts from "../components/RecentContacts";
import RecentTransactions from "../components/RecentTransactions";
import Statictics from "../components/Statictics";

export default function Analytics() {
  return (
    <section className=" col-span-8 font-gilroy-semibold">
      <div className=" grid grid-cols-5 mb-5">
        <MoneyFlow/>
        <RecentContacts/>
      </div>
      <RecentTransactions/>
      <Statictics/>
    </section>
  )
}
