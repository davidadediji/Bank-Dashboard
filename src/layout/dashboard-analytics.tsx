import RecentTransactions from "../components/RecentTransactions";
import Statictics from "../components/Statictics";

export default function Analytics() {
  return (
    <section className=" col-span-8 border border-blue-700">
      <RecentTransactions/>
      <Statictics/>
    </section>
  )
}
