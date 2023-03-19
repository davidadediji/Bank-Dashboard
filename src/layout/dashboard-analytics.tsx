import RecentTransactions from "../components/RecentTransactions";
import Statictics from "../components/Statictics";

export default function Analytics() {
  return (
    <section className=" col-span-8">
      <RecentTransactions/>
      <Statictics/>
    </section>
  )
}
